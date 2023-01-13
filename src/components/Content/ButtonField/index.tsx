import React from 'react';

export default function ButtonField() {
  return (
    <div className="flex md:hidden justify-center items-center gap-x-2 py-2 px-4 font-bold rounded bg-grayishBlue-50 dark:bg-grayishBlue-700 shadow-2xl">
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
  );
}
