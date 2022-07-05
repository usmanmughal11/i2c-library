import {
  focusVisibleSelector
} from "./chunk.AMENFSPY.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/menu-item/menu-item.styles.ts
var menu_item_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--i2c-font-sans);
    font-size: var(--i2c-font-size-medium);
    font-weight: var(--i2c-font-weight-normal);
    line-height: var(--i2c-line-height-normal);
    letter-spacing: var(--i2c-letter-spacing-normal);
    color: var(--i2c-color-neutral-700);
    padding: var(--i2c-spacing-2x-small) var(--i2c-spacing-2x-small);
    transition: var(--i2c-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--i2c-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--i2c-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--i2c-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${focusVisibleSelector}:not(.i2c-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`;

export {
  menu_item_styles_default
};
