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
    --height: var(--i2c-spacing-2);
    --track-color: var(--i2c-color-primary-50);
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
    border-radius: var(--i2c-border-radius-pill);
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
  .progress-bar-inline{
    display:inline-block;
    width:calc(100% - 50px);
    vertical-align:middle;
  }

.progress-val-label{
  font-size: var(--i2c-font-size-small);
  padding-right:var(--i2c-spacing-1-5);
  font-weight: var(--i2c-font-weight-semibold);
  text-align:right;
}
.progress-val-bottom,.progress-val-top{
  display:block;
}
.progress-val-front{
  display:inline-block;
  width:45px;
  text-align:right;
}
[class*="progress-val-tooltip-"]{
  display:inline-block;
  position:relative;
  background:var(--i2c-color-neutral);
  color:var(--i2c-color-gray-700);
  padding: var(--i2c-spacing-2-5) var(--i2c-spacing-3-5);
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  font-size:var(--i2c-font-size-x-small);
  border-radius:var(--i2c-border-radius-large);
}
[class*="progress-val-tooltip-"]:after{
  content: "";
  position: absolute;
  left: 50%;
  margin-left:-6px ;
  border-width: 6px;
  border-style: solid;
}
.progress-val-tooltip-bottom{
  margin-top:var(--i2c-spacing-3);
}
.progress-val-tooltip-bottom:after{
  bottom: 100%;
  border-color: transparent transparent var(--i2c-color-neutral-0) transparent;
}

.progress-val-tooltip-top{
  margin-bottom:var(--i2c-spacing-3);
}

.progress-val-tooltip-top:after{
  top: 100%;
  border-color: var(--i2c-color-neutral-0) transparent transparent transparent;
}

  /* Themes */
  .progress-bar.progress-bar-primary {
      background-color: var(--track-color);
  }
  .progress-bar.progress-bar-primary .progress-bar__indicator{
    background-color: var(--indicator-color);
  }

  .progress-bar.progress-bar-warning {
    background-color: var(--i2c-color-orange-100);
  }
  .progress-bar.progress-bar-warning .progress-bar__indicator{
    background-color: var(--i2c-color-warning-600);
  }

  .progress-bar.progress-bar-success {
    background-color: var(--i2c-color-success-50);
  }
  .progress-bar.progress-bar-success .progress-bar__indicator{
    background-color: var(--i2c-color-success-600);
  }

  .progress-bar.progress-bar-danger {
    background-color: var(--i2c-color-danger-50);
  }
  .progress-bar.progress-bar-danger .progress-bar__indicator{
    background-color: var(--i2c-color-danger-600);
  }

  .progress-bar.progress-bar-gray {
    background-color: var(--i2c-color-gray-100);
  }
  .progress-bar.progress-bar-gray .progress-bar__indicator{
    background-color: var(--i2c-color-gray-500);
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
