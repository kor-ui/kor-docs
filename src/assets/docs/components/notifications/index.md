# Notifications

Notifications are used to inform the user about background processes without disrupting the main workflow and taking the focus away from the task at hand.

They should not be used for critical messages that require immediate action ([Modals](component/modal) should be used in these cases), and they should also not be used for messages that are completely irrelevant for the user at that time ([Badges](component/badge) could be used alternatively).

[Position](components/notifications#position) • [Label and Icon](components/notifications#label-and-icon) • [Sticky](components/notifications#sticky) • [Slots](components/notifications#slots) • [API](components/notifications#api)

---

## Position (Required)

By default, Notifications appear on the upper-right corner of the screen. In special cases such as when content in that corner cannot be temporarily covered, the position of the Notification can be set to any of the other corners.

<iframe src="./assets/docs/components/notifications/position.html"></iframe>

```html
<kor-notifications position="top-left">
  <kor-notification-item id="top-left" label="Top Left">
    This is a top-left notification.
  </kor-notification-item>
</kor-notifications>
<kor-notifications>
  <kor-notification-item id="top-right" label="Top Right" visible>
    This is a top-right notification.
  </kor-notification-item>
</kor-notifications>
<kor-notifications position="bottom-left">
  <kor-notification-item id="bottom-left" label="Bottom Left">
    This is a bottom-left notification.
  </kor-notification-item>
</kor-notifications>
<kor-notifications position="bottom-right">
  <kor-notification-item id="bottom-right" label="Bottom Right">
    This is a bottom-right notification.
  </kor-notification-item>
</kor-notifications>
```

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/notifications/label-and-icon.html"></iframe>

```html
<kor-notifications>
  <kor-notification-item id="notification-item" visible icon="directions_bike" label="Label and Icon">
    This is a notification with label and icon.
  </kor-notification-item>
</kor-notifications>
```

---

## Sticky

Sticky modals do not display a close icon on its top-right corner. This variation is used in situations when the user is obliged to make a decision in order to continue, such as pressing a button or selecting an option.

<iframe src="./assets/docs/components/notifications/sticky.html"></iframe>

```html
<kor-notifications>
  <kor-notification-item id="notification-item" visible sticky label="Sticky">
    This is a sticky notification.
    <kor-button slot="footer" color="secondary" label="Close" onclick="document.querySelector('#notification-item').visible = false"></kor-button>
  </kor-notification-item>
</kor-notifications>
```

---

## Slots

Description

<iframe src="./assets/docs/components/notifications/slots.html"></iframe>

```html
<kor-notifications>
  <kor-notification-item id="functions-and-footer" visible label="Functions and Footer">
    <kor-icon slot="functions" button icon="more_vert"></kor-icon slot="functions">
      This is a notification with content in the functions and footer slots.
    <kor-button slot="footer" color="secondary" label="Close" onclick="document.querySelector('#functions-and-footer').visible = false"></kor-button>
  </kor-notification-item>
  <kor-notification-item id="header">
    <kor-tabs slot="header">
      <kor-tab-item label="Tab 1" active></kor-tab-item>
      <kor-tab-item label="Tab 2"></kor-tab-item>
      <kor-tab-item label="Tab 3"></kor-tab-item>
    </kor-tabs>
    This is a notification with content in the header slot.
  </kor-notification-item>
</kor-notifications>
```

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