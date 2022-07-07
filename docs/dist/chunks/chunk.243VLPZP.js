import {
  badge_group_styles_default
} from "./chunk.X5KPLXVN.js";
import {
  e,
  n
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.ZU3WVWU5.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/badge-group/badge-group.ts
var I2cBadgeGroup = class extends s {
  constructor() {
    super(...arguments);
    this.variant = "neutral";
    this.badgeRight = false;
  }
  render() {
    return $`
    <div class="badge-group ${this.badgeRight ? "badge-right" : ""}  badge-group-${this.variant}">
       <span part="badge-group-badge">
         <slot name="badge"></slot>
       </span>
        <span class="badge-title">
          <slot><slot>
        </span>
    </div>
    `;
  }
};
I2cBadgeGroup.styles = badge_group_styles_default;
__decorateClass([
  e({ reflect: true })
], I2cBadgeGroup.prototype, "variant", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], I2cBadgeGroup.prototype, "badgeRight", 2);
I2cBadgeGroup = __decorateClass([
  n("i2c-badge-group")
], I2cBadgeGroup);

export {
  I2cBadgeGroup
};
