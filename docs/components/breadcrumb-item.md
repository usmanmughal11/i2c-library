# Breadcrumb Item

[component-header:i2c-breadcrumb-item]

Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.

```html preview
<i2c-breadcrumb>
  <i2c-breadcrumb-item>
    <i2c-icon slot="prefix" name="house"></i2c-icon>
    Home
  </i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Clothing</i2c-breadcrumb-item>
  <i2c-breadcrumb-item>Shirts</i2c-breadcrumb-item>
</i2c-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="house"></SlIcon>
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:i2c-breadcrumb-item]
