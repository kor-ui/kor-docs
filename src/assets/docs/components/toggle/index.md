# Toggle

Toggles are used to turn a functionality ON or OFF. It should not be used in mutually exclusive groups, for these cases consider using [Radio Buttons](components/radio-button) instead.

[Label](components/toggle#label) • [API](components/toggle#api)

---

## Label (Required)

The label of a Toggled describes the funcionality being toggle. Keep labels short and descriptive of the functionality represented.

<iframe src="./assets/docs/components/toggle/label.html"></iframe>

```html
<kor-toggle></kor-toggle>
<kor-toggle label="Small label"></kor-toggle>
<kor-toggle label="This is a quite long label that gets truncated because of its length"></kor-toggle>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |