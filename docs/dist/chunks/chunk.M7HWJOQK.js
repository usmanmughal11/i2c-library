import {
  badge_styles_default
} from "./chunk.L3UKCPPQ.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
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

// src/components/badge/badge.ts
var i2cBadge = class extends s {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.size = "medium";
    this.pill = false;
    this.circle = false;
    this.imgpath = "";
    this.closable = false;
    this.pulse = false;
  }
  render() {
    return $`
      <span
        part="base"
        class=${o({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--light--primary": this.variant === "light-primary",
      "badge--light--success": this.variant === "light-success",
      "badge--light--neutral": this.variant === "light-neutral",
      "badge--light--warning": this.variant === "light-warning",
      "badge--light--danger": this.variant === "light-danger",
      "badge--lighter--primary": this.variant === "lighter-primary",
      "badge--lighter--success": this.variant === "lighter-success",
      "badge--lighter--neutral": this.variant === "lighter-neutral",
      "badge--dark--neutral": this.variant === "dark-neutral",
      "badge--lighter--warning": this.variant === "lighter-warning",
      "badge--lighter--danger": this.variant === "lighter-danger",
      "badge--small": this.size === "small",
      "badge--medium": this.size === "medium",
      "badge--large": this.size === "large",
      "badge--has--img": this.imgpath !== "",
      "badge--has--right--icon": this.rightIcon,
      "badge--has--icon": this.iconname,
      "badge--pill": this.pill,
      "badge--circle": this.circle,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
      ${this.iconname ? $`
           <i2c-icon 
            class="badge--icon" name="${this.iconname}"></i2c-icon>
        ` : ""}
        ${this.imgpath ? $`
          <i2c-icon class="badge--img" src="${this.imgpath}"></i2c-icon>
          ` : ""}
        <slot></slot>
        ${this.rightIcon ? $`
              <i2c-icon 
                class="badge--right--icon"
                name="${this.rightIcon}"
              ></i2c-icon-button>
            ` : ""}
      </span>
    `;
  }
};
i2cBadge.styles = badge_styles_default;
__decorateClass([
  e({ reflect: true })
], i2cBadge.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], i2cBadge.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cBadge.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cBadge.prototype, "circle", 2);
__decorateClass([
  e({ type: String })
], i2cBadge.prototype, "iconname", 2);
__decorateClass([
  e({ type: String })
], i2cBadge.prototype, "rightIcon", 2);
__decorateClass([
  e({ type: String })
], i2cBadge.prototype, "imgpath", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cBadge.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cBadge.prototype, "pulse", 2);
i2cBadge = __decorateClass([
  n("i2c-badge")
], i2cBadge);

export {
  i2cBadge
};
