import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --height: var(--i2c-toggle-size);
    --thumb-size: calc(var(--i2c-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--i2c-input-font-family);
    font-size: var(--i2c-input-font-size-medium);
    font-weight: var(--i2c-input-font-weight);
    color: var(--i2c-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--i2c-color-neutral-400);
    border: solid var(--i2c-input-border-width) var(--i2c-color-neutral-400);
    border-radius: var(--height);
    transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--i2c-color-neutral-0);
    border-radius: 50%;
    border: solid var(--i2c-input-border-width) var(--i2c-color-neutral-400);
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--i2c-transition-fast) transform ease, var(--i2c-transition-fast) background-color,
      var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--i2c-color-neutral-400);
    border-color: var(--i2c-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--i2c-color-neutral-0);
    border-color: var(--i2c-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: var(--i2c-color-neutral-400);
    border-color: var(--i2c-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    background-color: var(--i2c-color-neutral-0);
    border-color: var(--i2c-color-primary-600);
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--i2c-color-primary-600);
    border-color: var(--i2c-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--i2c-color-neutral-0);
    border-color: var(--i2c-color-primary-600);
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--i2c-color-primary-600);
    border-color: var(--i2c-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--i2c-color-neutral-0);
    border-color: var(--i2c-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: var(--i2c-color-primary-600);
    border-color: var(--i2c-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    background-color: var(--i2c-color-neutral-0);
    border-color: var(--i2c-color-primary-600);
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
