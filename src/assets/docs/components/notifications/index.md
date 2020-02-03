# Notifications

Intro

[Position](components/notifications#position) • [Label and Icon](components/notifications#label-and-icon) • [Sticky](components/notifications#sticky) • [Slots](components/notifications#slots) • [API](components/notifications#api)

---

## Position

Description

<iframe src="./assets/docs/components/notifications/position.html"></iframe>

---

## Label and Icon

Description

<iframe src="./assets/docs/components/notifications/label-and-icon.html"></iframe>

---

## Sticky

Description

<iframe src="./assets/docs/components/notifications/sticky.html"></iframe>

---

## Slots

Description

<iframe src="./assets/docs/components/notifications/slots.html"></iframe>

---

## API

### Properties

`kor-notifications`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`position`** | `String` | `top-right` | If set, defines the text label. |

`kor-notification-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |
| **`sticky`** | `Boolean` | _undefined_ | If set to `true`, the close icon will not be displayed. |

### Slots

`kor-notifications`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts `kor-notification-item`s. |

`kor-notification-item`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |