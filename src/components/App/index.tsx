import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';
import todos from '@components/data/todos';
import useLocalStorage from '@hooks/useLocalStorage';
import Todo from 'todo';
import todoUtils from '@components/utils/todoUtils';

export default function App() {
  const [todoData, setTodoData] = useLocalStorage<Todo[]>('TODOS_KEY', todos);
  const [theme, setTheme] = useLocalStorage<string>('THEME', 'light');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const switchHandleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
  };

  const textHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const completedHandleClick = (event: MouseEvent<HTMLInputElement>) => {
    setIsCompleted(event.currentTarget.checked);
  };

  const formHandleSubmit = () => {
    todoData.push(todoUtils.create(isCompleted, text));
    setTodoData(todoData);
  };

  return (
    <>
      <Header preferedTheme={theme} switchHandleClick={switchHandleClick} />
      <Content
        todoData={todoData}
        preferedTheme={theme}
        completedHandleClick={completedHandleClick}
        textHandleChange={textHandleChange}
        formHandleSubmit={formHandleSubmit}
      />
      <Background preferedTheme={theme} />
    </>
  );
}
