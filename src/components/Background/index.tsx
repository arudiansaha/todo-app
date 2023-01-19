import React from 'react';
import lightDesktopBg from '@assets/images/bg-desktop-light.jpg';
import lightMobileBg from '@assets/images/bg-mobile-light.jpg';
import darkDesktopBg from '@assets/images/bg-desktop-dark.jpg';
import darkMobileBg from '@assets/images/bg-mobile-dark.jpg';

interface Props {
  preferedTheme: string;
}

export default function Background({ preferedTheme }: Props) {
  return (
    <div className={`${preferedTheme} absolute inset-0 z-[-1] w-full`}>
      <picture className="dark:hidden h-[34%] w-full">
        <source media="(min-width: 768px)" srcSet={lightDesktopBg} />
        <img className="w-full object-cover" src={lightMobileBg} alt="" />
      </picture>
      <picture className="hidden dark:block h-[34%] w-full">
        <source media="(min-width: 768px)" srcSet={darkDesktopBg} />
        <img className="w-full object-cover" src={darkMobileBg} alt="" />
      </picture>
      <div className="absolute inset-0 left-0 z-[-1] h-[100%] bg-grayishBlue-100 dark:bg-desaturedBlue" />
    </div>
  );
}
