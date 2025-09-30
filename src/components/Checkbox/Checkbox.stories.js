import { fn } from 'storybook/test';
import Checkbox from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: { onClick: fn() },
};

export const Primary = {};

export const WithLabel = {
  args: {
    label: 'Checkbox',
  },
};
