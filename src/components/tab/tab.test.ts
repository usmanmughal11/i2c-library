import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SlTab from './tab';

describe('<i2c-tab>', () => {
  it('should render default tab', async () => {
    const el = await fixture<SlTab>(html` <i2c-tab>Test</i2c-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.getAttribute('role')).to.equal('tab');
    expect(base.getAttribute('aria-disabled')).to.equal('false');
    expect(base.getAttribute('aria-selected')).to.equal('false');
    expect(base.getAttribute('tabindex')).to.equal('-1');
    expect(base.getAttribute('class')).to.equal(' tab ');
    expect(el.active).to.equal(false);
    expect(el.closable).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should disable tab by attribute', async () => {
    const el = await fixture<SlTab>(html` <i2c-tab disabled>Test</i2c-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(el.disabled).to.equal(true);
    expect(base.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--disabled ');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  it('should set active tab by attribute', async () => {
    const el = await fixture<SlTab>(html` <i2c-tab active>Test</i2c-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(el.active).to.equal(true);
    expect(base.getAttribute('aria-selected')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--active ');
    expect(base.getAttribute('tabindex')).to.equal('0');
  });

  it('should set closable by attribute', async () => {
    const el = await fixture<SlTab>(html` <i2c-tab closable>Test</i2c-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const closeButton = el.shadowRoot!.querySelector('[part="close-button"]');

    expect(el.closable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tab tab--closable ');
    expect(closeButton).not.to.be.null;
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<SlTab>(html` <i2c-tab>Test</i2c-tab> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('shoud blur inner div', async () => {
      const el = await fixture<SlTab>(html` <i2c-tab>Test</i2c-tab> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('closable', () => {
    it('should emit close event when close button clicked', async () => {
      const el = await fixture<SlTab>(html` <i2c-tab closable>Test</i2c-tab> `);

      const closeButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part="close-button"]')!;
      const spy = sinon.spy();

      el.addEventListener('i2c-close', spy, { once: true });

      closeButton.click();

      expect(spy.called).to.equal(true);
    });
  });
});
