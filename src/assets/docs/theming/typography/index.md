# Typography

For theming purposes, different aspects of typography can be modified, such as font family, font size and color.

When dealing with type, make sure adequate size and color contrast are used to enhance the legibility and accessibility of your webpage or web app.

Typography is defined in Kor using the css [`font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font) property as shown below, which represents (from left to right):

```css
body {
  --body-1: normal 14px/24px "open-sans";
}
```

- `normal` font weight.
- `14px` font size.
- `24px` line height.
- `open-sans` font family.

---

## Font family

Kor uses `open-sans` as the default font family for both header and body text. For theming purposes, other families can be assigned to all styles or to specific styles only (e.g., heading or body).

Font families can be loaded from google fonts, application assets or use the default system fonts.

<iframe src="./assets/docs/theming/typography/font-family.html" height="480px"></iframe>

```css
body {
  /* change both header and body font families */
  .left {
    --header-1: bold 16px/24px "Roboto Mono";
    --header-2: bold 14px/24px "Roboto Mono";
    --body-1: bold 14px/24px "Roboto Mono";
    --body-2: bold 12px/16px "Roboto Mono";
  }
  .right {
    /* change only header font families */
    --header-1: bold 16px/24px "Archivo Black";
    --header-2: bold 14px/24px "Archivo Black";
  }
}
```

---

## Size

The size of fonts and respective line heights can be defined for all font styles. This is especially useful when switching to a font family with larger or smaller visual appearance.

When increasing font sizes, the size dedicated to them inside components should be considered to avoid clipping or overflowing texts.

Decreasing font sizes is not recommended in case it affects the legibility of text.

<iframe src="./assets/docs/theming/typography/size.html" height="480px"></iframe>

```css
body {
  --header-1: bold 18px/24px "open-sans";
  --header-2: bold 16px/24px "open-sans";
  --body-1: normal 16px/24px "open-sans";
  --body-2: normal 14px/16px "open-sans";
}
```
