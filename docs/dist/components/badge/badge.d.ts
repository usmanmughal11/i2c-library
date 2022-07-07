import { LitElement } from 'lit';
export default class i2cBadge extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'light-primary' | 'light-success' | 'light-neutral' | 'dark-neutral' | 'light-warning' | 'light-danger' | 'lighter-primary' | 'lighter-success' | 'lighter-neutral' | 'lighter-warning' | 'lighter-danger';
    size: 'small' | 'medium' | 'large';
    pill: boolean;
    circle: boolean;
    iconname: '';
    rightIcon: 'x';
    imgpath: string;
    closable: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-badge': i2cBadge;
    }
}
