import {
  menu_label_styles_default
} from "./chunk.VK7XJNLV.js";
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

// src/components/menu-label/menu-label.ts
var SlMenuLabel = class extends s {
  render() {
    return $`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
};
SlMenuLabel.styles = menu_label_styles_default;
SlMenuLabel = __decorateClass([
  n("i2c-menu-label")
], SlMenuLabel);

export {
  SlMenuLabel
};
