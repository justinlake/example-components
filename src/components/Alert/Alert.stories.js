import { fn } from '@storybook/test';
import Alert from './Alert';
import Link from '../Link/Link';

export default {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    onClose: fn()
  },
};

export const Info = {
  args: {
    children: 'This is an info alert.',
    type: 'info',
  },
};

export const Success = {
  args: {
    children: 'This is a success alert.',
    type: 'success',
  },
};

export const Warning = {
  args: {
    children: 'This is a warning alert.',
    type: 'warning',
  },
};

export const Error = {
  args: {
    children: 'This is an error alert.',
    type: 'error',
  },
};

export const Filled = {
  args: {
    children: 'This is a filled alert.',
    variant: 'filled',
  },
};

export const Outlined = {
  args: {
    children: 'This is an outlined alert.',
    variant: 'outlined',
  },
};

export const NonClosable = {
  args: {
    children: 'This alert is not closable.',
    closable: false,
  },
};

export const WithCustomContent = {
  args: {
    children: (
      <div>
        <strong>Custom Content:</strong> You can put any valid React node here, including <Link href="https://example.com" target="_blank">links</Link> and other components.
      </div>
    ),
  },
};