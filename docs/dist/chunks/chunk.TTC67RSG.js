import {
  skeleton_styles_default
} from "./chunk.W5A4SZJY.js";
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

// src/components/skeleton/skeleton.ts
var SlSkeleton = class extends s {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
SlSkeleton.styles = skeleton_styles_default;
__decorateClass([
  e()
], SlSkeleton.prototype, "effect", 2);
SlSkeleton = __decorateClass([
  n("i2c-skeleton")
], SlSkeleton);

export {
  SlSkeleton
};
