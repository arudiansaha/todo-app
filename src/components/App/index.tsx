import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';
import todos from '@components/data/todos';
import useLocalStorage from '@hooks/useLocalStorage';
import Todo from 'todo';
import todoUtils from '@components/utils/todoUtils';

export default function App() {
  const [data, setData] = useLocalStorage<Todo[]>('TODOS_KEY', todos);
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
    const todo = todoUtils.create(isCompleted, text);
    data.push(todo);
    setData(data);
  };

  const clearHandleClick = () => {
    setData(todoUtils.reset());
    window.location.reload();
  };

  return (
    <>
      <Header preferedTheme={theme} switchHandleClick={switchHandleClick} />
      <Content
        preferedTheme={theme}
        clearHandleClick={clearHandleClick}
        todoData={data}
        completedHandleClick={completedHandleClick}
        textHandleChange={textHandleChange}
        formHandleSubmit={formHandleSubmit}
      />
      <Background preferedTheme={theme} />
    </>
  );
}
