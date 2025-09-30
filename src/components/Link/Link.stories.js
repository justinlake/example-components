import { fn } from 'storybook/test';
import Link from './Link';

export default {
  title: 'Example/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    href: '#',
    onClick: fn()
  },
};

export const Primary = {
  args: {
    children: 'Link',
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Link',
    color: 'secondary',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};

export const Success = {
  args: {
    children: 'Link',
    color: 'success',
  },
};

export const Danger = {
  args: {
    children: 'Link',
    color: 'danger',
  },
};

export const Warning = {
  args: {
    children: 'Link',
    color: 'warning',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};  
