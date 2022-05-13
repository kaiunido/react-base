import React from 'react';

import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';
import { cleanup, screen } from '@testing-library/react';
import theme from '../../styles/theme';

describe('<Heading />', () => {
  it('Should render with defaults', () => {
    renderTheme(<Heading>Olá Mundo!</Heading>);

    expect(
      screen.getByRole('heading', { name: 'Olá Mundo!' }),
    ).toBeInTheDocument();
  });

  it('Should render with sizes', () => {
    const sizes: Array<'small' | 'medium' | 'large'> = [
      'small',
      'medium',
      'large',
    ];

    sizes.map((size) => {
      renderTheme(<Heading size={size}>Olá Mundo!</Heading>);

      const heading = screen.getByRole('heading', { name: 'Olá Mundo!' });

      expect(heading).toHaveStyle({ fontSize: theme.fonts.sizes[size] });

      cleanup();
    });
  });
});
