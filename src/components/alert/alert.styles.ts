import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--i2c-panel-background-color);
    border: solid var(--i2c-panel-border-width) var(--i2c-panel-border-color);
    border-top-width: calc(var(--i2c-panel-border-width) * 3);
    border-radius: var(--i2c-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--i2c-font-sans);
    font-size: var(--i2c-font-size-small);
    font-weight: var(--i2c-font-weight-normal);
    line-height: 1.6;
    color: var(--i2c-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--i2c-font-size-large);
    padding-inline-start: var(--i2c-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--i2c-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--i2c-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--i2c-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--i2c-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--i2c-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--i2c-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--i2c-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--i2c-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--i2c-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--i2c-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--i2c-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--i2c-font-size-large);
    padding-inline-end: var(--i2c-spacing-medium);
  }
`;
