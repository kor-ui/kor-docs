# Card

Cards are used to cluster related content. It helps creating a visual separation of different sections of a page through the use of background color and shadow. Cards are usually placed inside [Grids](components/grid).

[Label and Icon](<components/card#label-and-icon-(optional)>) • [Image](<components/card#image-(optional)>) • [Flex Direction](<components/card#flex-direction-(required)>) • [Flat](<components/card#flat-(optional)>) • [Slots](components/card#slots) • [API](components/card#api)

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/card/label-and-icon.html" height="480px"></iframe>

```html
<kor-card icon="directions_bike" label="Label and Icon"></kor-card>
```

---

## Image (Optional)

If defined, an image is displayed on top of the card's content. It is usually used for cards that represent a unit such as a product, video or person.

<iframe src="./assets/docs/components/card/image.html" height="480px"></iframe>

```html
<kor-card
  image="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  label="Label"
>
  This is an image card with label.
</kor-card>
<kor-card
  image="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
>
  This is an image card without label.
</kor-card>
```

---

## Flex Direction (Required)

The contents of a card can be displayed either vertically (top to bottom) or vertically (left to right) depending on the flex direction defined.

<iframe src="./assets/docs/components/card/flex-direction.html" height="480px"></iframe>

```html
<kor-card label="Flex direction - Column">
  <kor-tag label="Tag"></kor-tag>
  <kor-tag label="Tag"></kor-tag>
</kor-card>
<kor-card label="Flex Direction - Row" flex-direction="row">
  <kor-tag label="Tag"></kor-tag>
  <kor-tag label="Tag"></kor-tag>
</kor-card>
```

---

## Flat (Optional)

A flat card does not display shadows, background color or margins around it. It is commonly used for grouping content inside another card, for example.

<iframe src="./assets/docs/components/card/flat.html" height="480px"></iframe>

```html
<kor-card flat icon="train" label="Flat Card">
  <kor-icon slot="functions" button icon="more_vert"></kor-icon>
    This is the content of my card.
  <kor-button slot="footer"></kor-button>
</kor-card>
```

---

## Slots

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/card/slots.html" height="480px"></iframe>

```html
<kor-card flat icon="train" label="Flat Card">
  <kor-icon slot="functions" button icon="more_vert"></kor-icon>
    This is the content of my card.
  <kor-button slot="footer"></kor-button>
</kor-card>
```

---

## API

### Properties

| Name                 | Type      | Default     | Description                                                                                                                             |
| :------------------- | :-------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **`label`**          | `String`  | _undefined_ | If set, defines the text label.                                                                                                         |
| **`icon`**           | `String`  | _undefined_ | If set, defines the icon shown close to the label.                                                                                      |
| **`image`**          | `String`  | _undefined_ | If set, defines the image shown on top of the card.                                                                                     |
| **`flex-direction`** | `String`  | `column`    | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`flat`**           | `Boolean` | _undefined_ | If set, background, shadows and external padding are not shown.                                                                         |

### Slots

| Name            | Description                                                |
| :-------------- | :--------------------------------------------------------- |
| **_unnamed_**   | Displayed inside the content area.                         |
| **`header`**    | Shown on top of the card, below the label (if any is set). |
| **`functions`** | Shown on the right side of the label or header slot.       |
| **`footer`**    | Shown below the content area.                              |
