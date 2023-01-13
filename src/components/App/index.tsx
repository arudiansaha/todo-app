import React, { FormEvent, useRef } from 'react';
import Header from '@components/Header';
import Content from '@components/Content';
import Background from '@components/Background';

export default function App() {
  const lightCoverRef = useRef<HTMLPictureElement>(null);
  const darkCoverRef = useRef<HTMLPictureElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const switchHandleClick = () => {
    lightCoverRef.current?.classList.toggle('hidden');
    darkCoverRef.current?.classList.toggle('hidden');
    headerRef.current?.classList.toggle('dark');
    contentRef.current?.classList.toggle('dark');
    backgroundRef.current?.classList.toggle('dark');
  };

  const formHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello');
  };

  return (
    <>
      <Header headerRef={headerRef} switchHandleClick={switchHandleClick} />
      <Content contentRef={contentRef} formHandleSubmit={formHandleSubmit} />
      <Background
        lightCoverRef={lightCoverRef}
        darkCoverRef={darkCoverRef}
        backgroundRef={backgroundRef}
      />
    </>
  );
}
