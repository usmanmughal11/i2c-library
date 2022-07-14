import {
  autoIncrement
} from "./chunk.KFR7NC2M.js";
import {
  tab_styles_default
} from "./chunk.XV3AVMOJ.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  emit
} from "./chunk.UY5AQKHP.js";
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

// src/components/tab/tab.ts
var SlTab = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = autoIncrement();
    this.componentId = `i2c-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    emit(this, "i2c-close");
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return $`
      <div
        part="base"
        class=${o({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? $`
              <i2c-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></i2c-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = tab_styles_default;
__decorateClass([
  i(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  e({ reflect: true })
], SlTab.prototype, "panel", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  e({ type: Boolean })
], SlTab.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
__decorateClass([
  e()
], SlTab.prototype, "lang", 2);
SlTab = __decorateClass([
  n("i2c-tab")
], SlTab);

export {
  SlTab
};
