import {
  include_styles_default
} from "./chunk.A2OOUJQS.js";
import {
  requestInclude
} from "./chunk.RPB53XXV.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit
} from "./chunk.UY5AQKHP.js";
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

// src/components/include/include.ts
var SlInclude = class extends s {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        emit(this, "i2c-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      emit(this, "i2c-load");
    } catch (e2) {
      emit(this, "i2c-error", { detail: { status: -1 } });
    }
  }
  render() {
    return $`<slot></slot>`;
  }
};
SlInclude.styles = include_styles_default;
__decorateClass([
  e()
], SlInclude.prototype, "src", 2);
__decorateClass([
  e()
], SlInclude.prototype, "mode", 2);
__decorateClass([
  e({ attribute: "allow-scripts", type: Boolean })
], SlInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], SlInclude.prototype, "handleSrcChange", 1);
SlInclude = __decorateClass([
  n("i2c-include")
], SlInclude);

export {
  SlInclude
};
