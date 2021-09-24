import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'app-card',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <app-card></app-card>
`;
