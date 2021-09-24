import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'app-root',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <app-root></app-root>
`;
