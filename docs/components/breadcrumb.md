# Breadcrumb

[component-header:i2c-breadcrumb]

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<i2c-breadcrumb>
  <i2c-breadcrumb-item>Catalog</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Clothing</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Women's</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Shirts &amp; Tops</i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Catalog</SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Women's</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts &amp; Tops</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<i2c-breadcrumb>
  <i2c-breadcrumb-item href="https://example.com/home">Homepage</i2c-breadcrumb-item>

  <i2c-breadcrumb-item href="https://example.com/home/services">Our Services</i2c-breadcrumb-item>

  <i2c-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</i2c-breadcrumb-item>

  <i2c-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem href="https://example.com/home">Homepage</SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services">Our Services</SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<i2c-breadcrumb>
  <i2c-icon name="dot" slot="separator"></i2c-icon>
  <i2c-breadcrumb-item>First</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Second</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Third</i2c-breadcrumb-item>
</i2c-breadcrumb>

<br />

<i2c-breadcrumb>
  <i2c-icon name="arrow-right" slot="separator"></i2c-icon>
  <i2c-breadcrumb-item>First</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Second</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Third</i2c-breadcrumb-item>
</i2c-breadcrumb>

<br />

<i2c-breadcrumb>
  <span slot="separator">/</span>
  <i2c-breadcrumb-item>First</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Second</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Third</i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBreadcrumb>
      <i2c-icon name="dot" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <i2c-icon name="arrow-right" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <span slot="separator">/</span>
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<i2c-breadcrumb>
  <i2c-breadcrumb-item>
    <i2c-icon slot="prefix" name="house"></i2c-icon>
    Home
  </i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Articles</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Traveling</i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="house" />
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Articles</SlBreadcrumbItem>
    <SlBreadcrumbItem>Traveling</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<i2c-breadcrumb>
  <i2c-breadcrumb-item>Documents</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Policies</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>
    Security
    <i2c-icon slot="suffix" name="shield-lock"></i2c-icon>
  </i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Documents</SlBreadcrumbItem>
    <SlBreadcrumbItem>Policies</SlBreadcrumbItem>
    <SlBreadcrumbItem>
      Security
      <SlIcon slot="suffix" name="shield-lock"></SlIcon>
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<i2c-breadcrumb>
  <i2c-breadcrumb-item>Homepage</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Our Services</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Digital Media</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>
    Web Design
    <i2c-dropdown slot="suffix">
      <i2c-button slot="trigger" size="small" circle>
        <i2c-icon label="More options" name="three-dots"></i2c-icon>
      </i2c-button>
      <i2c-menu>
        <i2c-menu-item checked>Web Design</i2c-menu-item>
        <i2c-menu-item>Web Development</i2c-menu-item>
        <i2c-menu-item>Marketing</i2c-menu-item>
      </i2c-menu>
    </i2c-dropdown>
  </i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import {
  SlBreadcrumb,
  SlBreadcrumbItem,
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Homepage</SlBreadcrumbItem>
    <SlBreadcrumbItem>Our Services</SlBreadcrumbItem>
    <SlBreadcrumbItem>Digital Media</SlBreadcrumbItem>
    <SlBreadcrumbItem>
      Web Design
      <SlDropdown slot="suffix">
        <SlButton slot="trigger" size="small" circle>
          <SlIcon label="More options" name="three-dots"></SlIcon>
        </SlButton>
        <SlMenu>
          <SlMenuItem checked>Web Design</SlMenuItem>
          <SlMenuItem>Web Development</SlMenuItem>
          <SlMenuItem>Marketing</SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

[component-metadata:i2c-breadcrumb]
