import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/progress-ring/progress-ring.styles.ts
var progress_ring_styles_default = r`
  ${component_styles_default}

  :host {
    --size: 160px;
    --track-width: 16px;
    --track-color: var(--i2c-color-primary-50);
    --indicator-color: var(--i2c-color-primary-600);
    --label-value-font-size:var(--i2c-font-size-x-large);
    --label-text-font-size:var(--i2c-font-size-x-small);
    --label-text-color:var(--i2c-color-gray-500);
    
    --label-font-weight:var(--i2c-font-weight-semibold);

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    stroke-width: var(--track-width);
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transition: 0.35s stroke-dashoffset;
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    line-height:var(--i2c-line-height-dense);
    text-align: center;
    user-select: none;
  }
  .progress-ring__label-text{
    font-size:var(--label-text-font-size);
    font-weight:var(--label-font-weight);
    color:var(--label-text-color);
    max-width: 75%;
  }
  .progress-ring__label-value{
    font-size:var(--label-value-font-size);
    font-weight:var(--label-font-weight);
  }
`;

export {
  progress_ring_styles_default
};