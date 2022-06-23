import {
  progress_ring_styles_default
} from "./chunk.FDDBT5N6.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.ZU3WVWU5.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/progress-ring/progress-ring.ts
var SlProgressRing = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
    this.labelText = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("percentage")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>
        <span class="progress-ring__label">
            <span part="labelText" class="progress-ring__label-text">
            <slot>${this.labelText}</slot>
            </span>
            <span part="label" class="">
              <slot>${this.label}</slot>
            </span>
         </span>
      </div>
    `;
  }
};
SlProgressRing.styles = progress_ring_styles_default;
__decorateClass([
  i(".progress-ring__indicator")
], SlProgressRing.prototype, "indicator", 2);
__decorateClass([
  t()
], SlProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], SlProgressRing.prototype, "value", 2);
__decorateClass([
  e()
], SlProgressRing.prototype, "label", 2);
__decorateClass([
  e()
], SlProgressRing.prototype, "labelText", 2);
__decorateClass([
  e()
], SlProgressRing.prototype, "lang", 2);
SlProgressRing = __decorateClass([
  n("i2c-progress-ring")
], SlProgressRing);

export {
  SlProgressRing
};
