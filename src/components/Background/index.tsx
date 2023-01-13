import React, { LegacyRef } from 'react';
import lightDesktopBg from '@assets/images/bg-desktop-light.jpg';
import lightMobileBg from '@assets/images/bg-mobile-light.jpg';
import darkDesktopBg from '@assets/images/bg-desktop-dark.jpg';
import darkMobileBg from '@assets/images/bg-mobile-dark.jpg';

interface Props {
  lightCoverRef: LegacyRef<HTMLPictureElement>;
  darkCoverRef: LegacyRef<HTMLPictureElement>;
  backgroundRef: LegacyRef<HTMLDivElement>;
}

export default function Background({
  lightCoverRef,
  darkCoverRef,
  backgroundRef,
}: Props) {
  return (
    <div ref={backgroundRef} className="absolute inset-0 z-[-1] w-full">
      <picture ref={lightCoverRef} className="h-[34%] w-full">
        <source media="(min-width: 768px)" srcSet={lightDesktopBg} />
        <img className="w-full object-cover" src={lightMobileBg} alt="" />
      </picture>
      <picture ref={darkCoverRef} className="hidden h-[34%] w-full">
        <source media="(min-width: 768px)" srcSet={darkDesktopBg} />
        <img className="w-full object-cover" src={darkMobileBg} alt="" />
      </picture>
      <div className="absolute inset-0 left-0 z-[-1] h-[100%] bg-grayishBlue-100 dark:bg-desaturedBlue" />
    </div>
  );
}
