import {
  SlDrawer
} from "./chunk.L6X2NATO.js";

// src/react/drawer/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var drawer_default = createComponent(React, "i2c-drawer", SlDrawer, {
  onI2cShow: "i2c-show",
  onI2cAfterShow: "i2c-after-show",
  onI2cHide: "i2c-hide",
  onI2cAfterHide: "i2c-after-hide",
  onI2cInitialFocus: "i2c-initial-focus",
  onI2cRequestClose: "i2c-request-close"
});

export {
  drawer_default
};
