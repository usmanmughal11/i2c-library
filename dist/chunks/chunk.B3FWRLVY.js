import {
  button_styles_default
} from "./chunk.7SB2FY4H.js";
import {
  FormSubmitController
} from "./chunk.S6I2SNDG.js";
import {
  l as l2,
  n as n2
} from "./chunk.YTNS3I2U.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  HasSlotController
} from "./chunk.STCO723X.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
import {
  l
} from "./chunk.O4B4UDSO.js";
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
  s
} from "./chunk.ZU3WVWU5.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/button/button.ts
var i2cButton = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      form: (input) => {
        if (input.hasAttribute("form")) {
          const doc = input.getRootNode();
          const formId = input.getAttribute("form");
          return doc.getElementById(formId);
        }
        return input.closest("form");
      }
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.noPadding = false;
    this.type = "button";
  }
  click() {
    this.button.click();
  }
  focus(options) {
    this.button.focus(options);
  }
  blur() {
    this.button.blur();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "i2c-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "i2c-focus");
  }
  handleClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this.type === "submit") {
      this.formSubmitController.submit(this);
    }
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? l2`a` : l2`button`;
    return n2`
      <${tag}
        part="base"
        class=${o({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--danger--light": this.variant === "dangerLight",
      "button--warning--light": this.variant === "warningLight",
      "button--success--light": this.variant === "successLight",
      "button--primary--light": this.variant === "primaryLight",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--xlarge": this.size === "x-large",
      "button--2xlarge": this.size === "2x-large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix"),
      "no-padding": this.noPadding
    })}
        ?disabled=${l(isLink ? void 0 : this.disabled)}
        type=${l(isLink ? void 0 : this.type)}
        name=${l(isLink ? void 0 : this.name)}
        value=${l(isLink ? void 0 : this.value)}
        href=${l(isLink ? this.href : void 0)}
        target=${l(isLink ? this.target : void 0)}
        download=${l(isLink ? this.download : void 0)}
        rel=${l(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret ? n2`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              ` : ""}
        ${this.loading ? n2`<i2c-spinner></i2c-spinner>` : ""}
      </${tag}>
    `;
  }
};
i2cButton.styles = button_styles_default;
__decorateClass([
  i(".button")
], i2cButton.prototype, "button", 2);
__decorateClass([
  t()
], i2cButton.prototype, "hasFocus", 2);
__decorateClass([
  e({ reflect: true })
], i2cButton.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], i2cButton.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "caret", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "loading", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "outline", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "circle", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], i2cButton.prototype, "noPadding", 2);
__decorateClass([
  e()
], i2cButton.prototype, "type", 2);
__decorateClass([
  e()
], i2cButton.prototype, "name", 2);
__decorateClass([
  e()
], i2cButton.prototype, "value", 2);
__decorateClass([
  e()
], i2cButton.prototype, "href", 2);
__decorateClass([
  e()
], i2cButton.prototype, "target", 2);
__decorateClass([
  e()
], i2cButton.prototype, "download", 2);
__decorateClass([
  e()
], i2cButton.prototype, "form", 2);
__decorateClass([
  e({ attribute: "formaction" })
], i2cButton.prototype, "formAction", 2);
__decorateClass([
  e({ attribute: "formmethod" })
], i2cButton.prototype, "formMethod", 2);
__decorateClass([
  e({ attribute: "formnovalidate", type: Boolean })
], i2cButton.prototype, "formNoValidate", 2);
__decorateClass([
  e({ attribute: "formtarget" })
], i2cButton.prototype, "formTarget", 2);
i2cButton = __decorateClass([
  n("i2c-button")
], i2cButton);

export {
  i2cButton
};
