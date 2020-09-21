# Image

Icons can be used to indicate a status or action to the user in a visual manner. They are often used in other components such as [Buttons](components/button) or [Tabs](components/tabs).

[Src](<components/image#src-(required)>) • [Fit](<components/image#fit-(required)>) • [Width and Height](<components/image#width-and-height-(optional)>) • [Legend](<components/image#legend-(optional)>)

---

## Src (Required)

Lorem Ipsum

<iframe src="./assets/docs/components/image/src.html"></iframe>

```html
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  width="200px"
  height="200px"
  fit="cover"
></kor-image>
<kor-image
  src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  width="200px"
  height="200px"
  fit="cover"
></kor-image>
```

---

## Fit (Required)

Lorem Ipsum

<iframe src="./assets/docs/components/image/fit.html"></iframe>

```html
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  height="120px"
  legend="Contain"
></kor-image>
<kor-image
  fit="cover"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  height="120px"
  legend="Cover"
></kor-image>
<kor-image
  fit="fill"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  height="120px"
  legend="Fill"
></kor-image>
<kor-image
  fit="scale-down"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  height="120px"
  legend="Scale-down"
></kor-image>
<kor-image
  fit="none"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  height="120px"
  legend="None"
></kor-image>
```

---

## Legend (Optional)

Lorem Ipsum

<iframe src="./assets/docs/components/image/legend.html"></iframe>

```html
<kor-image
  legend="Default position"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
></kor-image>
<kor-image
  legend="Inner bottom"
  legend-position="inner-bottom"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
></kor-image>
<kor-image
  legend="Inner top"
  legend-position="inner-top"
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
></kor-image>
```

---

## Width and Height (Optional)

Lorem Ipsum

<iframe src="./assets/docs/components/image/width-and-height.html"></iframe>

```html

```

---

## API

### Properties

| Name                 | Type     | Default     | Description                                                                                                                                          |
| :------------------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`src`**            | `String` | _undefined_ | Defines the source image to be displayed. Must be a url (web or relative path).                                                                      |
| **`alt`**            | `String` | _undefined_ | Defines the text shown in case the image cannot be loaded.                                                                                           |
| **`width`**          | `String` | `100%`      | Defines the width of the image. Can take a numeric or percentual value.                                                                              |
| **`height`**         | `String` | _undefined_ | Defines the height of the image. Can take a numeric or percentual value.                                                                             |
| **`fit`**            | `String` | `contain`   | Defines how the image fits to the component. Possible values are `fill`, `contain`, `cover`, `none` and `scale-down`.                                |
| **`legend`**         | `String` | _undefined_ | Defines the legend text.                                                                                                                             |
| **`legendPosition`** | `String` | _undefined_ | Defines the position of the legend. Possible values are `inner-top` and `inner bottom`. If left unset, the legend is displayed underneath the image. |

### Slots

| Name         | Description                                                               |
| :----------- | :------------------------------------------------------------------------ |
| **`top`**    | The container for components overlayed at the top corner of the image.    |
| **`bottom`** | The container for components overlayed at the bottom corner of the image. |
