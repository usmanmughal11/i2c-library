import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import type SlSwitch from './switch';

describe('<i2c-switch>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch disabled></i2c-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch></i2c-switch> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire i2c-change when clicked', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch></i2c-switch> `);
    setTimeout(() => el.shadowRoot!.querySelector('input')!.click());
    const event = (await oneEvent(el, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire i2c-change when toggled with spacebar', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch></i2c-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire i2c-change when toggled with the right arrow', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch></i2c-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = (await oneEvent(el, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire i2c-change when toggled with the left arrow', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch checked></i2c-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: 'ArrowLeft' }));
    const event = (await oneEvent(el, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.false;
  });

  it('should not fire i2c-change when checked is set by javascript', async () => {
    const el = await fixture<SlSwitch>(html` <i2c-switch></i2c-switch> `);
    el.addEventListener('i2c-change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });
});
