# Tabs

[Orientation](components/tabs#orientation) • [Label and Icon](components/tabs#label-and-icon) • [API](components/tabs#api)


---

## Active and Disabled

Description

<iframe src="./assets/docs/components/tabs/active-and-disabled.html"></iframe>

---

## Orientation

Description

<iframe src="./assets/docs/components/tabs/orientation.html"></iframe>

---

## Label and Icon

Description

<iframe src="./assets/docs/components/tabs/label-and-icon.html"></iframe>

---

## API

### Properties

`kor-tabs`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`orientation`** | `String` | `horizontal` | Defines the orientation of the component. Possible values are `horizontal` and `vertical` |

`kor-tab-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown above the label (if set). |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. Only one item can be active at a time. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

`kor-tabs`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts `kor-tab-item`s |