# Text

<iframe src="./assets/docs/components/text/main.html"></iframe>

Texts are used to display textual information on a page. Elements such as size and color can be used to define the hierarchy of elements on a page.

[Size](<components/text#size-(required)>) • [Color](<components/text#color-(required)>) • [API](components/text#api)

---

## Size (Required)

Text sizes are used mainly to define the hierarchy of components on a page. For example, headers can be used to create clusters and categories, while body text is used mostly for providing content to the user.

<iframe src="./assets/docs/components/text/size.html"></iframe>

```html
<kor-text size="header-1">Header 1</kor-text>
<kor-text size="header-2">Header 2</kor-text>
<kor-text size="body-1">Body 1</kor-text>
<kor-text size="body-2">Body 2</kor-text>
```

---

## Color (Required)

Colors can be used in conjunction with the size to indicate hierarchy of elements on a page. It can also be used to communicate that an element is disabled and therefore does not allow user interaction.

<iframe src="./assets/docs/components/text/color.html"></iframe>

```html
<kor-text size="header-1">Text 1 (90%)</kor-text>
<kor-text size="header-1" color="var(--text-2)">Text 2 (60%)</kor-text>
<kor-text size="header-1" color="var(--text-3)">Text 3 (20%)</kor-text>
<kor-text size="header-1" color="violet">Custom color</kor-text>
```

---

## API

### Properties

| Name        | Type     | Default     | Description                                                                                                                                                                                                                                                                             |
| :---------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`size`**  | `String` | `body-1`    | Defines the size, line height, font family and initial color of the text. Possible values are `header-1`, `header-2`, `body-1` and `body-1`, but custom styles can be set through css.                                                                                                  |
| **`color`** | `String` | _undefined_ | If set, overwrites the initial color of the text. Possible values are `var(--text-1)` (90% neutral color), `var(--text-2)` (60% neutral color) and `var(--text-3)` (20% neutral color), but any custom RGB, RGBA, HEX or color variable can be passed to the property as value as well. |

### Slots

| Name          | Description                                                    |
| :------------ | :------------------------------------------------------------- |
| **_unnamed_** | Container where plain text (and/or other elements) is written. |
