
import { addDecorator, configure } from "@storybook/react";
import themeDecorator from "./theme-decorator";

const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);
