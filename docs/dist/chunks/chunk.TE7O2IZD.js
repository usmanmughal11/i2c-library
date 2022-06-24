import {
  form_control_styles_default
} from "./chunk.RG6X2WND.js";
import {
  focusVisibleSelector
} from "./chunk.AMENFSPY.js";
import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/range/range.styles.ts
var range_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--i2c-color-neutral-200);
    --track-color-inactive: var(--i2c-color-neutral-200);
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--i2c-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--i2c-color-primary-600);
    border: solid var(--i2c-input-border-width) var(--i2c-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color,
      var(--i2c-transition-fast) color, var(--i2c-transition-fast) box-shadow, var(--i2c-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--i2c-color-primary-500);
    border-color: var(--i2c-color-primary-500);
  }

  .range__control:enabled${focusVisibleSelector}::-webkit-slider-thumb {
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--i2c-color-primary-500);
    border-color: var(--i2c-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--i2c-color-primary-600);
    border-color: var(--i2c-color-primary-600);
    transition: var(--i2c-transition-fast) border-color, var(--i2c-transition-fast) background-color,
      var(--i2c-transition-fast) color, var(--i2c-transition-fast) box-shadow, var(--i2c-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--i2c-color-primary-500);
    border-color: var(--i2c-color-primary-500);
  }

  .range__control:enabled${focusVisibleSelector}::-moz-range-thumb {
    outline: var(--i2c-focus-ring);
    outline-offset: var(--i2c-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--i2c-color-primary-500);
    border-color: var(--i2c-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control${focusVisibleSelector} {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--i2c-z-index-tooltip);
    left: 1px;
    border-radius: var(--i2c-tooltip-border-radius);
    background-color: var(--i2c-tooltip-background-color);
    font-family: var(--i2c-tooltip-font-family);
    font-size: var(--i2c-tooltip-font-size);
    font-weight: var(--i2c-tooltip-font-weight);
    line-height: var(--i2c-tooltip-line-height);
    color: var(--i2c-tooltip-color);
    opacity: 0;
    padding: var(--i2c-tooltip-padding);
    transition: var(--i2c-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translateX(calc(-1 * var(--i2c-tooltip-arrow-size)));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--i2c-tooltip-arrow-size) solid var(--i2c-tooltip-background-color);
    border-left: var(--i2c-tooltip-arrow-size) solid transparent;
    border-right: var(--i2c-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--i2c-tooltip-arrow-size) solid var(--i2c-tooltip-background-color);
    border-left: var(--i2c-tooltip-arrow-size) solid transparent;
    border-right: var(--i2c-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;

export {
  range_styles_default
};
