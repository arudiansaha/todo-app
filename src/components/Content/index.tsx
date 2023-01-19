import React, { ChangeEvent, FormEvent, MouseEvent } from 'react';
import type Todo from 'todo';
import InputField from './InputField';
import TodoField from './TodoField';

interface Props {
  textHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  completedHandleClick: (event: MouseEvent<HTMLInputElement>) => void;
  formHandleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  todoData: Todo[];
  clearHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  preferedTheme: string;
}

export default function Content({
  textHandleChange,
  completedHandleClick,
  formHandleSubmit,
  todoData,
  clearHandleClick,
  preferedTheme,
}: Props) {
  return (
    <main
      className={`${preferedTheme} flex flex-col gap-y-4 max-w-xl mx-auto px-8 font-sans text-lg`}
    >
      <InputField
        onChange={textHandleChange}
        onClick={completedHandleClick}
        onSubmit={formHandleSubmit}
      />
      <TodoField todoData={todoData} clearHandleClick={clearHandleClick} />
    </main>
  );
}
