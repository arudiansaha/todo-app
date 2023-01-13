import React, { FormEvent, LegacyRef } from 'react';
import type Todo from 'todo';
import InputField from './InputField';
import TodoField from './TodoField';
import ButtonField from './ButtonField';

const todos: Todo[] = [
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Adding Handler.',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Adding storage.',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Create hooks.',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Make app Responsiveness.',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Implement CRUD.',
    createdAt: new Date().toISOString(),
  },
];

interface Props {
  formHandleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  contentRef: LegacyRef<HTMLDivElement>;
}

export default function Content({ formHandleSubmit, contentRef }: Props) {
  return (
    <main
      ref={contentRef}
      className="flex flex-col gap-y-4 max-w-xl mx-auto px-8 font-sans text-lg"
    >
      <InputField formHandleSubmit={formHandleSubmit} />
      <TodoField data={todos} />
      <ButtonField />
    </main>
  );
}
