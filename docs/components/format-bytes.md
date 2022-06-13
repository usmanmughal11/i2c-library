# Format Bytes

[component-header:i2c-format-bytes]

Formats a number as a human readable bytes value.

```html preview
<div class="format-bytes-overview">
  The file is <i2c-format-bytes value="1000"></i2c-format-bytes> in size. <br /><br />
  <i2c-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></i2c-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('i2c-format-bytes');
  const input = container.querySelector('i2c-input');

  input.addEventListener('i2c-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlFormatBytes, SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <SlFormatBytes value={value} /> in size.
      <br />
      <br />
      <SlInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onSlInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<i2c-format-bytes value="12"></i2c-format-bytes><br />
<i2c-format-bytes value="1200"></i2c-format-bytes><br />
<i2c-format-bytes value="1200000"></i2c-format-bytes><br />
<i2c-format-bytes value="1200000000"></i2c-format-bytes>
```

```jsx react
import { SlFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatBytes value="12" />
    <br />
    <SlFormatBytes value="1200" />
    <br />
    <SlFormatBytes value="1200000" />
    <br />
    <SlFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html preview
<i2c-format-bytes value="12" unit="bit"></i2c-format-bytes><br />
<i2c-format-bytes value="1200" unit="bit"></i2c-format-bytes><br />
<i2c-format-bytes value="1200000" unit="bit"></i2c-format-bytes><br />
<i2c-format-bytes value="1200000000" unit="bit"></i2c-format-bytes>
```

```jsx react
import { SlFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatBytes value="12" unit="bit" />
    <br />
    <SlFormatBytes value="1200" unit="bit" />
    <br />
    <SlFormatBytes value="1200000" unit="bit" />
    <br />
    <SlFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
<i2c-format-bytes value="12" lang="de"></i2c-format-bytes><br />
<i2c-format-bytes value="1200" lang="de"></i2c-format-bytes><br />
<i2c-format-bytes value="1200000" lang="de"></i2c-format-bytes><br />
<i2c-format-bytes value="1200000000" lang="de"></i2c-format-bytes>
```

```jsx react
import { SlFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatBytes value="12" lang="de" />
    <br />
    <SlFormatBytes value="1200" lang="de" />
    <br />
    <SlFormatBytes value="1200000" lang="de" />
    <br />
    <SlFormatBytes value="1200000000" lang="de" />
  </>
);
```

[component-metadata:i2c-format-bytes]
