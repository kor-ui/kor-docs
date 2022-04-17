# Empty State

Empty States are used as placeholders for content that are either unavailable or do not exist yet.

[Label and Icon](<components/empty-state#label-and-icon-(optional)>) • [Footer Slot](<components/empty-state#footer-slot-(optional)>) • [API](components/empty-state#api)

---

## Label and Icon (Optional)

Either a label or an icon should be defined to describe the content being represented by the Empty State.

If both label and icon are defined, the icon is displayed above the label.

<iframe src="./assets/docs/components/empty-state/label-and-icon.html"></iframe>

```html
<kor-empty-state label="Label only"></kor-empty-state>
<kor-empty-state icon="wifi"></kor-empty-state>
<kor-empty-state label="Label and Icon" icon="wifi"></kor-empty-state>
```

---

## Footer Slot (Optional)

The footer slot can be used to host actions that would provide the user with a resolution to the cause of showing the Empty State.

For example, if data is unavailable because the network is down, a 'Reconnect' or 'Try Again' button could be placed in the footer slot.

<iframe src="./assets/docs/components/empty-state/footer-slot.html"></iframe>

```html
<kor-empty-state label="Network unavailable, please try again" icon="wifi">
  <kor-button slot="footer" label="Try Again"></kor-button>
</kor-empty-state>
```

---

## API

### Properties

| Name        | Type     | Default     | Description                                          |
| :---------- | :------- | :---------- | :--------------------------------------------------- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown under the icon. |
| **`icon`**  | `String` | _undefined_ | If set, defines the icon shown above the label.      |

### Slots

| Name         | Description                |
| :----------- | :------------------------- |
| **`footer`** | Displayed below the label. |

### CSS Properties

| Name             | Description                                            |
| :--------------- | :----------------------------------------------------- |
| **--footer-gap** | Defines the gap between elements in the `footer` slot. |
