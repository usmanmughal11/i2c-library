import {
  radio_group_styles_default
} from "./chunk.FWFERI34.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
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

// src/components/radio-group/radio-group.ts
var RADIO_CHILDREN = ["i2c-radio", "i2c-radio-button"];
var SlRadioGroup = class extends s {
  constructor() {
    super(...arguments);
    this.hasButtonGroup = false;
    this.label = "";
    this.fieldset = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "radiogroup");
  }
  getAllRadios() {
    return [...this.querySelectorAll(RADIO_CHILDREN.join(","))].filter((el) => RADIO_CHILDREN.includes(el.tagName.toLowerCase()));
  }
  handleRadioClick(event) {
    const target = event.target;
    const checkedRadio = target.closest(RADIO_CHILDREN.map((selector) => `${selector}:not([disabled])`).join(","));
    if (checkedRadio) {
      const radios = this.getAllRadios();
      radios.forEach((radio) => {
        radio.checked = radio === checkedRadio;
        radio.input.tabIndex = radio === checkedRadio ? 0 : -1;
      });
    }
  }
  handleKeyDown(event) {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
      const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(checkedRadio) + incr;
      if (index < 0) {
        index = radios.length - 1;
      }
      if (index > radios.length - 1) {
        index = 0;
      }
      this.getAllRadios().forEach((radio) => {
        radio.checked = false;
        radio.input.tabIndex = -1;
      });
      radios[index].focus();
      radios[index].checked = true;
      radios[index].input.tabIndex = 0;
      event.preventDefault();
    }
  }
  handleSlotChange() {
    const radios = this.getAllRadios();
    const checkedRadio = radios.find((radio) => radio.checked);
    this.hasButtonGroup = !!radios.find((radio) => radio.tagName.toLowerCase() === "i2c-radio-button");
    radios.forEach((radio) => {
      radio.setAttribute("role", "radio");
      radio.input.tabIndex = -1;
    });
    if (checkedRadio) {
      checkedRadio.input.tabIndex = 0;
    } else if (radios.length > 0) {
      radios[0].input.tabIndex = 0;
    }
  }
  render() {
    const defaultSlot = $`
      <slot @click=${this.handleRadioClick} @keydown=${this.handleKeyDown} @slotchange=${this.handleSlotChange}></slot>
    `;
    return $`
      <fieldset
        part="base"
        class=${o({
      "radio-group": true,
      "radio-group--has-fieldset": this.fieldset
    })}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        ${this.hasButtonGroup ? $`<i2c-button-group part="button-group">${defaultSlot}</i2c-button-group>` : defaultSlot}
      </fieldset>
    `;
  }
};
SlRadioGroup.styles = radio_group_styles_default;
__decorateClass([
  i("slot:not([name])")
], SlRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  t()
], SlRadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass([
  e()
], SlRadioGroup.prototype, "label", 2);
__decorateClass([
  e({ type: Boolean, attribute: "fieldset" })
], SlRadioGroup.prototype, "fieldset", 2);
SlRadioGroup = __decorateClass([
  n("i2c-radio-group")
], SlRadioGroup);

export {
  SlRadioGroup
};
