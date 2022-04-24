# Shadows

Shadows are used to create visual hierarchy in user interfaces. They are applied to containers such as [Card](components/card), [App bar](components/app-bar), [Modal](components/modal) and [Drawer](components/drawer) to make it stand out from the background layer.

Using css properties, shadows can be modified or removed completely for theming purposes.

---

## Changing shadow color and size

Kor uses the css [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) property to style the components.

The default value, as shown below, represents from left to right:

```css
* {
  --shadow-1: 1px -1px 1px 1px rgba(0, 0, 0, 0.2);
}
```

- `1px` X offset
- `-1px` Y offset
- `1px` blur radius
- `1px` spread radius
- `rgba(0, 0, 0, 0.2)` color

As shown in the following demo, any of the properties can be modified to change the angle, size, intensity and color of the shadows

<iframe src="./assets/docs/theming/shadows/color-size.html" height="480px"></iframe>

```css
* {
  --shadow-1: 0px 2px 8px 4px rgba(25, 0, 100, 0.2);
}
```

---

## Using outlines instead of shadows

Defining th blur radius as `0` on the shadow definitions results in an outline effect that can be used for theming purposes. The thickness of the outline can be customized using the spread radius value.

To avoid overlapping when using outlines, solid colors are preferred over rgba() values.

<iframe src="./assets/docs/theming/shadows/outline.html" height="480px"></iframe>

```css
* {
  --shadow-1: 0px 0px 0px 2px #aaaaaa;
}
```

---

## Using multiple shadows

Multiple shadows can be specified in sequence to create unique effects. For example, a thin outline can be used to delineate containers while a smooth shadowd is used for giving it depth and sense of elevation.

<iframe src="./assets/docs/theming/shadows/multiple.html" height="480px"></iframe>

```css
* {
  --shadow-1: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 2px 4px 12px 8px rgba(0, 0, 0, 0.1);
}
```

---

## Removing shadows

In themes where a flat hierarchy is desired, shadows can be removed by setting it to `none`.

<iframe src="./assets/docs/theming/shadows/remove.html" height="480px"></iframe>

```css
* {
  --shadow-1: none;
}
```
