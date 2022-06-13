import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu {
    background: var(--i2c-panel-background-color);
    border: solid var(--i2c-panel-border-width) var(--i2c-panel-border-color);
    border-radius: var(--i2c-border-radius-medium);
    background: var(--i2c-panel-background-color);
    padding: var(--i2c-spacing-x-small) 0;
  }

  ::slotted(i2c-divider) {
    --spacing: var(--i2c-spacing-x-small);
  }
`;
