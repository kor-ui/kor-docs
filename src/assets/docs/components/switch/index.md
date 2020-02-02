# Switch

[Label and Icon](components/switch#label-and-icon) • [API](components/switch#api)

<iframe src="./assets/docs/components/switch/main.html"></iframe>

---

## Label and Icon

Description

<iframe src="./assets/docs/components/switch/label-and-icon.html" height="480px"></iframe>

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