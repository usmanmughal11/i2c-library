import {
  form_control_styles_default
} from "./chunk.RG6X2WND.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/input/input.styles.ts
var input_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--i2c-input-font-family);
    font-weight: var(--i2c-input-font-weight);
    letter-spacing: var(--i2c-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--i2c-transition-fast) color, var(--i2c-transition-fast) border, var(--i2c-transition-fast) box-shadow,
      var(--i2c-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--i2c-input-background-color);
    border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--i2c-input-background-color-hover);
    border-color: var(--i2c-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--i2c-input-background-color-focus);
    border-color: var(--i2c-input-border-color-focus);
    box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--i2c-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--i2c-input-background-color-disabled);
    border-color: var(--i2c-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--i2c-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--i2c-input-placeholder-color-disabled);
  }


  .input--standard.input--invalid {
    background-color: var(--i2c-input-background-color);
    border: solid var(--i2c-input-border-width) var(--i2c-input-border-danger);
  }

  .input--standard.input--invalid:hover:not(.input--disabled) {
    border-color: var(--i2c-input-border-danger-hover);
  }

  .input--standard.input--invalid.input--focused:not(.input--disabled) {
    background-color: var(--i2c-input-background-color-focus);
    border-color: var(--i2c-input-border-danger-focus);
    box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-input-focus-ring-danger);
  }

  .input--standard.input--invalid.input--focused:not(.input--disabled) .input__control {
    color: var(--i2c-input-danger-focus);
  }


  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--i2c-input-filled-background-color);
    color: var(--i2c-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--i2c-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--i2c-input-filled-background-color-focus);
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--i2c-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--i2c-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--i2c-input-height-large) var(--i2c-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--i2c-color-primary-500);
    caret-color: var(--i2c-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--i2c-input-height-large) var(--i2c-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--i2c-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--i2c-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(i2c-icon),
  .input__suffix ::slotted(i2c-icon) {
    color: var(--i2c-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--i2c-input-border-radius-small);
    font-size: var(--i2c-input-font-size-small);
    height: var(--i2c-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--i2c-input-height-small) - var(--i2c-input-border-width) * 2);
    padding: 0 var(--i2c-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--i2c-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--i2c-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--i2c-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--i2c-input-border-radius-medium);
    font-size: var(--i2c-input-font-size-medium);
    height: var(--i2c-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--i2c-input-height-medium) - var(--i2c-input-border-width) * 2);
    padding: 0 var(--i2c-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--i2c-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--i2c-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--i2c-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--i2c-input-border-radius-large);
    font-size: var(--i2c-input-font-size-large);
    height: var(--i2c-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--i2c-input-height-large) - var(--i2c-input-border-width) * 2);
    padding: 0 var(--i2c-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--i2c-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--i2c-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--i2c-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--i2c-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--i2c-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--i2c-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--i2c-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--i2c-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--i2c-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`;

export {
  input_styles_default
};
