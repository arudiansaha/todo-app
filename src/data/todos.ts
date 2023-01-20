import Todo from 'todo';

const todos: Todo[] = [
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: true,
    text: 'Complete online Javascript course',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Jog around the park 3x',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: '10 minutes meditation',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Read for 1 hour',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Pick up groceries',
    createdAt: new Date().toISOString(),
  },
  {
    id: `todo-${crypto.randomUUID()}`,
    isCompleted: false,
    text: 'Complete Todo App on Fronend Mentor',
    createdAt: new Date().toISOString(),
  },
];

export default todos;
