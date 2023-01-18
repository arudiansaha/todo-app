import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';
import themeSwitcher from '@components/utils/themeSwitcher';
import todos from '@components/data/todos';
import useLocalStorage from '@hooks/useLocalStorage';
import Todo from 'todo';
import todoUtils from '@components/utils/todoUtils';

export default function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useLocalStorage<Todo[]>('TODOS_KEY', todos);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const switchHandleClick = () => {
    themeSwitcher('dark', { headerRef, contentRef, backgroundRef });
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
      <Header headerRef={headerRef} switchHandleClick={switchHandleClick} />
      <Content
        clearHandleClick={clearHandleClick}
        todoData={data}
        contentRef={contentRef}
        completedHandleClick={completedHandleClick}
        textHandleChange={textHandleChange}
        formHandleSubmit={formHandleSubmit}
      />
      <Background backgroundRef={backgroundRef} />
    </>
  );
}
