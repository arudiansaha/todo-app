import type Todo from 'todo';

interface Options {
  array: Todo[];
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
    } else {
      filteredArray.isCompleted = true;
    }
  },

  remove(id: string, options: Options) {
    return options.array.filter((value) => value.id !== id);
  },
};

export default todoUtils;
