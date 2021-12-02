import React, { FC } from 'react';

interface IconProps {
  path: string;
  alt?: string;
  width?: number;
}

const Icon: FC<IconProps> = ({ path, alt, width = 32 }) => {
  return <img src={path} alt={alt} width={width} />;
};

export default Icon;
