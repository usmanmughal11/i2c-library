# Badge Group

[component-header:i2c-badge-group]

Badges help highlight important information, such as notifications or new and unread messages. They’re primarily used for communicating secondary or additional information to text.

```html preview
<i2c-badge-group>
	 <i2c-badge slot="badge" variant="lighter-neutral" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
```

## Examples

###  Variants
Set the `variant` attribute to change the badge's variant.

```html preview
<i2c-badge-group variant="neutral-light">
	 <i2c-badge slot="badge" variant="lighter-neutral" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group>
	 <i2c-badge slot="badge" variant="light-neutral" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="neutral-light">
	 <i2c-badge slot="badge" variant="dark-neutral" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="primary-light">
	 <i2c-badge slot="badge" variant="lighter-primary" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="primary">
	 <i2c-badge slot="badge" variant="light-primary" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="primary-light">
	 <i2c-badge slot="badge" variant="primary" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>



<i2c-badge-group variant="warning-light">
	 <i2c-badge slot="badge" variant="lighter-warning" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="warning">
	 <i2c-badge slot="badge" variant="light-warning" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="warning-light">
	 <i2c-badge slot="badge" variant="warning" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>


<i2c-badge-group variant="success-light">
	 <i2c-badge slot="badge" variant="lighter-success" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="success">
	 <i2c-badge slot="badge" variant="light-success" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="success-light">
	 <i2c-badge slot="badge" variant="success" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>

<i2c-badge-group variant="danger-light">
	 <i2c-badge slot="badge" variant="lighter-danger" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="danger">
	 <i2c-badge slot="badge" variant="light-danger" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
<br/>
<i2c-badge-group variant="danger-light">
	 <i2c-badge slot="badge" variant="danger" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>

```

### Badge on the Right

Use `badgeRight` attribute for place badge on right.

```html preview
<i2c-badge-group badgeRight>
	 <i2c-badge slot="badge" variant="lighter-neutral" pill>Basic Badge</i2c-badge>
		I'm a badge Group Message
</i2c-badge-group>
```

[component-metadata:i2c-badge-group]
