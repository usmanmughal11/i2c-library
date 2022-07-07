import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/badge/badge.styles.ts
var badge_styles_default = r`
  ${component_styles_default}
  

  :host {
    display: inline-flex;
    --i2c-badge-left-icon-size: 6px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height:1;
    font-weight: var(--i2c-font-weight-semibold);
    letter-spacing: var(--i2c-letter-spacing-normal);
    border: solid 1px var(--i2c-color-neutral-0);
    white-space: nowrap;
    user-select: none;
    cursor: inherit;
  }
  .badge.badge--medium{
    height:var(--i2c-spacing-6);
    padding: 0 var(--i2c-spacing-2-5);
    font-size: var(--i2c-font-size-small);
  }
  .badge.badge--small{
    height:var(--i2c-spacing-5-5);
    padding: 0  var(--i2c-spacing-2);
    font-size: var(--i2c-font-size-x-small);
  }
  .badge.badge--large{
    height:var(--i2c-spacing-7);
    padding:0 var(--i2c-spacing-3);
    font-size: var(--i2c-font-size-small);
  }
  .badge--icon{
    font-size:var(--i2c-badge-left-icon-size);
    padding-right:var(--i2c-spacing-1);
  }
  .badge.badge--has--img{
    height:28px;
    padding: 0 var(--i2c-spacing-2) 0 var(--i2c-spacing-1);
  }
  .badge.badge--has--right--icon{
    padding-right:var(--i2c-spacing-1-5);    
  }

  .badge--img{
    margin-right:6px;
    border-radius:var(--i2c-border-radius-circle);
    font-size: var(--i2c-font-size-medium);
  }
  .badge--right--icon{
    cursor:pointer;
    font-size: var(--i2c-font-size-small);
    padding-left: var(--i2c-spacing-1);
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



  .badge--light--primary {
    background-color: var(--i2c-color-primary-50);
    color: var(--i2c-color-primary-700);
  }

  .badge--light--success {
    background-color: var(--i2c-color-success-50);
    color: var(--i2c-color-success-700);
  }

  .badge--light--neutral {
    background-color: var(--i2c-color-neutral-100);
    color: var(--i2c-color-neutral-700);
  }

  .badge--light--warning {
    background-color: var(--i2c-color-orange-50);
    color: var(--i2c-color-warning-700);
  }

  .badge--light--danger {
    background-color: var(--i2c-color-danger-50);
    color: var(--i2c-color-danger-700);
  }

  
  .badge--dark--neutral {
    background-color: var(--i2c-color-neutral-800);
    color: var(--i2c-color-neutral-0);
  }


  .badge--lighter--primary {
    background-color: var(--i2c-color-neutral-0);
    color: var(--i2c-color-primary-700);
  }

  .badge--lighter--success {
    background-color: var(--i2c-color-neutral-0);
    color: var(--i2c-color-success-700);
  }

  .badge--lighter--neutral {
    background-color: var(--i2c-color-neutral-0);
    color: var(--i2c-color-neutral-700);
  }

  .badge--lighter--warning {
    background-color: var(--i2c-color-neutral-0);
    color: var(--i2c-color-warning-700);
  }

  .badge--lighter--danger {
    background-color: var(--i2c-color-neutral-0);
    color: var(--i2c-color-danger-700);
  }





  /* Pill modifier */
  .badge--pill {
    border-radius: var(--i2c-border-radius-pill);
  }

  /* Circle modifier */
  .badge.badge--circle {
    border-radius: var(--i2c-border-radius-circle);
    padding:0;
  }


  .badge.badge--circle.badge--small {
    width:var(--i2c-spacing-5-5);
    line-height:unset;
  }
  .badge.badge--circle.badge--medium {
    width:var(--i2c-spacing-6);
  }
  .badge.badge--circle.badge--large {
    width: var(--i2c-spacing-7);
  }


  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary, .badge--pulse.badge--light--primary {
    --pulse-color: var(--i2c-color-primary-600);
  }

  .badge--pulse.badge--success, .badge--pulse.badge--light--success {
    --pulse-color: var(--i2c-color-success-600);
  }

  .badge--pulse.badge--neutral, .badge--pulse.badge--light--neutral {
    --pulse-color: var(--i2c-color-neutral-600);
  }

  .badge--pulse.badge--warning, .badge--pulse.badge--light--warning {
    --pulse-color: var(--i2c-color-warning-600);
  }

  .badge--pulse.badge--danger, .badge--pulse.badge--light--danger {
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

export {
  badge_styles_default
};
