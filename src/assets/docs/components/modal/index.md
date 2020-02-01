# Modal

[Label and Icon](components/modal#label-and-icon) • [Sticky](components/modal#sticky) • [Slots](components/modal#slots) • [API](components/modal#api)

<iframe src="./assets/docs/components/modal/main.html" height="440px"></iframe>

Intro 

---

## Label and Icon

Description

<iframe src="./assets/docs/components/modal/label-and-icon.html" height="440px"></iframe>

---

## Sticky

Description

<iframe src="./assets/docs/components/modal/sticky.html" height="440px"></iframe>

---

## Slots

Description

<iframe src="./assets/docs/components/modal/slots.html" height="440px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`height`** | `String` | `320px` | Defines the height of the container (not the overlay). |
| **`width`** | `String` | `320px` | Defines the width of the container (not the overlay). |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |
| **`sticky`** | `Boolean` | _undefined_ | If set to `true`, clicking on the background will not hide the component. The close icon will also not be displayed. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |