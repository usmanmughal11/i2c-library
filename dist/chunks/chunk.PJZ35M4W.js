import {
  SlAnimatedImage
} from "./chunk.HL3DOUJL.js";

// src/react/animated-image/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var animated_image_default = createComponent(React, "i2c-animated-image", SlAnimatedImage, {
  onI2cLoad: "i2c-load",
  onI2cError: "i2c-error"
});

export {
  animated_image_default
};
