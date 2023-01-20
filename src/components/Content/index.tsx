import React, { ChangeEvent, MouseEvent, useState } from 'react';
import type Todo from 'todo';
import todoUtils from '@components/utils/todoUtils';
import useLocalStorage from '@hooks/useLocalStorage';
import todos from '@data/todos';
import InputField from './InputField';
import TodoField from './TodoField';

interface Props {
  preferedTheme: string;
}

export default function Content({ preferedTheme }: Props) {
  const [storageData, setStorageData] = useLocalStorage<Todo[]>(
    'TODOS_KEY',
    todos
  );
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const textHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const completedHandleClick = (event: MouseEvent<HTMLInputElement>) => {
    setIsCompleted(event.currentTarget.checked);
  };

  const formHandleSubmit = () => {
    storageData.push(todoUtils.create(isCompleted, text));
    setStorageData(storageData);
  };

  const updateHandleClick = (id: string) => {
    todoUtils.update(id, { array: storageData });
    setStorageData(storageData);
    window.location.reload();
  };

  const removeHandleClick = (id: string) => {
    setStorageData(todoUtils.remove(id, { array: storageData }));
    window.location.reload();
  };

  const resetHandleClick = () => {
    setStorageData(todoUtils.reset());
    window.location.reload();
  };

  return (
    <main
      className={`${preferedTheme} flex flex-col gap-y-4 max-w-xl mx-auto px-8 font-sans text-lg`}
    >
      <InputField
        onClick={completedHandleClick}
        onChange={textHandleChange}
        onSubmit={formHandleSubmit}
      />
      <TodoField
        todoData={storageData}
        updateHandleClick={updateHandleClick}
        removeHandleClick={removeHandleClick}
        resetHandleClick={resetHandleClick}
      />
    </main>
  );
}
