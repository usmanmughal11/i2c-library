import { expect, fixture, html } from '@open-wc/testing';

describe('<i2c-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <i2c-animated-image></i2c-animated-image> `);

    expect(el).to.exist;
  });
});
