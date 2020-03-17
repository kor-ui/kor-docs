# Notifications

Notifications are used to inform the user about background processes without disrupting the main workflow and taking the focus away from the task at hand.

They should not be used for critical messages that require immediate action ([Modals](component/modal) should be used in these cases), and they should also not be used for messages that are completely irrelevant for the user at that time ([Badges](component/badge) could be used alternatively).

[Position](components/notifications#position) • [Label and Icon](components/notifications#label-and-icon) • [Sticky](components/notifications#sticky) • [Slots](components/notifications#slots) • [API](components/notifications#api)

---

## Position (Required)

By default, Notifications appear on the upper-right corner of the screen. In special cases such as when content in that corner cannot be temporarily covered, the position of the Notification can be set to any of the other corners.

<iframe src="./assets/docs/components/notifications/position.html"></iframe>

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/notifications/label-and-icon.html"></iframe>

---

## Sticky

Sticky modals do not display a close icon on its' top-right corner. This variation is used in situations when the user is obliged to make a decision in order to continue, such as pressing a button or selecting an option.

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
| **`position`** | `String` | `top-right` | Defines the corner where the notification is located. Possible values are `top-left`, `top-right`, `bottom-left` and `bottom-right`. |

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