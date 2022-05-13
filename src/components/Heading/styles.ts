import styled, { css, DefaultTheme } from 'styled-components';

import { HeadingProps } from '.';

const getSize = (theme: DefaultTheme, size: string | undefined): string => {
  switch (size) {
    case 'small':
      return theme.fonts.sizes.small;
    case 'medium':
      return theme.fonts.sizes.medium;
    case 'large':
      return theme.fonts.sizes.large;
  }

  return 'revert';
};

export const Heading = styled.h1<HeadingProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.fonts.family.roboto};
    margin: 1.5rem 0;
    font-size: ${getSize(theme, size)};
  `}
`;
