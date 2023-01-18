import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';
import themeSwitcher from '@components/utils/themeSwitcher';
import todos from '@components/data/todos';
import useLocalStorage from '@hooks/useLocalStorage';
import Todo from 'todo';

export default function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useLocalStorage<Todo[]>('TODOS_KEY', todos);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  const switchHandleClick = () => {
    themeSwitcher('dark', { headerRef, contentRef, backgroundRef });
  };

  const inputHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const formHandleSubmit = () => {
    const todo = {
      id: `todo-${crypto.randomUUID()}`,
      isCompleted: false,
      text,
      createdAt: new Date().toISOString(),
    };

    data.push(todo);
    setData(data);
  };

  const clearHandleClick = () => {
    setData([]);
    window.location.reload();
  };

  return (
    <>
      <Header headerRef={headerRef} switchHandleClick={switchHandleClick} />
      <Content
        clearHandleClick={clearHandleClick}
        todoData={data}
        contentRef={contentRef}
        inputHandleChange={inputHandleChange}
        formHandleSubmit={formHandleSubmit}
      />
      <Background backgroundRef={backgroundRef} />
    </>
  );
}
