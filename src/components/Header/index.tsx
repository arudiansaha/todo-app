import React, { LegacyRef, MouseEvent } from 'react';
import ToggleSwitch from './ToggleSwitch';

interface Props {
  switchHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  headerRef: LegacyRef<HTMLDivElement>;
}

export default function Header({ switchHandleClick, headerRef }: Props) {
  return (
    <header
      ref={headerRef}
      className="flex justify-between items-center max-w-xl mx-auto py-12 px-8 font-sans text-lg"
    >
      <h1 className="font-bold text-3xl uppercase tracking-[0.15em] text-lightGray">
        Todo
      </h1>
      <ToggleSwitch onClick={switchHandleClick} />
    </header>
  );
}
