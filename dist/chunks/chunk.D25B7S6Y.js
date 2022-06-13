import {
  form_control_styles_default
} from "./chunk.RG6X2WND.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/select/select.styles.ts
var select_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--i2c-input-font-family);
    font-weight: var(--i2c-input-font-weight);
    letter-spacing: var(--i2c-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--i2c-transition-fast) color, var(--i2c-transition-fast) border, var(--i2c-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--i2c-input-background-color);
    border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);
    color: var(--i2c-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--i2c-input-background-color-hover);
    border-color: var(--i2c-input-border-color-hover);
    color: var(--i2c-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--i2c-input-background-color-focus);
    border-color: var(--i2c-input-border-color-focus);
    color: var(--i2c-input-color-focus);
    box-shadow: 0 0 0 var(--i2c-focus-ring-width) var(--i2c-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--i2c-input-background-color-disabled);
    border-color: var(--i2c-input-border-color-disabled);
    color: var(--i2c-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--i2c-input-filled-background-color);
    color: var(--i2c-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--i2c-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--i2c-input-filled-background-color-focus);
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--i2c-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--i2c-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--i2c-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--i2c-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--i2c-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--i2c-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--i2c-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--i2c-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--i2c-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--i2c-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--i2c-input-border-radius-small);
    font-size: var(--i2c-input-font-size-small);
    min-height: var(--i2c-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--i2c-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--i2c-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--i2c-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--i2c-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--i2c-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags i2c-tag {
    padding-top: 2px;
  }

  .select--small .select__tags i2c-tag:not(:last-of-type) {
    margin-inline-end: var(--i2c-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--i2c-input-border-radius-medium);
    font-size: var(--i2c-input-font-size-medium);
    min-height: var(--i2c-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--i2c-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--i2c-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--i2c-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--i2c-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--i2c-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags i2c-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags i2c-tag:not(:last-of-type) {
    margin-inline-end: var(--i2c-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--i2c-input-border-radius-large);
    font-size: var(--i2c-input-font-size-large);
    min-height: var(--i2c-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--i2c-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--i2c-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--i2c-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--i2c-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--i2c-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags i2c-tag {
    padding-top: 4px;
  }

  .select--large .select__tags i2c-tag:not(:last-of-type) {
    margin-inline-end: var(--i2c-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--i2c-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--i2c-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--i2c-input-height-large);
  }
`;

export {
  select_styles_default
};
