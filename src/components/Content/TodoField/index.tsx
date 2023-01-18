/* eslint-disable react/jsx-props-no-spreading */
import React, { MouseEvent, useRef } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import useLocalStorage from '@hooks/useLocalStorage';
import type Todo from 'todo';
import todoUtils from '@components/utils/todoUtils';

interface Props {
  todoData: Todo[];
  clearHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function TodoField({ todoData, clearHandleClick }: Props) {
  const [todos, setTodos] = useLocalStorage<Todo[]>('TODOS_KEY', todoData);
  const completedRef = useRef<HTMLInputElement>(null);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  const updateHandleClick = (id: string) => {
    todoUtils.update(id, { array: todos, completedRef });
    setTodos(todos);
  };

  const removeTodo = (id: string) => {
    todoUtils.remove(id, todos);
    setTodos(todos);
    window.location.reload();
  };

  return (
    <div className="grid rounded overflow-hidden divide-y divide-grayishBlue-200 dark:divide-grayishBlue-500 text-grayishBlue-700 dark:text-grayishBlue-50 shadow-2xl">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(droppableProvided) => (
            <ul
              className="divide-y divide-grayishBlue-200 dark:divide-grayishBlue-500"
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {todos.map(({ id, text, isCompleted }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        ref={draggableProvided.innerRef}
                        className="flex items-center gap-x-2 px-4 bg-grayishBlue-50 dark:bg-grayishBlue-700"
                      >
                        <input
                          type="checkbox"
                          ref={completedRef}
                          defaultChecked={isCompleted}
                          className="form-input h-5 w-5 p-3 rounded-full bg-grayishBlue-50 dark:bg-grayishBlue-700"
                          onChange={() => updateHandleClick(id)}
                        />
                        <span className="w-full py-3.5 px-4">{text} </span>
                        <button
                          type="button"
                          className="text-grayishBlue-700 dark:text-grayishBlue-50"
                          onClick={() => removeTodo(id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                          >
                            <path
                              fill="#494C6B"
                              fillRule="evenodd"
                              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                            />
                          </svg>
                        </button>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex justify-between items-center py-2 px-4 bg-grayishBlue-50 dark:bg-grayishBlue-700 text-grayishBlue-400">
        <div>{`${todoData.length} items left`}</div>
        <div className="hidden md:flex justify-center items-center gap-x-2 py-2 px-4 font-bold">
          <button className="text-grayishBlue-400" type="button">
            All
          </button>
          <button className="text-grayishBlue-400" type="button">
            Active
          </button>
          <button className="text-grayishBlue-400" type="button">
            Completed
          </button>
        </div>
        <button type="button" onClick={clearHandleClick}>
          Clear Compleated
        </button>
      </div>
    </div>
  );
}
