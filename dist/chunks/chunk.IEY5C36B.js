import {
  SlAlert
} from "./chunk.RDFDD27B.js";

// src/react/alert/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var alert_default = createComponent(React, "i2c-alert", SlAlert, {
  onI2cShow: "i2c-show",
  onI2cAfterShow: "i2c-after-show",
  onI2cHide: "i2c-hide",
  onI2cAfterHide: "i2c-after-hide"
});

export {
  alert_default
};
