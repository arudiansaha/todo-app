import React, { FormEvent } from 'react';

export default function InputField() {
  return (
    <form
      className="flex items-center gap-x-2 py-2 px-4 rounded bg-grayishBlue-50 dark:bg-grayishBlue-700 shadow-2xl"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('hello');
      }}
    >
      <input
        type="checkbox"
        className="form-input h-5 w-5 p-3 rounded-full bg-grayishBlue-50 dark:bg-grayishBlue-700"
      />
      <input
        type="text"
        className="form-input w-full border-0 bg-grayishBlue-50 dark:bg-grayishBlue-700 placeholder:text-grayishBlue-400"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
