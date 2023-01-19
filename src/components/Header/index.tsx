import React, { MouseEvent } from 'react';
import ToggleSwitch from './ToggleSwitch';

interface Props {
  switchHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  preferedTheme: string;
}

export default function Header({ switchHandleClick, preferedTheme }: Props) {
  return (
    <header
      className={`${preferedTheme} flex justify-between items-center max-w-xl mx-auto py-12 px-8 font-sans text-lg`}
    >
      <h1 className="font-bold text-3xl uppercase tracking-[0.15em] text-lightGray">
        Todo
      </h1>
      <ToggleSwitch onClick={switchHandleClick} />
    </header>
  );
}
