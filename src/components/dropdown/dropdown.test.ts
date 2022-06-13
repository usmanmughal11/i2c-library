import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SlDropdown from './dropdown';

describe('<i2c-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown open>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
          <i2c-menu-item>Item 3</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
          <i2c-menu-item>Item 3</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;

    expect(panel.hidden).to.be.true;
  });

  it('should emit i2c-show and i2c-after-show when calling show()', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
          <i2c-menu-item>Item 3</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('i2c-show', showHandler);
    el.addEventListener('i2c-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit i2c-hide and i2c-after-hide when calling hide()', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown open>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
          <i2c-menu-item>Item 3</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('i2c-hide', hideHandler);
    el.addEventListener('i2c-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit i2c-show and i2c-after-show when setting open = true', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
          <i2c-menu-item>Item 3</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('i2c-show', showHandler);
    el.addEventListener('i2c-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit i2c-hide and i2c-after-hide when setting open = false', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown open>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
          <i2c-menu-item>Item 3</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('i2c-hide', hideHandler);
    el.addEventListener('i2c-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should still open on arrow navigation when no menu items', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu> </i2c-menu>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should open on arrow navigation', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should close on escape key', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown open>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
          <i2c-menu-item>Item 2</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.focus();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should not open on arrow navigation when no menu exists', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <div>Some custom content</div>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should open on enter key', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should open on enter key when no menu exists', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <div>Some custom content</div>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should hide when clicked outside container and initially open', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown open>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);

    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should hide when clicked outside container', async () => {
    const el = await fixture<SlDropdown>(html`
      <i2c-dropdown>
        <i2c-button slot="trigger" caret>Toggle</i2c-button>
        <i2c-menu>
          <i2c-menu-item>Item 1</i2c-menu-item>
        </i2c-menu>
      </i2c-dropdown>
    `);
    const trigger = el.querySelector('i2c-button')!;

    trigger.click();
    await el.updateComplete;
    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });
});
