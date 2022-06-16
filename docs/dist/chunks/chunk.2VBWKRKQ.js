import {
  spinner_styles_default
} from "./chunk.NIATRW6M.js";
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

// src/components/spinner/spinner.ts
var SlSpinner = class extends s {
  render() {
    return $`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = __decorateClass([
  n("i2c-spinner")
], SlSpinner);

export {
  SlSpinner
};
