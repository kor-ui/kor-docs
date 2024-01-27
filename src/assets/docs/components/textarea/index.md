# Textarea

Text areas are used for entering a large amount of text through a keyboard.

[Rows](<components/textarea#rows-(required)>) • [Disabled and Readonly](<components/textarea#disabled-and-readonly-(optional)>) • [API](components/textarea#api)

---

## Rows (Required)

Depending on the amount of text expected to be entered by the user, the text area can have the number of rows modified to avoid scrolling.

If the user enters more text than fits in the pre-defined rows, the content will be scrollable.

Avoid using more rows than required, as this would result in unnecessary empty space on the user interface.

<iframe src="./assets/docs/components/textarea/rows.html" height="640px"></iframe>

```html
<kor-textarea label="1 Row (default)" value="Lorem ipsum dolor sit amet"></kor-textarea>
<kor-textarea label="4 Rows" rows="4" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu interdum dui, ut dignissim nisi. Praesent varius ornare sollicitudin. Nunc quis scelerisque felis."></kor-textarea>
```

---

## Disabled and Readonly (Optional)

If a text area is not intended to be edited by the user, they can be set to be disabled or read-only.

- **Disabled** inputs are used when the user can do something to enable editing.
- **Readonly** inputs are used when the value should be read by the user but not necessarily edited.

<iframe src="./assets/docs/components/textarea/disabled-and-readonly.html" height="480px"></iframe>

```html
<kor-textarea rows="2" label="Disabled" disabled></kor-textarea>
<kor-textarea rows="2" label="Disabled" value="Value" disabled></kor-textarea>
<kor-textarea rows="2" label="Readonly" readonly></kor-textarea>
<kor-textarea rows="2" label="Readonly" value="Value" readonly></kor-textarea>
```

---

## API

### Properties

| Name             | Type      | Default     | Description                                                             |
| :--------------- | :-------- | :---------- | :---------------------------------------------------------------------- |
| **`label`**      | `String`  | _undefined_ | If set, defines the text label shown on top.                            |
| **`value`**      | `String`  | _undefined_ | If set, defines the value of the input. Changes upon user interaction.  |
| **`rows`**       | `Number`  | `1`         | Defines the visible number of lines in a text area.                     |
| **`max-length`** | `Number`  | _undefined_ | Defines the maximum number of characters allowed in the text area.      |
| **`active`**     | `Boolean` | _undefined_ | If set to `true`, highlights the label and underline.                   |
| **`disabled`**   | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated.     |
| **`readonly`**   | `Boolean` | _undefined_ | If set to `true`, disables the input without reducing the opacity.      |
| **`autofocus`**  | `Boolean` | _undefined_ | If set to `true`, the component gets focused as soon as the page loads. |
