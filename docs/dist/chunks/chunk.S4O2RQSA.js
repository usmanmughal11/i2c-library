import {
  breadcrumb_styles_default
} from "./chunk.HFUWLCKA.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  e,
  i,
  n
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.ZU3WVWU5.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/breadcrumb/breadcrumb.ts
var SlBreadcrumb = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.separatorDir = this.localize.dir();
    this.label = "Breadcrumb";
  }
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter((item) => item.tagName.toLowerCase() === "i2c-breadcrumb-item");
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return $`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <i2c-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></i2c-icon>
      </slot>
    `;
  }
};
SlBreadcrumb.styles = breadcrumb_styles_default;
__decorateClass([
  i("slot")
], SlBreadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  i('slot[name="separator"]')
], SlBreadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  e()
], SlBreadcrumb.prototype, "label", 2);
SlBreadcrumb = __decorateClass([
  n("i2c-breadcrumb")
], SlBreadcrumb);

export {
  SlBreadcrumb
};
