# App Bar


<iframe src="./assets/demos/app-bar/main.html" height="200px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | Defines the text label displayed on the left side (if `mobile` is unset). |
| **`logo`** | `String` | _undefined_ | Defines the logo shown on the left side. |
| **`mobile`** | `Boolean` | _undefined_ | If set, toggles the mobile variation. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The central content area. Used for hosting components such as  [Tabs](/components/tabs). |
| **`functions`** | Displayed on the right side (if `mobile` is unset). Used for hosting components such as [Icon](/components/icon) and [Avatar](/components/avatar). |
| **`left`** | Displayed on the left side (if `mobile` is set to `true`). Used for hosting components such as [Icon](/components/icon). |
| **`right`** | Displayed on the right side (if `mobile` is set to `true`). Used for hosting components such as [Icon](/components/icon). |