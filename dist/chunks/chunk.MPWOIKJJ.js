import {
  i2cButton
} from "./chunk.FYJ5F27X.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var button_default = createComponent(React, "i2c-button", i2cButton, {
  onI2cBlur: "i2c-blur",
  onI2cFocus: "i2c-focus"
});

export {
  button_default
};
