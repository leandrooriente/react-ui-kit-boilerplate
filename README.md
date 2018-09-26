# React UI Kit boilerplate

The perfect boilerplate to help you to create your own React UI Kit. 

[![dependencies Status](https://david-dm.org/leandrooriente/react-ui-kit-boilerplate/status.svg)](https://david-dm.org/leandrooriente/react-ui-kit-boilerplate)

## Live Example

[https://leandrooriente.github.io/react-ui-kit-boilerplate](https://leandrooriente.github.io/react-ui-kit-boilerplate/?selectedKind=Components%2FButton&selectedStory=default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs&knob-Label=Default)

## Features

- [Typescript](https://www.typescriptlang.org)
- Components generators
- Development Environment: [Storybook](https://storybook.js.org/)
- Styles: [Styled Components](https://www.styled-components.com/) with theming configuration
- Lint: [TSLint](https://palantir.github.io/tslint/)
- Tests: [Jest](https://jestjs.io/)

## Quick start

Make sure that you have Node v8 or above installed.

1. Clone this repo using `git clone  git@github.com:leandrooriente/react-ui-kit-boilerplate.git`
2. Move to the appropriate directory: `cd react-ui-kit-boilerplate`.
3. Run `npm ci` in order to install dependencies.
4. At this point you can run `npm run storybook` to see the example Storybook at [http://localhost:6006](http://localhost:6006).

## Creating new components

To add a new component, just run `npm run generate`. This command will generate all the component (Stateless or not) files for you.

## Testing

To test your components run `npm test`.
By default we run tests and lint before any push.

## Deploying storybook

To deploy storybook to Github Pages run `npm run deploy-storybook`.

## License

MIT
