# Tab Panel

[component-header:i2c-tab-panel]

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

```html preview
<i2c-tab-group>
  <i2c-tab slot="nav" panel="general">General</i2c-tab>
  <i2c-tab slot="nav" panel="custom">Custom</i2c-tab>
  <i2c-tab slot="nav" panel="advanced">Advanced</i2c-tab>
  <i2c-tab slot="nav" panel="disabled" disabled>Disabled</i2c-tab>

  <i2c-tab-panel name="general">This is the general tab panel.</i2c-tab-panel>
  <i2c-tab-panel name="custom">This is the custom tab panel.</i2c-tab-panel>
  <i2c-tab-panel name="advanced">This is the advanced tab panel.</i2c-tab-panel>
  <i2c-tab-panel name="disabled">This is a disabled tab panel.</i2c-tab-panel>
</i2c-tab-group>
```

```jsx react
import { SlTab, SlTabGroup, SlTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlTabGroup>
    <SlTab slot="nav" panel="general">
      General
    </SlTab>
    <SlTab slot="nav" panel="custom">
      Custom
    </SlTab>
    <SlTab slot="nav" panel="advanced">
      Advanced
    </SlTab>
    <SlTab slot="nav" panel="disabled" disabled>
      Disabled
    </SlTab>

    <SlTabPanel name="general">This is the general tab panel.</SlTabPanel>
    <SlTabPanel name="custom">This is the custom tab panel.</SlTabPanel>
    <SlTabPanel name="advanced">This is the advanced tab panel.</SlTabPanel>
    <SlTabPanel name="disabled">This is a disabled tab panel.</SlTabPanel>
  </SlTabGroup>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:i2c-tab-panel]
