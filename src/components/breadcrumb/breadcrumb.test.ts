import { expect, fixture, html } from '@open-wc/testing';
import type SlBreadcrumb from './breadcrumb';

describe('<i2c-breadcrumb>', () => {
  let el: SlBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <i2c-breadcrumb>
          <i2c-breadcrumb-item>Catalog</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Clothing</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Women's</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Shirts &amp; Tops</i2c-breadcrumb-item>
        </i2c-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should render i2c-icon as separator', () => {
      expect(el.querySelectorAll('i2c-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('i2c-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <i2c-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <i2c-breadcrumb-item>First</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Second</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Third</i2c-breadcrumb-item>
        </i2c-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the i2c-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('i2c-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <i2c-breadcrumb>
          <i2c-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </i2c-breadcrumb-item>
          <i2c-breadcrumb-item>First</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Second</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Third</i2c-breadcrumb-item>
        </i2c-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <i2c-breadcrumb>
          <i2c-breadcrumb-item>First</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Second</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>Third</i2c-breadcrumb-item>
          <i2c-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </i2c-breadcrumb-item>
        </i2c-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });
});
