import { expect, fixture, html } from '@open-wc/testing';

describe('<i2c-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <i2c-mutation-observer></i2c-mutation-observer> `);

    expect(el).to.exist;
  });
});
