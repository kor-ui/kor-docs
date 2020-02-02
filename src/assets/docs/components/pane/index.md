# Pane

Intro

[Label and Icon](components/pane#label-and-icon) • [Slots](components/pane#slots) • [API](components/pane#api)

---

## Label and Icon

Description

<iframe src="./assets/docs/components/pane/label-and-icon.html" height="560px"></iframe>

---

## Slots

Description

<iframe src="./assets/docs/components/pane/slots.html" height="560px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`size`** | `String` | `l` | Defines the size (width) of the component. Possible values are `s` (80px), `m` (120px) and `l`(320px). |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |