import { expect, fixture, html } from '@open-wc/testing';

describe('<i2c-badge-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <i2c-badge-group></i2c-badge-group> `);

    expect(el).to.exist;
  });
});
