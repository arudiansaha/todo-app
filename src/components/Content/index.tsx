import React from 'react';
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

export default function Content() {
  return (
    <main className="flex flex-col gap-y-4 max-w-xl mx-auto px-8 font-sans text-lg text-grayishBlue-700 dark:text-grayishBlue-50">
      <InputField />
      <TodoField data={todos} />
      <ButtonField />
    </main>
  );
}
