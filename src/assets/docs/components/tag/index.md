# Tag

Tags are used to categorize content in a page. It is commonly used in conjunction with [Tables](components/table)

[Label and Icon](<components/tag#label-(required)-and-icon-(optional)>) • [Removable](<components/tag#removable-(optional)>) • [Button](<components/tag#button-(optional)>) • [API](components/tag#api)

---

## Label (Required) and Icon (Optional)

The label is shown inside the tag and is the main element to describe the category to the user. Keep labels short and descriptive of the category represented.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/tag/label-and-icon.html"></iframe>

```html
<kor-tag label="Label"></kor-tag>
<kor-tag label="Label and icon" icon="train"></kor-tag>
```

---

## Removable (Optional)

In special use cases such as when used for applying filters, Tags can be removed by the user upon clicking on the close icon shown at its right side.

<iframe src="./assets/docs/components/tag/removable.html"></iframe>

```html
<kor-tag label="Removable" removable></kor-tag>
<kor-tag label="Removable" icon="train" removable></kor-tag>
```

---

## Button (Optional)

If a Tag is used in its button variation, the user can click on it for navigating or seeing more details regarding that category.

<iframe src="./assets/docs/components/tag/button.html"></iframe>

```html
<kor-tag label="Button" button></kor-tag>
<kor-tag label="Button" icon="train" button></kor-tag>
```

---

## API

### Properties

| Name            | Type      | Default     | Description                                                                              |
| :-------------- | :-------- | :---------- | :--------------------------------------------------------------------------------------- |
| **`label`**     | `String`  | _undefined_ | If set, defines the text label.                                                          |
| **`icon`**      | `String`  | _undefined_ | If set, defines the icon shown besides the label.                                        |
| **`button`**    | `Boolean` | _undefined_ | If set to `true`, hover and click effects will be added.                                 |
| **`removable`** | `Boolean` | _undefined_ | If set to `true`, a close icon is displayed. Clicking on it dispatches a `remove` event. |

### Events

| Name         | Description                                                    |
| :----------- | :------------------------------------------------------------- |
| **`remove`** | Dispatched when clicking on the close icon (`removable` only). |
