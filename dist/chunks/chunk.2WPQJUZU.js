import {
  SlTooltip
} from "./chunk.UOD22SEU.js";

// src/react/tooltip/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var tooltip_default = createComponent(React, "i2c-tooltip", SlTooltip, {
  onI2cShow: "i2c-show",
  onI2cAfterShow: "i2c-after-show",
  onI2cHide: "i2c-hide",
  onI2cAfterHide: "i2c-after-hide"
});

export {
  tooltip_default
};
