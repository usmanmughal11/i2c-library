import {
  progress_bar_styles_default
} from "./chunk.6OPZ2OZA.js";
import {
  i
} from "./chunk.IL5OPZ67.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  l
} from "./chunk.O4B4UDSO.js";
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

// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
    this.varient = "primary";
    this.tooltip = false;
  }
  render() {
    return $`

    ${this.valPosition === "top" || this.valPosition === "tooltipTop" ? $`
    <span part="labelTop" style="left:${this.value - 4}%;" class=${o({
      "progress-val-label": true,
      "progress-val-top": this.valPosition === "top",
      "progress-val-tooltip-top": this.valPosition === "tooltipTop"
    })}>

    
    <slot>${this.value}%</slot>
    </span>
    ` : ""}
      <div
        part="base" 
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar-primary": this.varient === "primary",
      "progress-bar-success": this.varient === "success",
      "progress-bar-danger": this.varient === "danger",
      "progress-bar-warning": this.varient === "warning",
      "progress-bar-gray": this.varient === "gray",
      "progress-bar-inline": this.valPosition === "front"
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i({ width: `${this.value}%` })}>
          ${!this.indeterminate ? $`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
        <span part="labelFront">
        <slot></slot>
        </span>
      </div>
      ${this.valPosition === "bottom" || this.valPosition === "front" || this.valPosition === "tooltipBottom" ? $`
    <span part="labelBottom" style="left:${this.value - 3}%;" class=${o({
      "progress-val-label": true,
      "progress-val-bottom": this.valPosition === "bottom",
      "progress-val-front": this.valPosition === "front",
      "progress-val-tooltip-bottom": this.valPosition === "tooltipBottom"
    })}>
    <slot>${this.value}%</slot>
    </span>
    ` : ""}
    `;
  }
};
SlProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "label", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "varient", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "valPosition", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "tooltip", 2);
__decorateClass([
  e()
], SlProgressBar.prototype, "lang", 2);
SlProgressBar = __decorateClass([
  n("i2c-progress-bar")
], SlProgressBar);

export {
  SlProgressBar
};