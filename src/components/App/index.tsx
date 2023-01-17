import React, { FormEvent, useRef } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';
import themeSwitcher from '@components/utils/themeSwitcher';

export default function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const switchHandleClick = () => {
    themeSwitcher('dark', { headerRef, contentRef, backgroundRef });
  };

  const formHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello');
  };

  return (
    <>
      <Header headerRef={headerRef} switchHandleClick={switchHandleClick} />
      <Content contentRef={contentRef} formHandleSubmit={formHandleSubmit} />
      <Background backgroundRef={backgroundRef} />
    </>
  );
}
