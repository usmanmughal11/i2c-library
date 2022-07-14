import {
  D,
  N,
  T,
  b,
  k,
  z
} from "./chunk.FZS7I7HO.js";
import {
  dropdown_styles_default
} from "./chunk.F4OB4K33.js";
import {
  getTabbableBoundary
} from "./chunk.SCUNOITN.js";
import {
  scrollIntoView
} from "./chunk.PW5AZSPR.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.63W3F5G5.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.EFXMZY2Q.js";
import {
  o
} from "./chunk.H66XLZ2O.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
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

// src/components/dropdown/dropdown.ts
var SlDropdown = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  async firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.addOpenListeners();
      this.startPositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
    this.stopPositioner();
  }
  focusOnTrigger() {
    const slot = this.trigger.querySelector("slot");
    const trigger = slot.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    const slot = this.panel.querySelector("slot");
    return slot.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "i2c-menu");
  }
  handleDocumentKeyDown(event) {
    var _a;
    if (event.key === "Escape") {
      this.hide();
      this.focusOnTrigger();
      return;
    }
    if (event.key === "Tab") {
      if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "i2c-menu-item") {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
        return;
      }
      setTimeout(() => {
        var _a2, _b, _c;
        const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
        if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
          this.hide();
        }
      });
    }
  }
  handleDocumentMouseDown(event) {
    const path = event.composedPath();
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }
  handleMenuItemActivate(event) {
    const item = event.target;
    scrollIntoView(item, this.panel);
  }
  handlePanelSelect(event) {
    const target = event.target;
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "i2c-menu") {
      this.hide();
      this.focusOnTrigger();
    }
  }
  handlePopoverOptionsChange() {
    this.updatePositioner();
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }
  handleTriggerKeyDown(event) {
    if (event.key === "Escape") {
      this.focusOnTrigger();
      this.hide();
      return;
    }
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.defaultSlot.assignedElements({ flatten: true });
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
        }
        if (menuItems.length > 0) {
          requestAnimationFrame(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
      const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
      if (this.open && !ignoredKeys.includes(event.key)) {
        menu.typeToSelect(event);
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  updateAccessibleTrigger() {
    const slot = this.trigger.querySelector("slot");
    const assignedElements = slot.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "i2c-button":
        case "i2c-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
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
  reposition() {
    this.updatePositioner();
  }
  addOpenListeners() {
    this.panel.addEventListener("i2c-activate", this.handleMenuItemActivate);
    this.panel.addEventListener("i2c-select", this.handlePanelSelect);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    this.panel.removeEventListener("i2c-activate", this.handleMenuItemActivate);
    this.panel.removeEventListener("i2c-select", this.handlePanelSelect);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      emit(this, "i2c-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.startPositioner();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
      await animateTo(this.panel, keyframes, options);
      emit(this, "i2c-after-show");
    } else {
      emit(this, "i2c-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
      await animateTo(this.panel, keyframes, options);
      this.panel.hidden = true;
      this.stopPositioner();
      emit(this, "i2c-after-hide");
    }
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = N(this.trigger, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.trigger || !this.positioner) {
      return;
    }
    z(this.trigger, this.positioner, {
      placement: this.placement,
      middleware: [
        T({ mainAxis: this.distance, crossAxis: this.skidding }),
        b(),
        D(),
        k({
          apply: ({ availableWidth, availableHeight }) => {
            Object.assign(this.panel.style, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`
            });
          }
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x, y, placement }) => {
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x}px`,
        top: `${y}px`
      });
    });
  }
  stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = void 0;
      this.positioner.removeAttribute("data-placement");
    }
  }
  render() {
    return $`
      <div
        part="base"
        id="dropdown"
        class=${o({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open ? "false" : "true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
SlDropdown.styles = dropdown_styles_default;
__decorateClass([
  i(".dropdown__trigger")
], SlDropdown.prototype, "trigger", 2);
__decorateClass([
  i(".dropdown__panel")
], SlDropdown.prototype, "panel", 2);
__decorateClass([
  i(".dropdown__positioner")
], SlDropdown.prototype, "positioner", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlDropdown.prototype, "open", 2);
__decorateClass([
  e({ reflect: true })
], SlDropdown.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlDropdown.prototype, "disabled", 2);
__decorateClass([
  e({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], SlDropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  e({ attribute: false })
], SlDropdown.prototype, "containingElement", 2);
__decorateClass([
  e({ type: Number })
], SlDropdown.prototype, "distance", 2);
__decorateClass([
  e({ type: Number })
], SlDropdown.prototype, "skidding", 2);
__decorateClass([
  e({ type: Boolean })
], SlDropdown.prototype, "hoist", 2);
__decorateClass([
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], SlDropdown.prototype, "handlePopoverOptionsChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDropdown.prototype, "handleOpenChange", 1);
SlDropdown = __decorateClass([
  n("i2c-dropdown")
], SlDropdown);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.9)" }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  SlDropdown
};
