import { RefObject } from 'react';

interface Options {
  headerRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  backgroundRef: RefObject<HTMLDivElement>;
}

const themeSwitcher = (mode: string, options: Options) => {
  options.contentRef.current?.classList.toggle(mode);
  options.headerRef.current?.classList.toggle(mode);
  options.backgroundRef.current?.classList.toggle(mode);
};

export default themeSwitcher;
