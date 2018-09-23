import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Button from "./Button";

const stories = storiesOf("Components/Button", module);

stories.add(
  "default",
  withInfo({ inline: true })(() => (
    <Button onClick={action("onClick")}>
      Default
    </Button>
  )),
);
