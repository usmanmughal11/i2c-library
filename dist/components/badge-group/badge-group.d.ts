import { LitElement } from 'lit';
export default class I2cBadgeGroup extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'primary-light' | 'primary' | 'success-light' | 'success' | 'neutral-light' | 'neutral' | 'warning-light' | 'warning' | 'danger-light' | 'danger';
    badgeRight: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-badge-group': I2cBadgeGroup;
    }
}
