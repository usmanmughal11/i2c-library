import {
  focusVisibleSelector
} from "./chunk.AMENFSPY.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/checkbox/checkbox.styles.ts
var checkbox_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--i2c-input-font-family);
    font-size: var(--i2c-input-font-size-medium);
    font-weight: var(--i2c-input-font-weight);
    color: var(--i2c-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--i2c-toggle-size);
    height: var(--i2c-toggle-size);
    border: solid var(--i2c-input-border-width) var(--i2c-input-border-color);
    border-radius: 2px;
    background-color: var(--i2c-input-background-color);
    color: var(--i2c-color-neutral-0);
    transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color,
      var(--i2c-transition-fast) color, var(--i2c-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--i2c-toggle-size);
    height: var(--i2c-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--i2c-input-border-color-hover);
    background-color: var(--i2c-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--i2c-color-primary-600);
    background-color: var(--i2c-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--i2c-color-primary-500);
    background-color: var(--i2c-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--i2c-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;

export {
  checkbox_styles_default
};
