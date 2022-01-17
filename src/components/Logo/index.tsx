import React from 'react';

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ children, className }) => {
  return (
    <span className={"font-logo text-logo " + (className || '')}>
      {children || 'easy register'}
    </span>
  );
};

export default Logo;