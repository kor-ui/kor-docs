# Switch

Switches are used by the user to switch between a set of pre-defined options. Use switches when fewer than 4 options are available, in other cases consider using [Radio Buttons](components/radio-button) or [Menu Items](components/menu-item) instead.

[Label and Icon](components/switch#label-and-icon-(required)) • [API](components/switch#api)

---

## Label and Icon (Required)

Either a label or an icon should be defined, but only one out of the two will be shown. If defined, a label or icon is shown inside the switch to represent the option being selected.

<iframe src="./assets/docs/components/switch/label-and-icon.html" height="480px"></iframe>

```html
<kor-switch style="width: fit-content;">
  <kor-switch-item icon="directions_car" disabled></kor-switch-item>
  <kor-switch-item icon="directions_bike"></kor-switch-item>
  <kor-switch-item label="Label" active></kor-switch-item>
  <kor-switch-item label="Label" disabled></kor-switch-item>
</kor-switch>
```

---

## API

### Properties

`kor-switch-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown instead of text label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. Only one item can be active at a time. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

`kor-switch`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts `kor-switch-item`s |