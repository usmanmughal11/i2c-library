import {
  animateTo,
  stopAnimations
} from "./chunk.63W3F5G5.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.EFXMZY2Q.js";
import {
  alert_styles_default
} from "./chunk.SZ52L5Z7.js";
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
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit,
  waitForEvent
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

// src/components/alert/alert.ts
var toastStack = Object.assign(document.createElement("div"), { className: "i2c-toast-stack" });
var SlAlert = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "icon", "avatar");
    this.localize = new LocalizeController(this);
    this.open = false;
    this.closable = false;
    this.variant = "default";
    this.duration = Infinity;
    this.badge = "";
    this.alertTitle = "";
    this.type = "notification";
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "i2c-after-show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "i2c-after-hide");
  }
  async toast() {
    return new Promise((resolve) => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }
      toastStack.appendChild(this);
      requestAnimationFrame(() => {
        this.clientWidth;
        this.show();
      });
      this.addEventListener("i2c-after-hide", () => {
        toastStack.removeChild(this);
        resolve();
        if (toastStack.querySelector("i2c-alert") === null) {
          toastStack.remove();
        }
      }, { once: true });
    });
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }
  handleCloseClick() {
    this.hide();
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "i2c-show");
      if (this.duration < Infinity) {
        this.restartAutoHide();
      }
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      clearTimeout(this.autoHideTimeout);
      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;
      emit(this, "i2c-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  render() {
    const hasIconSlot = this.hasSlotController.test("icon");
    const hasAvatarSlot = this.hasSlotController.test("avatar");
    return $`
      <div
        part="base"
        class=${o({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-icon": hasIconSlot,
      "alert--has-avatar": hasAvatarSlot,
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger",
      "alert--default": this.variant === "default",
      "alert--type-notification": this.type === "notification",
      "alert--type-alert": this.type === "alert"
    })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>     
          <span part="avatar" class="alert__avatar">
             <slot name="avatar"></slot>
          </span>
        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable ? $`
              <i2c-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></i2c-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlAlert.styles = alert_styles_default;
__decorateClass([
  i('[part="base"]')
], SlAlert.prototype, "base", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlAlert.prototype, "open", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlAlert.prototype, "closable", 2);
__decorateClass([
  e({ reflect: true })
], SlAlert.prototype, "variant", 2);
__decorateClass([
  e({ type: Number })
], SlAlert.prototype, "duration", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "badge", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "alertTitle", 2);
__decorateClass([
  e()
], SlAlert.prototype, "type", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlAlert.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("duration")
], SlAlert.prototype, "handleDurationChange", 1);
SlAlert = __decorateClass([
  n("i2c-alert")
], SlAlert);
setDefaultAnimation("alert.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("alert.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 250, easing: "ease" }
});

export {
  SlAlert
};
