import React, { ChangeEvent, FormEvent, MouseEvent, LegacyRef } from 'react';
import type Todo from 'todo';
import InputField from './InputField';
import TodoField from './TodoField';
import ButtonField from './ButtonField';

interface Props {
  inputHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formHandleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  contentRef: LegacyRef<HTMLDivElement>;
  todoData: Todo[];
  clearHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Content({
  inputHandleChange,
  formHandleSubmit,
  contentRef,
  todoData,
  clearHandleClick,
}: Props) {
  return (
    <main
      ref={contentRef}
      className="flex flex-col gap-y-4 max-w-xl mx-auto px-8 font-sans text-lg"
    >
      <InputField onChange={inputHandleChange} onSubmit={formHandleSubmit} />
      <TodoField todoData={todoData} clearHandleClick={clearHandleClick} />
      <ButtonField />
    </main>
  );
}
