import { LitElement } from 'lit';
import '../../components/icon-button/icon-button';
export default class SlAlert extends LitElement {
    static styles: import("lit").CSSResult;
    private autoHideTimeout;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    open: boolean;
    closable: boolean;
    iconCenter: boolean;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'default';
    layout: 'vertical' | 'linear';
    duration: number;
    leftImg?: string | undefined;
    badge?: string | undefined;
    alertTitle?: string | undefined;
    link1text?: string | undefined;
    link2text?: string | undefined;
    link1url?: string | undefined;
    link2url?: string | undefined;
    target?: string | undefined;
    type?: 'notification' | 'alert';
    firstUpdated(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    toast(): Promise<void>;
    restartAutoHide(): void;
    handleCloseClick(): void;
    handleMouseMove(): void;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'i2c-alert': SlAlert;
    }
}
