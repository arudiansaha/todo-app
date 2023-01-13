import React, { FormEvent, LegacyRef } from 'react';

interface Props {
  formHandleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function InputField({ formHandleSubmit }: Props) {
  return (
    <form
      className="flex items-center gap-x-2 py-2 px-4 rounded bg-grayishBlue-50 dark:bg-grayishBlue-700 text-grayishBlue-700 dark:text-grayishBlue-50 shadow-2xl"
      onSubmit={formHandleSubmit}
    >
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 p-3 rounded-full bg-grayishBlue-50 dark:bg-grayishBlue-700"
      />
      <input
        type="text"
        className="form-input w-full border-0 bg-grayishBlue-50 dark:bg-grayishBlue-700 placeholder:text-grayishBlue-400"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
