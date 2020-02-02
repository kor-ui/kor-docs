# Tooltip

[Label and Icon](components/tooltip#label-and-icon) • [Slots](components/tooltip#slots) • [API](components/tooltip#api)

<iframe src="./assets/docs/components/tooltip/main.html" height="480px"></iframe>

---

## Label and Icon

Description

<iframe src="./assets/docs/components/tooltip/label-and-icon.html" height="480px"></iframe>

---

## Slots

Description

<iframe src="./assets/docs/components/tooltip/slots.html" height="480px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`position`** | `String` | `left` | Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`target`** | `String` | _undefined_ | Defines the DOM element to which the mouseover event will be attached. It behaves identically to `querySelector`, which means tag names, IDs, classes and similar can be used (e.g. `#myEl`, `.myEl`, `kor-input[type='number']`). Please ensure the selector is unique. |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |