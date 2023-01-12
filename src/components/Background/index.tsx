import React from 'react';
import lightDesktopBg from '@assets/images/bg-desktop-light.jpg';
import lightMobileBg from '@assets/images/bg-mobile-light.jpg';
import darkDesktopBg from '@assets/images/bg-desktop-dark.jpg';
import darkMobileBg from '@assets/images/bg-mobile-dark.jpg';

export default function Background() {
  return (
    <div className="absolute inset-0 z-[-1] w-full">
      <picture className="block dark:hidden h-[34vh] w-full">
        <source media="(min-width: 768px)" srcSet={lightDesktopBg} />
        <img
          className="h-full w-full object-cover"
          src={lightMobileBg}
          alt=""
        />
      </picture>
      <picture className="hidden dark:block h-[34%] w-full">
        <source media="(min-width: 768px)" srcSet={darkDesktopBg} />
        <img className="h-full w-full object-cover" src={darkMobileBg} alt="" />
      </picture>
      <div className="h-[66vh] bg-grayishBlue-100 dark:bg-desaturedBlue" />
    </div>
  );
}
