import {
  focusVisibleSelector
} from "./chunk.AMENFSPY.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/button/button.styles.ts
var button_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--i2c-input-border-width);
    font-family: var(--i2c-input-font-family);
    font-weight: var(--i2c-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--i2c-transition-x-fast) background-color, var(--i2c-transition-x-fast) color,
      var(--i2c-transition-x-fast) border, var(--i2c-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button${focusVisibleSelector} {
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(i2c-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--i2c-color-neutral-0);
    border-color: var(--i2c-color-neutral-300);
    color: var(--i2c-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--i2c-color-primary-50);
    border-color: var(--i2c-color-primary-300);
    color: var(--i2c-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--i2c-color-primary-100);
    border-color: var(--i2c-color-primary-400);
    color: var(--i2c-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--i2c-color-primary-600);
    border-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--i2c-color-primary-500);
    border-color: var(--i2c-color-primary-500);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--i2c-color-primary-600);
    border-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--i2c-color-success-600);
    border-color: var(--i2c-color-success-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--i2c-color-success-500);
    border-color: var(--i2c-color-success-500);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--i2c-color-success-600);
    border-color: var(--i2c-color-success-600);
    color: var(--i2c-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--i2c-color-neutral-600);
    border-color: var(--i2c-color-neutral-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--i2c-color-neutral-500);
    border-color: var(--i2c-color-neutral-500);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--i2c-color-neutral-600);
    border-color: var(--i2c-color-neutral-600);
    color: var(--i2c-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--i2c-color-warning-600);
    border-color: var(--i2c-color-warning-600);
    color: var(--i2c-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--i2c-color-warning-500);
    border-color: var(--i2c-color-warning-500);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--i2c-color-warning-600);
    border-color: var(--i2c-color-warning-600);
    color: var(--i2c-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--i2c-color-danger-600);
    border-color: var(--i2c-color-danger-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--i2c-color-danger-500);
    border-color: var(--i2c-color-danger-500);
    color: var(--i2c-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--i2c-color-danger-600);
    border-color: var(--i2c-color-danger-600);
    color: var(--i2c-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--i2c-color-neutral-300);
    color: var(--i2c-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--i2c-color-primary-600);
    background-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--i2c-color-primary-700);
    background-color: var(--i2c-color-primary-700);
    color: var(--i2c-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--i2c-color-primary-700);
    background-color: var(--i2c-color-primary-700);
    color: var(--i2c-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--i2c-color-success-600);
    color: var(--i2c-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--i2c-color-success-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--i2c-color-success-700);
    background-color: var(--i2c-color-success-700);
    color: var(--i2c-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--i2c-color-neutral-600);
    color: var(--i2c-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--i2c-color-neutral-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--i2c-color-neutral-700);
    background-color: var(--i2c-color-neutral-700);
    color: var(--i2c-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--i2c-color-warning-600);
    color: var(--i2c-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--i2c-color-warning-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--i2c-color-warning-700);
    background-color: var(--i2c-color-warning-700);
    color: var(--i2c-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--i2c-color-danger-600);
    color: var(--i2c-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--i2c-color-danger-600);
    color: var(--i2c-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--i2c-color-danger-700);
    background-color: var(--i2c-color-danger-700);
    color: var(--i2c-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--i2c-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--i2c-color-primary-500);
  }

  .button--text${focusVisibleSelector}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--i2c-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--i2c-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--i2c-button-font-size-small);
    height: var(--i2c-button-height-small);
    line-height: calc(var(--i2c-input-height-small) - var(--i2c-input-border-width) * 2);
    border-radius: var(--i2c-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--i2c-button-font-size-medium);
    height: var(--i2c-input-height-medium);
    line-height: calc(var(--i2c-input-height-medium) - var(--i2c-input-border-width) * 2);
    border-radius: var(--i2c-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--i2c-button-font-size-large);
    height: var(--i2c-input-height-large);
    line-height: calc(var(--i2c-input-height-large) - var(--i2c-input-border-width) * 2);
    border-radius: var(--i2c-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--i2c-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--i2c-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--i2c-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--i2c-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--i2c-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--i2c-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading i2c-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(i2c-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(i2c-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--i2c-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--i2c-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--i2c-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--i2c-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--i2c-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--i2c-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--i2c-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--i2c-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--i2c-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--i2c-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--i2c-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--i2c-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--i2c-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--i2c-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--i2c-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.i2c-button-group__button--first:not(.i2c-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.i2c-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.i2c-button-group__button--last:not(.i2c-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.i2c-button-group__button:not(.i2c-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--i2c-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.i2c-button-group__button:not(.i2c-button-group__button--focus, .i2c-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.i2c-button-group__button--hover) {
    z-index: 1;
  }

  :host(.i2c-button-group__button--focus),
  :host(.i2c-button-group__button[checked]) {
    z-index: 2;
  }
`;

export {
  button_styles_default
};
