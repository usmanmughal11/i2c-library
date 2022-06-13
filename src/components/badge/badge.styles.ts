import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--i2c-font-size-x-small);
    font-weight: var(--i2c-font-weight-semibold);
    letter-spacing: var(--i2c-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--i2c-border-radius-small);
    border: solid 1px var(--i2c-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--i2c-color-primary-600);
    color: var(--i2c-color-neutral-0);
  }

  .badge--success {
    background-color: var(--i2c-color-success-600);
    color: var(--i2c-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--i2c-color-neutral-600);
    color: var(--i2c-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--i2c-color-warning-600);
    color: var(--i2c-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--i2c-color-danger-600);
    color: var(--i2c-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--i2c-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--i2c-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--i2c-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--i2c-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--i2c-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--i2c-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
