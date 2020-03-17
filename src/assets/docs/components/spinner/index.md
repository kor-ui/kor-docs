# Spinner

Spinners are used to indicate a process running indeterminately. If the duration and progress of the process is known, consider using a [Progress Bar](components/progress-bar) instead.

[Icon](components/spinner#icon) • [API](components/spinner#api)

---

## Label (Optional)

If defined, a label is shown underneath the spinner. Keep labels short and descriptive of the running process.

<iframe src="./assets/docs/components/spinner/label.html" height="480px"></iframe>

---

## Size (Required)

By default, spinners are 32x32px in size, but it can be adjusted depending on the space available to be 24x24px (`s`) or 40x40px (`l`) instead.

<iframe src="./assets/docs/components/spinner/size.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`size`** | `String` | `m` | Defines the size of the component. Possible values are `s` (24px), `m` (32px) and `l` (40px). |