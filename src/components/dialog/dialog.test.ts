// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SlDialog from './dialog';

describe('<i2c-dialog>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDialog>(html`
      <i2c-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDialog>(
      html` <i2c-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit i2c-show and i2c-after-show when calling show()', async () => {
    const el = await fixture<SlDialog>(html`
      <i2c-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('i2c-show', showHandler);
    el.addEventListener('i2c-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit i2c-hide and i2c-after-hide when calling hide()', async () => {
    const el = await fixture<SlDialog>(html`
      <i2c-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('i2c-hide', hideHandler);
    el.addEventListener('i2c-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit i2c-show and i2c-after-show when setting open = true', async () => {
    const el = await fixture<SlDialog>(html`
      <i2c-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('i2c-show', showHandler);
    el.addEventListener('i2c-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit i2c-hide and i2c-after-hide when setting open = false', async () => {
    const el = await fixture<SlDialog>(html`
      <i2c-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('i2c-hide', hideHandler);
    el.addEventListener('i2c-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when i2c-request-close is prevented', async () => {
    const el = await fixture<SlDialog>(html`
      <i2c-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i2c-dialog>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part="overlay"]')!;

    el.addEventListener('i2c-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<SlDialog>(html` <i2c-dialog><input /></i2c-dialog> `);
    const input = el.querySelector('input')!;
    const initialFocusHandler = sinon.spy((event: Event) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('i2c-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });
});
