import React from 'react';

import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: undefined | 'small' | 'medium' | 'large';
};

export const Heading = ({
  children,
  as = 'h1',
  size = undefined,
}: HeadingProps) => {
  return (
    <Styled.Heading as={as} size={size}>
      {children}
    </Styled.Heading>
  );
};
