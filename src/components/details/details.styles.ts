import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--i2c-color-neutral-200);
    border-radius: var(--i2c-border-radius-medium);
    background-color: var(--i2c-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--i2c-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header${focusVisibleSelector} {
    outline: var(--i2c-focus-ring);
    outline-offset: calc(1px + var(--i2c-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header${focusVisibleSelector} {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--i2c-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--i2c-spacing-medium);
  }
`;
