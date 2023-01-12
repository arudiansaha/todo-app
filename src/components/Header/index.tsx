import React from 'react';
import ToggleTheme from './ToggleTheme';

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-xl mx-auto py-12 px-8 font-sans text-lg">
      <h1 className="font-bold text-3xl uppercase tracking-[0.15em] text-lightGray">
        Todo
      </h1>
      <ToggleTheme />
    </header>
  );
}
