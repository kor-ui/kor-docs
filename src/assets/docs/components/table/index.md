# Table

<iframe src="./assets/docs/components/table/main.html" height="480px"></iframe>

Intro

[Icon](components/table#icon) • [API](components/table#api)

---

## Columns

Description

<iframe src="./assets/docs/components/table/columns.html" height="600px" style="resize: horizontal"></iframe>

---

## Readonly

Description

<iframe src="./assets/docs/components/table/readonly.html"></iframe>

---

## Condensed

Description

<iframe src="./assets/docs/components/table/condensed.html"></iframe>

---

## Sorting

Description

<iframe src="./assets/docs/components/table/sorting.html"></iframe>

---

## API

### Properties

`kor-table`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`columns`** | `String` | `repeat(24, 1fr)` | Defines the column template. It accepts any value also accepted by the standard css [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) (e.g. `repeat(4, 1fr)`, `40px 1fr auto`) |
| **`readonly`** | `Boolean` | _undefined_ | If set to `true`, disables selection on mouse clicks and the hover effects. |
| **`condensed`** | `Boolean` | _undefined_ | If set to `true`, condensed the height of the rows and cells. |

`kor-table-row`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |

`kor-table-cell`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`grid-cols`** | `Number` | _undefined_ | Defines how many columns the cell occupies. The sum of all cells in a given row should not surpass the total number of columns in the table (which is 24 by default). |
| **`alignment`** | `String` | `left` | Defines the alignment of items inside the cell. Possible values are `left`, `center` and `right`. |
| **`head`** | `Boolean` | _undefined_ | If set to `true`, the cell will behave like a table head (use if the parent `kor-table-row` is placed on the `header` slot of the table). |
| **`sortable`** | `Boolean` | _undefined_ | (If `head` is `true`) If set to `true`, upon clicking on the cell it will toggle the `sorted` property. |
| **`sorted`** | `Boolean` | _undefined_ | (If `head` and `sortable` are `true`) If set to `true`, an arrow will be shown to indicate that the column is sorted. |
| **`sort-direction`** | `String` | _undefined_ | (If `head`, `sortable` and `sorted` are `true`) Defines the direction of sorting. Possible values are `asc` and `desc`. |

### Slots

`kor-table`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The container where the table body is rendered (`kor-table-row`s). |
| **`header`** | The container for the header (`kor-table-row`). It does not scroll with the content, but remains sticky on top. |

`kor-table-row`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts (`kor-table-cell`s). |

`kor-table-cell`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts plain text or other elements. |