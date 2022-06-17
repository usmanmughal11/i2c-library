import {
  SlInput
} from "./chunk.55GKQVLT.js";

// src/react/input/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var input_default = createComponent(React, "i2c-input", SlInput, {
  onI2cChange: "i2c-change",
  onI2cClear: "i2c-clear",
  onI2cInput: "i2c-input",
  onI2cFocus: "i2c-focus",
  onI2cBlur: "i2c-blur"
});

export {
  input_default
};
