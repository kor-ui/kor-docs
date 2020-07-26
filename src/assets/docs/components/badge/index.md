# Badge

Badges are used to indicate status or quantity related to another component such as a [Card](components/card) or [Table](components/table) row.

[Label](components/badge#label-(optional)) • [Status](components/badge#status-(optional)) • [API](components/badge#api)

---

## Label (Optional)

If defined, a number is displayed inside the badge to indicate quantitative information related to the attached component (e.g. 20 new items).

<iframe src="./assets/docs/components/badge/label.html"></iframe>

```html
<kor-badge label="1"></kor-badge>
<kor-badge label="13"></kor-badge>
<kor-badge label="130"></kor-badge>
<kor-badge label="1300"></kor-badge>
```

---

## Status (Optional)

If defined, a status (Success, Warning or Error) is indicated through the use of iconography and color. If both label and status are defined, the label will not be displayed.

<iframe src="./assets/docs/components/badge/status.html"></iframe>

```html
<kor-badge status="error"></kor-badge>
<kor-badge status="warning"></kor-badge>
<kor-badge status="success"></kor-badge>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `Number` | _undefined_ | If set, degines the number shown inside the badge. Numbers bigger than 3 digits are shown as `999+`. |
| **`status`** | `String` | _undefined_ | If set, a status icon is shown inside the badge. Accepted values are `error`, `warning`, `success`. |
