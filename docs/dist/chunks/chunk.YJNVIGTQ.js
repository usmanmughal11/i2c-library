import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/progress-bar/progress-bar.styles.ts
var progress_bar_styles_default = r`
  ${component_styles_default}

  :host {
    --height: 1rem;
    --track-color: var(--i2c-color-neutral-200);
    --indicator-color: var(--i2c-color-primary-600);
    --label-color: var(--i2c-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--i2c-border-radius-pill);
    box-shadow: inset var(--i2c-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--i2c-font-sans);
    font-size: 12px;
    font-weight: var(--i2c-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -50%;
      width: 50%;
    }
    75%,
    100% {
      inset-inline-start: 100%;
      width: 50%;
    }
  }
`;

export {
  progress_bar_styles_default
};
