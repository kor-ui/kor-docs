# Custom Themes

Kor comes with 2 standard themes: `light` and `dark`. If necessary for branding purposes, additional themes can be created and/or the standard ones can be tweaked.

Because the color system in **Kor** is based on opacities, only a few base and/or accent colors would have to be switched in order to define a new and coherent theme.

<iframe src="./assets/docs/introduction/custom-themes/custom.html" height="640px"></iframe>

---

Theming affects the components by changing **colors** and/or **fonts**. To do it, simply define the css variables in your app. It is not recommended modifying the `kor-styles.css` file directly, since this would corrupt the library and affect future upgrades.

```css
/* use an asterisk to allow any element to use the theme attribute. give it any name you wish */
*[theme="custom-name"] {
  /* the negative color (e.g. white for light theme) */
  --neutral-1: 255, 255, 255; ;
  /* the positive color (e.g. black for dark theme) */
  --neutral-2: 0, 0, 0;
  /* the accent color in idle states (blue by default) */
  --accent-1: 60, 100, 240;
  /* the accent color in hover states */
  --accent-1b: 70, 110, 250;
  /* the accent color in press states */
  --accent-1c: 50, 90, 230;
  /* the app-bar background color */
  --base-0: 0, 0, 2;
  /* the page background color */
  --base-1: 15, 15, 15;
  /* the pane and nav-bar background color */
  --base-2: 25, 25, 25;
  /* the card, modal, drawer background color */
  --base-3: 35, 35, 35;
  /* the notification, tooltip, popover background color */
  --base-4: 45, 45, 45;
  /* the functional colors for status indications */
  --functional-blue: 20, 120, 220;
  --functional-red: 220, 40, 40;
  --functional-yellow: 220, 160, 40;
  --functional-green: 40, 160, 40;
  /* the text colors */
  --text-1: rgba(255, 255, 255, .90);
  --text-2: rgba(255, 255, 255, .60);
  --text-3: rgba(255, 255, 255, .20);
  /* the shadow definitions for card, app-bar, nav-bar, pane, etc. */
  --shadow-1: 0 2px 8px rgba(0,0,0,.2), 0 1px 4px rgba(0,0,0,.15);
}

/* define the font variables globally */
html, body {
  /* it is not recommended modifying sizes or weight, but the font family can be replaced with any other */
  --body-1: normal 14px/24px 'open-sans';
  --body-2: normal 12px/16px 'open-sans';
  --header-1: bold 16px/24px 'open-sans';
  --header-2: bold 14px/24px 'open-sans';
}
```

After the theme has been defined through css, it can be called in the app through html class names.

```html
<!-- it is recommended setting themes in a high level, such as the html tag -->
<html theme="custom-name"></html>
<!-- or -->
<body theme="custom-name"></body>
<!-- or -->
<kor-page theme="custom-name"></kor-page>
```