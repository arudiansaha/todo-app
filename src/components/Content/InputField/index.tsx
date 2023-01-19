import React, { ChangeEvent, FormEvent, MouseEvent } from 'react';
import clsx from 'clsx';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function InputField({ onChange, onSubmit, onClick }: Props) {
  return (
    <form
      className={clsx(
        'flex items-center gap-x-2 py-2 px-4 rounded bg-grayishBlue-50 text-grayishBlue-700 shadow-2xl',
        'dark:bg-grayishBlue-700 dark:text-grayishBlue-50'
      )}
      onSubmit={onSubmit}
    >
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 p-3 rounded-full"
        onClick={onClick}
      />
      <input
        type="text"
        className={clsx(
          'form-input w-full border-0 bg-grayishBlue-50',
          'dark:bg-grayishBlue-700',
          'placeholder:text-grayishBlue-400'
        )}
        onChange={onChange}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
