# Grid

<iframe src="./assets/docs/components/grid/main.html" height="480px"></iframe>

Grids are used for organizing content within a [Page](components/page) or inside containers such as [Cards](components/card).

[Columns](components/grid#columns) • [Rows](components/grid#rows) • [Spacing](components/grid#spacing) • [Responsive](components/grid#responsive) • [API](components/grid#api)

---

## Columns (Optional)

By default, a grid contains 12 columns which can be assigned to its' child elements. For example, a child element that has 6 columns assigned will occupy 50% of the grid's width.

In specific use cases where more or less than 12 columns are required, a custom number of columns can be defined as well.

<iframe src="./assets/docs/components/grid/columns.html" height="480px"></iframe>

```html
<kor-grid>
  <kor-card label="2 Col" grid-cols="2"></kor-card>
  <kor-card label="4 Cols" grid-cols="4"></kor-card>
  <kor-card label="6 Cols" grid-cols="6"></kor-card>
  <kor-card label="12 Cols" grid-cols="12"></kor-card>
</kor-grid>
```

---

## Rows (Optional)

By default, a grid automatically calculates the amount of rows required to display all its' child elements. For example, if 24 columns are assigned to the children of a grid, it calculates that 2 rows (24 / 12 = 2) are required.

Rows can also be customized and assigned to child elements. For example, a grid can be set to have 3 rows and a child element can be assigned any quantity between 1 and 3 rows.

<iframe src="./assets/docs/components/grid/rows.html" height="480px"></iframe>

```html
<kor-grid>
  <kor-card label="1 Row" grid-cols="6" grid-rows="1"></kor-card>
  <kor-card label="3 Rows" grid-cols="6" grid-rows="3"></kor-card>
  <kor-card label="2 Rows" grid-cols="6" grid-rows="2"></kor-card>
</kor-grid>
```

---

## Spacing (Required)

By default, the child elements of a row have a space of 12px (m) between each other. This space can be set to 8px (s) or 16px (l) depending on the hierarchy and space available on a page.

<iframe src="./assets/docs/components/grid/spacing.html" height="480px"></iframe>

```html  
<kor-grid spacing="s">
  <kor-card grid-cols="2" label="Spacing S"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
</kor-grid>
<br>
<kor-grid spacing="m">
  <kor-card grid-cols="2" label="Spacing M"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
</kor-grid>
<br>
<kor-grid spacing="l">
  <kor-card grid-cols="2" label="Spacing L"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
  <kor-card grid-cols="2"></kor-card>
</kor-grid>
```

---

## Responsive (Optional)

Child elements of a grid respond to the width of the screen and adapt the amount of columns assigned to it accordingly. For example, an element can occupy 3 columns in big screens, 4 columns in medium screens and 6 columns in small screens.

<iframe src="./assets/docs/components/grid/responsive.html" height="480px" style="resize: horizontal"></iframe>

```html
<kor-grid spacing="l">
  <kor-card grid-cols="2" grid-cols-m="4" grid-cols-s="6"></kor-card>
  <kor-card grid-cols="2" grid-cols-m="4" grid-cols-s="6"></kor-card>
  <kor-card grid-cols="2" grid-cols-m="4" grid-cols-s="6"></kor-card>
  <kor-card grid-cols="2" grid-cols-m="4" grid-cols-s="6"></kor-card>
  <kor-card grid-cols="2" grid-cols-m="4" grid-cols-s="6"></kor-card>
  <kor-card grid-cols="2" grid-cols-m="4" grid-cols-s="6"></kor-card>
</kor-grid>
```

---

## API

### Properties

`kor-grid`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`columns`** | `Number` | `12` | Defines how many columns the grid has. |
| **`rows`** | `Number` | _undefined_ | If set, defines how many rows the grid has. If left _undefined_, the rows will be automatically populated according to the columns wrapping. |
| **`spacing`** | `String` | `m` | Defines the gap between the elements in the grid. Possible values are `s` (8px), `m` (12px) and `l`(16px). |

_slotted elements_

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`grid-cols`** | `Number` | _undefined_ | If set, defines how many grid columns are occupied by the element. |
| **`grid-cols-m`** | `Number` | _undefined_ | Same as above, but for medium-sized screens (< 1024px). |
| **`grid-cols-s`** | `Number` | _undefined_ | Same as above, but for medium-sized screens (< 766px). |
| **`grid-rows`** | `Number` | _undefined_ | If set, defines how many grid rows are occupied by the element. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The slot where the content is rendered. |