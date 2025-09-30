import { fn } from 'storybook/test';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Success = {
  args: {
    children: 'Button',
    variant: 'success',
  },
};

export const Danger = {
  args: {
    children: 'Button',
    variant: 'danger',
  },
};

export const Warning = {
  args: {
    children: 'Button',
    variant: 'warning',
  },
};  

export const Large = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const Small = {
  args: {
    children: 'Button',
    size: 'small',
  },
};
