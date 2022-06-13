# Tab

[component-header:i2c-tab]

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

```html preview
<i2c-tab>Tab</i2c-tab>
<i2c-tab active>Active</i2c-tab>
<i2c-tab closable>Closable</i2c-tab>
<i2c-tab disabled>Disabled</i2c-tab>
```

```jsx react
import { SlTab } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTab>Tab</SlTab>
    <SlTab active>Active</SlTab>
    <SlTab closable>Closable</SlTab>
    <SlTab disabled>Disabled</SlTab>
  </>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:i2c-tab]
