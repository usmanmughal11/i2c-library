import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

 .badge-group{
    margin-right:var(--i2c-spacing-3);
    display: inline-flex;
    align-items:center;
    border-radius: var(--i2c-border-radius-pill);
    padding:var(--i2c-spacing-1);
    font-size: var(--i2c-font-size-small);
    font-weight: var(--i2c-font-weight-semibold);
    background-color:var(--i2c-color-primary-100);
    mix-blend-mode: multiply;
  }
  .badge-group.badge-right{
    flex-flow:row-reverse;
  }
 .badge-title{
    padding:0 var(--i2c-spacing-2);
    white-space:nowrap;
  }

  .badge-group.badge-group-primary-light{
    background-color:var(--i2c-color-primary-25);
    color:var(--i2c-color-primary-800);
  }
  .badge-group.badge-group-primary{
    background-color:var(--i2c-color-primary-100);
    color:var(--i2c-color-primary-800);
  }

  .badge-group.badge-group-success-light{
    background-color:var(--i2c-color-success-50);
    color:var(--i2c-color-success-800);
  }
  .badge-group.badge-group-success{
    background-color:var(--i2c-color-success-100);
    color:var(--i2c-color-success-800);
  }

  .badge-group.badge-group-warning-light{
    background-color:var(--i2c-color-orange-50);
    color:var(--i2c-color-warning-800);
  }
  .badge-group.badge-group-warning{
    background-color:var(--i2c-color-orange-100);
    color:var(--i2c-color-warning-800);
  }

  .badge-group.badge-group-neutral-light{
    background-color:var(--i2c-color-neutral-50);
    color:var(--i2c-color-neutral-800);
  }
  .badge-group.badge-group-neutral{
    background-color:var(--i2c-color-neutral-100);
    color:var(--i2c-color-neutral-800);
  }

  .badge-group.badge-group-danger-light{
    background-color:var(--i2c-color-danger-50);
    color:var(--i2c-color-danger-800);
  }
  .badge-group.badge-group-danger{
    background-color:var(--i2c-color-danger-100);
    color:var(--i2c-color-danger-800);
  }

`;
