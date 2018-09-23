import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import Button from "./Button";

const stories = storiesOf("Components/Button", module);

stories.add(
  "default",
  wInfo()(() => (
    <Button onClick={action("onClick")}>
      Default
    </Button>
  )),
);
