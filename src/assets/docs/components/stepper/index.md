# Stepper

[Orientation](components/stepper#orientation) • [Label, Info and Icon](components/stepper#label,-info-and-icon) • [API](components/stepper#api)

<iframe src="./assets/docs/components/stepper/main.html"></iframe>

---

## Orientation

Description

<iframe src="./assets/docs/components/stepper/orientation.html"></iframe>

---

## Label, Info and Icon

Description

<iframe src="./assets/docs/components/stepper/label-info-and-icon.html" height="440px"></iframe>

---

## API

### Properties

`kor-stepper`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`orientation`** | `String` | `horizontal` | Defines the orientation of the component. Possible values are `horizontal` and `vertical` |

`kor-stepper-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`info`** | `String` | _undefined_ | If set, defines the information text shown below the label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown instead of the index number. |
| **`index`** | `Number` | _set dinamically_ | Defines the index number shown inside the bubble (if `icon` is undefined). It is set dinamically by the component. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. Only one item can be active at a time. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

`kor-stepper`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts `kor-stepper-item`s |