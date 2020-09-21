# Image

Icons can be used to indicate a status or action to the user in a visual manner. They are often used in other components such as [Buttons](components/button) or [Tabs](components/tabs).

[Src](<components/image#src-(required)>) • [Legend](<components/image#legend-(optional)>) • [Width and Height](<components/image#width-and-height-(optional)>) • [Fit](<components/image#fit-(required)>) • [Slots](<components/image#slots-(optional)>)

---

## Src (Required)

The source string defines which image will be shown. It should point to the absolute or relative path of the image, or alternatively contain the base64 encoded string. It supports any kind of image extension, such as `jpeg`, `png`, `gif`, `svg`, etc.

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

## Legend (Optional)

If defined, a legend will be shown under the image. Alternatively, the legend position can be set to `inner-top` or `inner-bottom` to overlay the legend text on top of the image, in this case a gradient overlay will appear to increase contrast.

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

Any value can be given to the height and/or width of the image (e.g. `200px`, `20%` or `auto`). If only width is given and height is left undefined, the image will adjust itself according to the ratio of the src image, and vice versa.

<iframe src="./assets/docs/components/image/width-and-height.html"></iframe>

```html
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  width="200px"
  height="100px"
  legend="Width 200px, Height 100px"
  fit="cover"
></kor-image>
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  width="200px"
  legend="Width 200px, Height auto"
  fit="cover"
></kor-image>
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  width="auto"
  height="160px"
  legend="Width auto, Height 160px"
  fit="cover"
></kor-image>
```

---

## Fit (Required)

If the height and width of the image component do not match exactly the dimentions and ratio of the src image, different fit styles can be used to define how the image adapts to the container.

The `contain` fit will ensure the image is shown entirely and possibly have some empty space.

The `cover` fit will ensure the entire area is covered while keeping the image ratio and hiding the least amount of information.

The `fill` fit will ensure the entire area is covered and the image is shown entirely, which may cause the proportions to become distorted

The `scale-down` fit scales the image as if `none` or `contain` were specified, whichever would result in a smaller concrete image size.

The `none` fit will ensure zoom factor is kept as in the original image, which may cause parts of the image to be hidden or parts of the area to be empty.

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

## Slots (Optional)

The **top** slot can be used for placing components overlayed on the top corner of the image. Use this slot especially when the legend is shown on the inner-bottom corner.

The **bottom** slot can be used for placing components overlayed on the bottom corner of the image.

<iframe src="./assets/docs/components/image/slots.html"></iframe>

```html
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  width="200px"
  height="200px"
  legend="Top slot"
  fit="cover"
>
  <kor-icon slot="top" icon="save" color="rgb(var(--neutral-2))"></kor-icon>
</kor-image>
<kor-image
  src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg"
  width="200px"
  height="200px"
  legend="Bottom slot"
  fit="cover"
>
  <kor-icon slot="bottom" icon="save" color="rgb(var(--neutral-2))"></kor-icon>
</kor-image>
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
