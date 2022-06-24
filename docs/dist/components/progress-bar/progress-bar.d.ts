import { LitElement } from 'lit';
export default class SlProgressBar extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly localize;
    value: number;
    indeterminate: boolean;
    label: string;
    varient: 'primary' | 'success' | 'danger' | 'warning' | 'gray';
    valPosition?: 'bottom' | 'top' | 'front' | 'tooltipTop' | 'tooltipBottom';
    tooltip: true | false;
    lang: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-progress-bar': SlProgressBar;
    }
}
