import '../src/assets/styles/example-theme.css';

const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#121113' },
        { name: 'Light', value: '#fff' },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
