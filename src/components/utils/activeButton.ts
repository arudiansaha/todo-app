import type Todo from 'todo';

export default function activeButton(key: string, array: Todo[]) {
  if (key === '2') return { array: array.filter((a) => !a.isCompleted), key };
  if (key === '3') return { array: array.filter((a) => a.isCompleted), key };
  return { array, key };
}
