# Accordion

Intro 

- [Footer Slot](components/accordion#footer-slot)
- [API](components/accordion#api)

<iframe src="./assets/demos/accordion/main.html" height="440px"></iframe>

```html
  <!-- idle -->
  <wa-accordion label="Idle">
    <wa-checkbox label="Label" active></wa-checkbox>
    <wa-checkbox label="Label"></wa-checkbox>
    <wa-checkbox label="Label"></wa-checkbox>
  </wa-accordion>
  <!-- expanded -->
  <wa-accordion label="Expanded" expanded>
    <wa-checkbox label="Label" active></wa-checkbox>
    <wa-checkbox label="Label"></wa-checkbox>
    <wa-checkbox label="Label"></wa-checkbox>
  </wa-accordion>
  <!-- disabled -->
  <wa-accordion label="Disabled" disabled></wa-accordion>
```

---

## Footer Slot

<iframe src="./assets/demos/accordion/footer-slot.html" height="440px"></iframe>

```html
  <wa-accordion label="Name" expanded>
    <wa-input label="First" value="John"></wa-input>
    <wa-input label="Middle"></wa-input>
    <wa-input label="Last" value="Doe"></wa-input>
    <!-- footer slot -->
    <wa-button slot="footer" label="Reset"></wa-button>
  </wa-accordion>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | `Label` | Defines the accordion's text label. |
| **`icon`** | `String` | `Label` | If set, defines the icon shown before the label. |
| **`expanded`** | `Boolean` | `undefined` | If set to `true`, expands the accordion to display its' content. |
| **`disabled`** | `Boolean` | `undefined` | If set to `true`, disabled mouse clicks and the style gets updated. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the accordion when it is expanded. |
| **`header`** | If used, the header slot replaces the default text label and expand arrow with custom content. |
| **`functions`** | Displayed close to the 'expand' arrow. |
| **`footer`** | Displayed below the content when it is expanded |