import {
  radio_styles_default
} from "./chunk.V23K4GWV.js";
import {
  l as l2
} from "./chunk.OEDEK5QG.js";
import {
  FormSubmitController
} from "./chunk.S6I2SNDG.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
import {
  l
} from "./chunk.O4B4UDSO.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit
} from "./chunk.UY5AQKHP.js";
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

// src/components/radio/radio.ts
var SlRadio = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "radio");
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "i2c-blur");
  }
  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "i2c-focus");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    if (this.hasUpdated) {
      emit(this, "i2c-change");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.hasUpdated) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  render() {
    return $`
      <label
        part="base"
        class=${o({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus
    })}
      >
        <input
          class="radio__input"
          type="radio"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>
        </span>

        <span part="label" class="radio__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
SlRadio.styles = radio_styles_default;
__decorateClass([
  i(".radio__input")
], SlRadio.prototype, "input", 2);
__decorateClass([
  t()
], SlRadio.prototype, "hasFocus", 2);
__decorateClass([
  e()
], SlRadio.prototype, "name", 2);
__decorateClass([
  e()
], SlRadio.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRadio.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRadio.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRadio.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], SlRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRadio.prototype, "handleDisabledChange", 1);
SlRadio = __decorateClass([
  n("i2c-radio")
], SlRadio);

export {
  SlRadio
};
