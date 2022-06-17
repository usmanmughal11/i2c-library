import {
  form_control_styles_default
} from "./chunk.RG6X2WND.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/textarea/textarea.styles.ts
var textarea_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--i2c-input-font-family);
    font-weight: var(--i2c-input-font-weight);
    line-height: var(--i2c-line-height-normal);
    letter-spacing: var(--i2c-input-letter-spacing);
    vertical-align: middle;
    transition: var(--i2c-transition-fast) color, var(--i2c-transition-fast) border, var(--i2c-transition-fast) box-shadow,
      var(--i2c-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--i2c-input-background-color);
    border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--i2c-input-background-color-hover);
    border-color: var(--i2c-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--i2c-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--i2c-input-background-color-focus);
    border-color: var(--i2c-input-border-color-focus);
    color: var(--i2c-input-color-focus);
    box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--i2c-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--i2c-input-background-color-disabled);
    border-color: var(--i2c-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--i2c-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--i2c-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--i2c-input-filled-background-color);
    color: var(--i2c-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--i2c-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--i2c-input-filled-background-color-focus);
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--i2c-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--i2c-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--i2c-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--i2c-input-border-radius-small);
    font-size: var(--i2c-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--i2c-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--i2c-input-border-radius-medium);
    font-size: var(--i2c-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--i2c-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--i2c-input-border-radius-large);
    font-size: var(--i2c-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--i2c-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`;

export {
  textarea_styles_default
};
