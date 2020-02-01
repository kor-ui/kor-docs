# Grid

[Columns](components/grid#columns) • [Rows](components/grid#rows) • [Spacing](components/grid#spacing) • [Responsive](components/grid#responsive) • [API](components/grid#api)

<iframe src="./assets/docs/components/grid/main.html" height="440px"></iframe>

Intro 

---

## Columns

Description

<iframe src="./assets/docs/components/grid/columns.html" height="440px"></iframe>

---

## Rows

Description

<iframe src="./assets/docs/components/grid/rows.html" height="440px"></iframe>

---

## Spacing

Description

<iframe src="./assets/docs/components/grid/spacing.html" height="440px"></iframe>

---

## Responsive

Description

<iframe src="./assets/docs/components/grid/responsive.html" height="440px" style="resize: horizontal"></iframe>

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