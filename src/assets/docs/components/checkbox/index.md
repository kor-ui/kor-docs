# Checkbox

Checkboxes are used for selecting an option out of a list (such as in filters) or in a standalone context (such as in agreements or consents).

When multiple checkboxes are used together, they can be either mutually exclusive or allow multiple items to be selected, depending on the use case.

[Label](<components/checkbox#label-(optional)>) • [API](components/checkbox#api)

---

## Label (Optional)

If defined, the label is displayed as a text on the right side of the box. Keep labels short and descriptive of the item being selected.

<iframe src="./assets/docs/components/checkbox/label.html"></iframe>

```html
<kor-checkbox></kor-checkbox>
<kor-checkbox label="Small label"></kor-checkbox>
<kor-checkbox
  label="This is a quite long label that gets truncated because of its length"
></kor-checkbox>
```

---

## API

### Properties

| Name           | Type      | Default     | Description                                                         |
| :------------- | :-------- | :---------- | :------------------------------------------------------------------ |
| **`label`**    | `String`  | _undefined_ | If set, defines the text label.                                     |
| **`active`**   | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied.                   |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |
