import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--i2c-border-radius-medium);
    font-size: inherit;
    color: var(--i2c-color-neutral-600);
    padding: var(--i2c-spacing-x-small);
    cursor: pointer;
    transition: var(--i2c-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--i2c-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--i2c-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${focusVisibleSelector} {
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;
