# Colors

All colors used in Kor components are set through CSS variables. This allows customization at a document level as well as at smaller scopes using CSS overwrites.

The standard Kor colors guarantee high levels of accessibility based on WCAG standards. When re-assigning colors for theming purposes, it is recommended to check background-foreground contrast ratios on websites such as [WebAIM](https://webaim.org/resources/contrastchecker/).

---

## Neutral colors

The neutral color is used as the key fill for lines, backgrounds and highlights. It is often used in transparent shades for indicating hierarchy and component states.

<iframe src="./assets/docs/theming/colors/neutral.html" height="480px"></iframe>

```css
body {
  /* the key color (e.g. white for dark theme, black for light theme) */
  --neutral-1: 200, 100, 200;
}
```

---

## Accent colors

The accent color is used to indicate call-to-action or highlight active states in components such as tabs, checkboxes or buttons. It should ideally have good contrast with light and dark text, and any conflict with functional colors (red, yellow, green) should be avoided.

<iframe src="./assets/docs/theming/colors/accent.html" height="480px"></iframe>

```css
body {
  /* accent color for active highlights and calls-to-action */
  --accent-1: 200, 100, 200;
  /* hover state */
  --accent-1b: 190, 90, 190;
}
```

---

## Base colors

Base colors are used in containers such as cards, panes, modals and indicate hierarchy on the Z index by their difference in shades. For themes where layering is not desired, all base colors can be set to the same RGB value, making the layers appear flat.

<iframe src="./assets/docs/theming/colors/base.html" height="520px"></iframe>

```css
body {
  --base-0: 0, 0, 2;
  /* the page background color */
  --base-1: 15, 15, 15;
  /* the pane and nav-bar background color */
  --base-2: 25, 25, 25;
  /* the card, modal, drawer background color */
  --base-3: 35, 35, 35;
  /* the notification, tooltip, popover background color */
  --base-4: 45, 45, 45;
}
```

---

## Text colors

Text content used inside and outside of Kor components are based on the 3 main text color variables. When theming text colors, special attention should be paid to background-foreground contrast ratios and accessibility guidelines.

<iframe src="./assets/docs/theming/colors/text.html" height="480px"></iframe>

```css
body {
  /* primary text */
  --text-1: rgba(255, 255, 255, 0.9);
  /* secondary text */
  --text-2: rgba(255, 255, 255, 0.6);
  /* disabled text */
  --text-3: rgba(255, 255, 255, 0.2);
}
```

---

## Functional colors

When indicating status in Kor, functional colors are used for neutral, success, error and warning variants. When theming this palette, make sure the colors are distinguishable and relatable.

<iframe src="./assets/docs/theming/colors/functional.html" height="480px"></iframe>

```css
body {
  /* the functional colors for status indications */
  --functional-blue: 20, 120, 220;
  --functional-red: 220, 40, 40;
  --functional-yellow: 220, 160, 40;
  --functional-green: 40, 160, 40;
}
```
