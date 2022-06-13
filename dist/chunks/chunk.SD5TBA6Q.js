import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/tag/tag.styles.ts
var tag_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--i2c-color-primary-50);
    border-color: var(--i2c-color-primary-200);
    color: var(--i2c-color-primary-800);
  }

  .tag--success {
    background-color: var(--i2c-color-success-50);
    border-color: var(--i2c-color-success-200);
    color: var(--i2c-color-success-800);
  }

  .tag--neutral {
    background-color: var(--i2c-color-neutral-50);
    border-color: var(--i2c-color-neutral-200);
    color: var(--i2c-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--i2c-color-warning-50);
    border-color: var(--i2c-color-warning-200);
    color: var(--i2c-color-warning-800);
  }

  .tag--danger {
    background-color: var(--i2c-color-danger-50);
    border-color: var(--i2c-color-danger-200);
    color: var(--i2c-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--i2c-button-font-size-small);
    height: calc(var(--i2c-input-height-small) * 0.8);
    line-height: calc(var(--i2c-input-height-small) - var(--i2c-input-border-width) * 2);
    border-radius: var(--i2c-input-border-radius-small);
    padding: 0 var(--i2c-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--i2c-spacing-2x-small);
    margin-right: calc(-1 * var(--i2c-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--i2c-button-font-size-medium);
    height: calc(var(--i2c-input-height-medium) * 0.8);
    line-height: calc(var(--i2c-input-height-medium) - var(--i2c-input-border-width) * 2);
    border-radius: var(--i2c-input-border-radius-medium);
    padding: 0 var(--i2c-spacing-small);
  }

  .tag--large {
    font-size: var(--i2c-button-font-size-large);
    height: calc(var(--i2c-input-height-large) * 0.8);
    line-height: calc(var(--i2c-input-height-large) - var(--i2c-input-border-width) * 2);
    border-radius: var(--i2c-input-border-radius-large);
    padding: 0 var(--i2c-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--i2c-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--i2c-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--i2c-border-radius-pill);
  }
`;

export {
  tag_styles_default
};
