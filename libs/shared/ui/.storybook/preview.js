import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../../../../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[AZ].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  a11y: {
    element: '#root',
    manual: false
  }
};
