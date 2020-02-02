# App Bar

[Mobile](components/app-bar#mobile) • [Label](components/app-bar#label) • [Logo](components/app-bar#logo) • [API](components/app-bar#api)

Intro

---

## Label

Description

<iframe src="./assets/docs/components/app-bar/label.html" height="200px"></iframe>

---

## Logo

Description

<iframe src="./assets/docs/components/app-bar/logo.html" height="200px"></iframe>

---

## Mobile

Description

<iframe src="./assets/docs/components/app-bar/mobile.html" height="200px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown on the left side (if `mobile` is unset). |
| **`logo`** | `String` | _undefined_ | If set, defines the logo shown on the left side. |
| **`mobile`** | `Boolean` | _undefined_ | If set, toggles the mobile variation. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The central content area. Used for hosting components such as  [Tabs](/components/tabs). |
| **`functions`** | Displayed on the right side (if `mobile` is unset). Used for hosting components such as [Icon](/components/icon) and [Avatar](/components/avatar). |
| **`left`** | Displayed on the left side (if `mobile` is set to `true`). Used for hosting components such as [Icon](/components/icon). |
| **`right`** | Displayed on the right side (if `mobile` is set to `true`). Used for hosting components such as [Icon](/components/icon). |