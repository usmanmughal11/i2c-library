import {
  visually_hidden_styles_default
} from "./chunk.N55PCOW7.js";
import {
  n
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.ZU3WVWU5.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/visually-hidden/visually-hidden.ts
var SlVisuallyHidden = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = visually_hidden_styles_default;
SlVisuallyHidden = __decorateClass([
  n("i2c-visually-hidden")
], SlVisuallyHidden);

export {
  SlVisuallyHidden
};
