import {
  SlRadio
} from "./chunk.GSPHSWEL.js";

// src/react/radio/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var radio_default = createComponent(React, "i2c-radio", SlRadio, {
  onI2cBlur: "i2c-blur",
  onI2cChange: "i2c-change",
  onI2cFocus: "i2c-focus"
});

export {
  radio_default
};
