// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SlDetails from './details';

describe('<i2c-details>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDetails>(html`
      <i2c-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </i2c-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDetails>(html`
      <i2c-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </i2c-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit i2c-show and i2c-after-show when calling show()', async () => {
    const el = await fixture<SlDetails>(html`
      <i2c-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </i2c-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('i2c-show', showHandler);
    el.addEventListener('i2c-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit i2c-hide and i2c-after-hide when calling hide()', async () => {
    const el = await fixture<SlDetails>(html`
      <i2c-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </i2c-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('i2c-hide', hideHandler);
    el.addEventListener('i2c-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit i2c-show and i2c-after-show when setting open = true', async () => {
    const el = await fixture<SlDetails>(html`
      <i2c-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </i2c-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('i2c-show', showHandler);
    el.addEventListener('i2c-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit i2c-hide and i2c-after-hide when setting open = false', async () => {
    const el = await fixture<SlDetails>(html`
      <i2c-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </i2c-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('i2c-hide', hideHandler);
    el.addEventListener('i2c-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<SlDetails>(html`
      <div>
        <i2c-details>
          <div style="height: 200px;"></div>
        </i2c-details>
        <i2c-details>
          <div style="height: 400px;"></div>
        </i2c-details>
      </div>
    `);
    const first = el.querySelectorAll('i2c-details')[0];
    const second = el.querySelectorAll('i2c-details')[1];
    const firstBody = first.shadowRoot!.querySelector('.details__body')!;
    const secondBody = second.shadowRoot!.querySelector('.details__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(200);
    expect(secondBody.clientHeight).to.equal(400);
  });
});
