import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SlRadioGroup from '../../components/radio-group/radio-group';
import type SlRadio from './radio';

describe('<i2c-radio>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlRadio>(html` <i2c-radio disabled></i2c-radio> `);
    const radio = el.input;

    expect(radio.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlRadio>(html` <i2c-radio></i2c-radio> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire i2c-change when clicked', async () => {
    const el = await fixture<SlRadio>(html` <i2c-radio></i2c-radio> `);
    setTimeout(() => el.input.click());
    const event = (await oneEvent(el, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire i2c-change when toggled via keyboard - space', async () => {
    const el = await fixture<SlRadio>(html` <i2c-radio></i2c-radio> `);
    el.input.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire i2c-change when toggled via keyboard - arrow key', async () => {
    const radioGroup = await fixture<SlRadioGroup>(html`
      <i2c-radio-group>
        <i2c-radio id="radio-1"></i2c-radio>
        <i2c-radio id="radio-2"></i2c-radio>
      </i2c-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SlRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SlRadio>('#radio-2')!;
    radio1.input.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = (await oneEvent(radio2, 'i2c-change')) as CustomEvent;
    expect(event.target).to.equal(radio2);
    expect(radio2.checked).to.be.true;
  });

  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<SlRadioGroup>(html`
      <i2c-radio-group>
        <i2c-radio checked></i2c-radio>
        <i2c-radio disabled></i2c-radio>
      </i2c-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SlRadio>('i2c-radio[checked]')!;
    const radio2 = radioGroup.querySelector<SlRadio>('i2c-radio[disabled]')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <i2c-radio-group>
            <i2c-radio id="radio-1" name="a" value="1" checked></i2c-radio>
            <i2c-radio id="radio-2" name="a" value="2"></i2c-radio>
            <i2c-radio id="radio-3" name="a" value="3"></i2c-radio>
          </i2c-radio-group>
          <i2c-button type="submit">Submit</i2c-button>
        </form>
      `);
      const button = form.querySelector('i2c-button')!;
      const radio = form.querySelectorAll('i2c-radio')[1]!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      radio.click();
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('2');
    });
  });

  it('should submit "on" when no value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <i2c-radio-group>
          <i2c-radio id="radio-1" name="a" checked></i2c-radio>
          <i2c-radio id="radio-2" name="a"></i2c-radio>
          <i2c-radio id="radio-3" name="a"></i2c-radio>
        </i2c-radio-group>
        <i2c-button type="submit">Submit</i2c-button>
      </form>
    `);
    const button = form.querySelector('i2c-button')!;
    const radio = form.querySelectorAll('i2c-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);
      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();

    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('on');
  });

  it('should show a constraint validation error when setCustomValidity() is called', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <i2c-radio-group>
          <i2c-radio id="radio-1" name="a" value="1" checked></i2c-radio>
          <i2c-radio id="radio-2" name="a" value="2"></i2c-radio>
        </i2c-radio-group>
        <i2c-button type="submit">Submit</i2c-button>
      </form>
    `);
    const button = form.querySelector('i2c-button')!;
    const radio = form.querySelectorAll('i2c-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

    // Submitting the form after setting custom validity should not trigger the handler
    radio.setCustomValidity('Invalid selection');
    form.addEventListener('submit', submitHandler);
    button.click();

    await aTimeout(100);

    expect(submitHandler).to.not.have.been.called;
  });
});
