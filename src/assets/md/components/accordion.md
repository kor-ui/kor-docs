# Accordion

[Footer Slot](components/accordion#footer-slot) • [API](components/accordion#api)

Intro 

<iframe src="./assets/demos/accordion/main.html" height="440px"></iframe>

---

## Footer Slot

Description

<iframe src="./assets/demos/accordion/footer-slot.html" height="440px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | `Label` | Defines the accordion's text label. |
| **`icon`** | `String` | `Label` | If set, defines the icon shown before the label. |
| **`expanded`** | `Boolean` | `undefined` | If set to `true`, expands the accordion to display its' content. |
| **`disabled`** | `Boolean` | `undefined` | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the accordion when it is expanded. |
| **`header`** | If used, the header slot replaces the default text label and expand arrow with custom content. |
| **`functions`** | Displayed close to the 'expand' arrow. |
| **`footer`** | Displayed below the content when it is expanded |