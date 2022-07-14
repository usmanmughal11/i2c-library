import {
  animateTo,
  stopAnimations
} from "./chunk.63W3F5G5.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.EFXMZY2Q.js";
import {
  HasSlotController
} from "./chunk.STCO723X.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  alert_styles_default
} from "./chunk.G2PH7MFF.js";
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
    this.hasSlotController = new HasSlotController(this, "icon", "avatar", "link1", "link2", "leftImg");
    this.localize = new LocalizeController(this);
    this.open = false;
    this.closable = false;
    this.iconCenter = false;
    this.variant = "neutral";
    this.layout = "linear";
    this.duration = Infinity;
    this.leftImg = "";
    this.badge = "";
    this.alertTitle = "";
    this.link1text = "";
    this.link2text = "";
    this.link1url = "";
    this.link2url = "";
    this.target = "";
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
    const hasLink1 = this.hasSlotController.test("link1");
    const hasLink2 = this.hasSlotController.test("link2");
    return $`
    ${this.type === "notification" ? $`
    
      <div
        part="base"
        class=${o({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--vertical": this.layout === "vertical",
      "alert--has-icon": hasIconSlot,
      "alert--has-avatar": hasAvatarSlot,
      "alert--has-link1": hasLink1,
      "alert--has-link2": hasLink2,
      "content-middle": this.iconCenter,
      "alert--has-left-img": this.leftImg !== "",
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger",
      "alert--default": this.variant === "default",
      "alert--type-notification": this.type === "notification"
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
        ${this.leftImg !== "" ? $`
        <span part="leftImg" class="alert__left_mg" style="background:var(--i2c-color-gray-50) url(${this.leftImg ? this.leftImg : ""}) no-repeat center center;">
             <slot name="leftImg"></slot>
        </span>
        ` : ""}
          <span part="avatar" class="alert__avatar">
             <slot name="avatar"></slot>
          </span>
          <div part="message" class="alert__message">
          <slot></slot>
          ${this.hasSlotController.test("link1") ? $` 
          <div class="alert__links">
            <span part="link1" class="alert__link">
              <slot name="link1"></slot>
            </span>
            <span part="link2" class="alert__link">
              <slot name="link2"></slot>
            </span>
          </div>
        ` : ""}
        </div>
       
        ${this.closable ? $`
              <i2c-icon-button size="small"
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></i2c-icon-button>
            ` : ""}
      </div>
   
      ` : $`
      <div  
      part="base"
      class=${o({
      "linear--alert": true,
      "linear--alert--has-icon": hasIconSlot,
      "linear--alert--has-link1": hasLink1,
      "linear--alert--has-link2": hasLink2,
      "linear--alert--primary": this.variant === "primary",
      "linear--alert--success": this.variant === "success",
      "linear--alert--neutral": this.variant === "neutral",
      "linear--alert--warning": this.variant === "warning",
      "linear--alert--danger": this.variant === "danger",
      "linear--alert--default": this.variant === "default",
      "linear--alert--has--badge": this.badge !== ""
    })}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      >
              <div>
              ${this.badge !== "" || this.title !== "" ? $`
                <div class="alert-title ">
                ${this.badge !== "" ? $`
                  <span class="linear--alert--badge">${this.badge}</span>
                ` : ""}
                ${this.title !== "" ? $`
                  <span class="linear--alert--title">${this.title}</span>
                   ` : ""}
                </div>
                ` : ""}
                <div part="message" class="linear--alert--msg">
                    <slot></slot>
                </div>
              </div>
              ${this.link1text !== "" ? $`
              <div class="linear--alert--links">
                <a href="${this.link1url}" class="linear--alert--link">${this.link1text}</a>
                ${this.link2text !== "" ? $`
                <a href="${this.link2url}" class="linear--alert--link">${this.link2text} <i2c-icon name="arrow-right-short"></i2c-icon> </a>
                ` : ""}  
              </div>
              ` : ""}
            </div>
      `}
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
  e({ type: Boolean, reflect: true })
], SlAlert.prototype, "iconCenter", 2);
__decorateClass([
  e({ reflect: true })
], SlAlert.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], SlAlert.prototype, "layout", 2);
__decorateClass([
  e({ type: Number })
], SlAlert.prototype, "duration", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "leftImg", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "badge", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "alertTitle", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "link1text", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "link2text", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "link1url", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "link2url", 2);
__decorateClass([
  e({ type: String })
], SlAlert.prototype, "target", 2);
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