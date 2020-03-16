# Checkbox

Checkboxes are used for selecting an option out of a list (such as in filters) or in a standalone context (such as in agreements or consents).

When multiple checkboxes are used together, they can be either mutually exclusive or allow multiple items to be selected, depending on the use case.

[Label](components/checkbox#label) • [API](components/checkbox#api)

---

## Label (Optional)

If defined, the label is displayed as a text on the right side of the box. Keep labels short and descriptive of the item being selected.

<iframe src="./assets/docs/components/checkbox/label.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |