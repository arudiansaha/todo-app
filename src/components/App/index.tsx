import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';
import todos from 'data/todos';
import useLocalStorage from '@hooks/useLocalStorage';
import todoUtils from '@components/utils/todoUtils';
import themeSwitcher from '@components/utils/themeSwitcher';
import type Todo from 'todo';

export default function App() {
  const [theme, setTheme] = useLocalStorage<string>('THEME', 'light');

  const switchHandleClick = () => {
    setTheme(themeSwitcher(theme));
  };

  return (
    <>
      <Header preferedTheme={theme} switchHandleClick={switchHandleClick} />
      <Content preferedTheme={theme} />
      <Background preferedTheme={theme} />
    </>
  );
}
