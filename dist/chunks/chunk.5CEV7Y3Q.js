import {
  button_group_styles_default
} from "./chunk.5MUHO5GX.js";
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

// src/components/button-group/button-group.ts
var BUTTON_CHILDREN = ["i2c-button", "i2c-radio-button"];
var SlButtonGroup = class extends s {
  constructor() {
    super(...arguments);
    this.label = "";
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("i2c-button-group__button--focus");
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("i2c-button-group__button--focus");
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("i2c-button-group__button--hover");
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("i2c-button-group__button--hover");
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button !== null) {
        button.classList.add("i2c-button-group__button");
        button.classList.toggle("i2c-button-group__button--first", index === 0);
        button.classList.toggle("i2c-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("i2c-button-group__button--last", index === slottedElements.length - 1);
      }
    });
  }
  render() {
    return $`
      <div
        part="base"
        class="button-group"
        role="group"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
SlButtonGroup.styles = button_group_styles_default;
__decorateClass([
  i("slot")
], SlButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  e()
], SlButtonGroup.prototype, "label", 2);
SlButtonGroup = __decorateClass([
  n("i2c-button-group")
], SlButtonGroup);
function findButton(el) {
  return BUTTON_CHILDREN.includes(el.tagName.toLowerCase()) ? el : el.querySelector(BUTTON_CHILDREN.join(","));
}

export {
  SlButtonGroup
};
