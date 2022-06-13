import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-target {
    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--i2c-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip-positioner[data-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-placement^='right'] .tooltip {
    transform-origin: left;
  }

  .tooltip__content {
    max-width: var(--max-width);
    border-radius: var(--i2c-tooltip-border-radius);
    background-color: var(--i2c-tooltip-background-color);
    font-family: var(--i2c-tooltip-font-family);
    font-size: var(--i2c-tooltip-font-size);
    font-weight: var(--i2c-tooltip-font-weight);
    line-height: var(--i2c-tooltip-line-height);
    color: var(--i2c-tooltip-color);
    padding: var(--i2c-tooltip-padding);
  }

  .tooltip__arrow {
    position: absolute;
    background: var(--i2c-tooltip-background-color);
    width: calc(var(--i2c-tooltip-arrow-size) * 2);
    height: calc(var(--i2c-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: -1;
  }
`;
