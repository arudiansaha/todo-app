/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import clsx from 'clsx';
import useLocalStorage from '@hooks/useLocalStorage';
import type Todo from 'todo';
import todoUtils from '@components/utils/todoUtils';

interface Props {
  todoData: Todo[];
}

export default function TodoField({ todoData }: Props) {
  const [storageData, setStorageData] = useLocalStorage<Todo[]>(
    'TODOS_KEY',
    todoData
  );
  const [localData, setLocalData] = useState<Todo[]>(storageData);
  const [active, setActive] = useState<string>('1');

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(storageData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStorageData(items);
    setLocalData(items);
  };

  const updateHandleClick = (id: string) => {
    todoUtils.update(id, { array: localData });
    setStorageData(localData);
    setLocalData(localData);
  };

  const removeTodo = (id: string) => {
    setLocalData(todoUtils.remove(id, { array: localData }));
    setStorageData(todoUtils.remove(id, { array: localData }));
  };

  const resetTodo = () => {
    setStorageData(todoUtils.reset());
    setLocalData(todoUtils.reset());
  };

  const activeHandleClick = (key: string) => {
    if (key === '2') {
      const activeTodo = storageData.filter((todo) => !todo.isCompleted);
      setLocalData(activeTodo);
      setActive(key);
    }

    if (key === '3') {
      const completedTodo = storageData.filter((todo) => todo.isCompleted);
      setLocalData(completedTodo);
      setActive(key);
    }

    if (key === '1') {
      setLocalData(storageData);
      setActive(key);
    }
  };

  return (
    <>
      <div
        className={clsx(
          'grid rounded overflow-hidden divide-y divide-grayishBlue-200 text-grayishBlue-700 shadow-2xl',
          'dark:divide-grayishBlue-500 dark:text-grayishBlue-50'
        )}
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="storageData">
            {(droppableProvided) => (
              <ul
                className={clsx(
                  'divide-y divide-grayishBlue-200',
                  'dark:divide-grayishBlue-500'
                )}
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {localData.map(({ id, text, isCompleted }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(draggableProvided) => (
                        <li
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                          ref={draggableProvided.innerRef}
                          className={clsx(
                            'flex items-center gap-x-2 px-4 bg-grayishBlue-50',
                            'dark:bg-grayishBlue-700'
                          )}
                        >
                          <input
                            type="checkbox"
                            defaultChecked={isCompleted}
                            className={clsx(
                              'form-input h-5 w-5 p-3 rounded-full bg-grayishBlue-50',
                              'dark:bg-grayishBlue-700'
                            )}
                            onChange={() => updateHandleClick(id)}
                          />
                          <span className="w-full py-3.5 px-4">{text} </span>
                          <button
                            type="button"
                            className={clsx(
                              'text-grayishBlue-700',
                              'dark:text-grayishBlue-50'
                            )}
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
        <div
          className={clsx(
            'flex justify-between items-center py-2 px-4 bg-grayishBlue-50 text-grayishBlue-400',
            'dark:bg-grayishBlue-700'
          )}
        >
          <div>{`${storageData.length} items left`}</div>
          <div
            className={clsx(
              'hidden justify-center items-center gap-x-2 py-2 px-4 font-bold',
              'md:flex'
            )}
          >
            <button
              key="1"
              className={
                active === '1' ? 'text-brightBlue' : 'text-grayishBlue-400'
              }
              type="button"
              onClick={() => activeHandleClick('1')}
            >
              All
            </button>
            <button
              key="2"
              className={
                active === '2' ? 'text-brightBlue' : 'text-grayishBlue-400'
              }
              type="button"
              onClick={() => activeHandleClick('2')}
            >
              Active
            </button>
            <button
              key="3"
              className={
                active === '3' ? 'text-brightBlue' : 'text-grayishBlue-400'
              }
              type="button"
              onClick={() => activeHandleClick('3')}
            >
              Completed
            </button>
          </div>
          <button type="button" onClick={resetTodo}>
            Clear Compleated
          </button>
        </div>
      </div>
      <div
        className={clsx(
          'flex justify-center items-center gap-x-2 py-2 px-4 font-bold rounded bg-grayishBlue-50 shadow-2xl',
          'md:hidden',
          'dark:bg-grayishBlue-700'
        )}
      >
        <button
          key="1"
          className={
            active === '1' ? 'text-brightBlue' : 'text-grayishBlue-400'
          }
          type="button"
          onClick={() => activeHandleClick('1')}
        >
          All
        </button>
        <button
          key="2"
          className={
            active === '2' ? 'text-brightBlue' : 'text-grayishBlue-400'
          }
          type="button"
          onClick={() => activeHandleClick('2')}
        >
          Active
        </button>
        <button
          key="3"
          className={
            active === '3' ? 'text-brightBlue' : 'text-grayishBlue-400'
          }
          type="button"
          onClick={() => activeHandleClick('3')}
        >
          Completed
        </button>
      </div>
    </>
  );
}
