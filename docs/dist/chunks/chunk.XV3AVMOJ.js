import {
  focusVisibleSelector
} from "./chunk.AMENFSPY.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/tab/tab.styles.ts
var tab_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--i2c-font-sans);
    font-size: var(--i2c-font-size-small);
    font-weight: var(--i2c-font-weight-semibold);
    border-radius: var(--i2c-border-radius-medium);
    color: var(--i2c-color-neutral-600);
    padding: var(--i2c-spacing-medium) var(--i2c-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--i2c-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${focusVisibleSelector}:not(.tab--disabled) {
    color: var(--i2c-color-primary-600);
    outline: var(--i2c-focus-ring);
    outline-offset: calc(-1 * var(--i2c-focus-ring-width) - var(--i2c-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--i2c-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--i2c-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--i2c-font-size-large);
    margin-inline-start: var(--i2c-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--i2c-spacing-3x-small);
  }
`;

export {
  tab_styles_default
};
