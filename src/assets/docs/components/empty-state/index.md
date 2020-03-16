# Empty State

Empty States are used as placeholders for content that are either unavailable or do not exist yet.

[Label and Icon](components/empty-state#label-and-icon) • [Footer Slot](components/empty-state#footer-slot) • [API](components/empty-state#api)

---

## Label and Icon (Optional)

Either a label or an icon should be defined to describe the content being represented by the Empty State.

If both label and icon are defined, the icon is displayed above the label.

<iframe src="./assets/docs/components/empty-state/label-and-icon.html"></iframe>

---

## Footer Slot (Optional)

The footer slot can be used to host actions that would help the user to populate the content being represented by the Empty State.

For example, if data is unavailable because the network is down, a 'Reconnect' or 'Try Again' button could be placed in the footer slot.

<iframe src="./assets/docs/components/empty-state/footer-slot.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown under the icon. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown above the label. |

### Slots

| Name | Description |
| :-- | :-- |
| **`footer`** | Displayed below the label. |