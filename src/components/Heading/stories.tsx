import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Olá Mundo!',
    as: 'h1',
  },
} as ComponentMeta<typeof Heading>;

export const Template: ComponentStory<typeof Heading> = (args) => {
  const { children, ...props } = args;
  return <Heading {...props}>{children}</Heading>;
};
