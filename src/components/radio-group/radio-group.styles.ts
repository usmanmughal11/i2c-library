import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--i2c-panel-border-width) var(--i2c-panel-border-color);
    border-radius: var(--i2c-border-radius-medium);
    padding: var(--i2c-spacing-large);
    padding-top: var(--i2c-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--i2c-input-font-family);
    font-size: var(--i2c-input-font-size-medium);
    font-weight: var(--i2c-input-font-weight);
    color: var(--i2c-input-color);
    padding: 0 var(--i2c-spacing-2x-small);
  }

  ::slotted(i2c-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--i2c-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;
