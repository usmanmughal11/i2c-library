import { expect, fixture, html } from '@open-wc/testing';

describe('<i2c-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <i2c-split-panel></i2c-split-panel> `);

    expect(el).to.exist;
  });
});
