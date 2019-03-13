import { addParameters, addDecorator, configure } from '@storybook/react'
import { create } from '@storybook/theming';
import themeDecorator from "./theme-decorator";


addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React UI Kit',
      brandUrl: '',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
});

addDecorator(themeDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
