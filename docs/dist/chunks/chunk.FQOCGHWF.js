import {
  responsive_media_styles_default
} from "./chunk.CA3APAOZ.js";
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

// src/components/responsive-media/responsive-media.ts
var SlResponsiveMedia = class extends s {
  constructor() {
    super(...arguments);
    this.aspectRatio = "16:9";
    this.fit = "cover";
  }
  render() {
    const split = this.aspectRatio.split(":");
    const x = parseFloat(split[0]);
    const y = parseFloat(split[1]);
    const paddingBottom = !isNaN(x) && !isNaN(y) && x > 0 && y > 0 ? `${y / x * 100}%` : "0";
    return $`
      <div
        class=${o({
      "responsive-media": true,
      "responsive-media--cover": this.fit === "cover",
      "responsive-media--contain": this.fit === "contain"
    })}
        style="padding-bottom: ${paddingBottom}"
      >
        <slot></slot>
      </div>
    `;
  }
};
SlResponsiveMedia.styles = responsive_media_styles_default;
__decorateClass([
  e({ attribute: "aspect-ratio" })
], SlResponsiveMedia.prototype, "aspectRatio", 2);
__decorateClass([
  e()
], SlResponsiveMedia.prototype, "fit", 2);
SlResponsiveMedia = __decorateClass([
  n("i2c-responsive-media")
], SlResponsiveMedia);

export {
  SlResponsiveMedia
};
