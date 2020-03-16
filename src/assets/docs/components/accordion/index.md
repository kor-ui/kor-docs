# Accordion

Accordions are containers used for categorizing components such as [Inputs](components/input) or plain [Text](components/text). Because of its' ability to collapse and expand its' content, Accordions can be used to unclutter an UI by being collapsed by default or giving the user the ability to hide content that he/she doesn't find relevant at a time.

[Footer Slot](components/accordion#footer-slot) • [API](components/accordion#api)

---

## Footer Slot (Optional)

The footer slot is located at a stable position at the bottom of the Accordion and can host components such as [Buttons](components/button) and [Icons](components/icon). Its' usage is optional and intended for hosting actions related to the content of the entire accordion (e.g. 'More', 'Reset', 'Details') and not to one individual item.

<iframe src="./assets/docs/components/accordion/footer-slot.html" height="480px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | `Label` | Defines the text label. |
| **`icon`** | `String` | `Label` | If set, defines the icon shown before the label. |
| **`expanded`** | `Boolean` | _undefined_ | If set to `true`, expands the accordion to display its' content. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the accordion when it is expanded. |
| **`header`** | If used, the header slot replaces the default text label and expand arrow with custom content. |
| **`functions`** | Displayed close to the 'expand' arrow. |
| **`footer`** | Displayed below the content when it is expanded |