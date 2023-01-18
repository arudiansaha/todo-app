import { RefObject } from 'react';
import type Todo from 'todo';

interface Options {
  array: Todo[];
  completedRef: RefObject<HTMLInputElement>;
}

const todoUtils = {
  create(isCompleted: boolean, text: string) {
    return {
      id: `todo-${crypto.randomUUID()}`,
      isCompleted,
      text,
      createdAt: new Date().toISOString(),
    };
  },

  reset() {
    return [];
  },

  update(id: string, options: Options) {
    const filteredArray = options.array.filter((a) => a.id === id)[0];

    if (filteredArray.isCompleted) {
      filteredArray.isCompleted = false;
      window.location.reload();
    } else {
      filteredArray.isCompleted = true;
      window.location.reload();
    }
  },

  remove(id: string, array: Todo[]) {
    array.splice(
      array.findIndex((a) => a.id === id),
      1
    );
  },
};

export default todoUtils;
