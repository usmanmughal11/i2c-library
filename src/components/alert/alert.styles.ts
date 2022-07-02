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
    border: solid var(--i2c-panel-border-width) var(--i2c-color-gray-100);
    padding: var(--i2c-spacing-4);
    border-radius: var(--i2c-border-radius-large);
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    font-family: var(--i2c-font-sans);
    font-size: var(--i2c-font-size-small);
    font-weight: var(--i2c-font-weight-normal);
    line-height: 1.6;
    color: var(--i2c-color-neutral-700);
    margin: inherit;
  }
  
  .alert.alert--type-notification {
    max-width:380px;     
  }
  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button, 
  .alert:not(.alert--has-avatar) .alert__avatar{
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: var(--i2c-font-size-large);
    border-radius:var(--i2c-border-radius-circle);
    height:var(--i2c-spacing-10);
    width:var(--i2c-spacing-10);
    border-width:var(--i2c-spacing-1-5);
    border-style:solid;
  }

  .alert__avatar {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }
  
.alert--type-alert.alert--default {
  border-color: var(--i2c-color-gray-100);
  background-color:var(--i2c-color-neutral-0);
  color:var(--i2c-color-gray-500);
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
}

alert--type-alert.alert--primary {
    border-color: var(--i2c-color-primary-600);
    background-color:var(--i2c-color-primary-50);
    color:var(--i2c-color-primary-700);
  }

  .alert--primary .alert__icon {
    color: var(--i2c-color-primary-600);
    background-color:var(--i2c-color-primary-100);
    border-color:var(--i2c-color-primary-50);
  }

  .alert--type-alert.alert--success {
    border-color: var(--i2c-color-success-600);
    background-color:var(--i2c-color-success-50);
    color:var(--i2c-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--i2c-color-success-600);
    background-color:var(--i2c-color-success-100);
    border-color:var(--i2c-color-success-50);
  }

  .alert--type-alert.alert--neutral {
    border-color: var(--i2c-color-neutral-600);
    background-color:var(--i2c-color-neutral-50);
    color:var(--i2c-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--i2c-color-neutral-600);
    background-color:var(--i2c-color-neutral-100);
    border-color:var(--i2c-color-neutral-50);
  }

  .alert--type-alert.alert--warning {
    border-color: var(--i2c-color-warning-600);
    background-color:var(--i2c-color-orange-100);
    color:var(--i2c-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--i2c-color-warning-600);
    background-color:var(--i2c-color-orange-100);
    border-color:var(--i2c-color-orange-50);
  }

  .alert--type-alert.alert--danger {
    border-color: var(--i2c-color-danger-600);
    background-color:var(--i2c-color-danger-50);
    color:var(--i2c-color-danger-600);
    
  }

  .alert--danger .alert__icon {
    color: var(--i2c-color-danger-600);
    background-color:var(--i2c-color-danger-100);
    border-color:var(--i2c-color-danger-50);
  }

  .alert__message {
    flex: 1 1 auto;
    padding-left: var(--i2c-spacing-3-5);
    padding-top: var(--i2c-spacing-2);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--i2c-font-size-large);
    // padding-inline-end: var(--i2c-spacing-medium);
  }
`;
