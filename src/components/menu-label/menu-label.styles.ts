import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--i2c-font-sans);
    font-size: var(--i2c-font-size-small);
    font-weight: var(--i2c-font-weight-semibold);
    line-height: var(--i2c-line-height-normal);
    letter-spacing: var(--i2c-letter-spacing-normal);
    color: var(--i2c-color-neutral-500);
    padding: var(--i2c-spacing-2x-small) var(--i2c-spacing-x-large);
    user-select: none;
  }
`;
