import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Button from "./";

const stories = storiesOf("Components/Button", module);

stories.add(
  "default",
  withInfo({ inline: true })(() => <Button onClick={action("onClick")} />)
);