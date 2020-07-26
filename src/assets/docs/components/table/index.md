# Table

<iframe src="./assets/docs/components/table/main.html" height="480px"></iframe>

Tables are used to display large amounts of information in a concise manner which allows the user to easily scan and compare the contents.

[Columns](components/table#columns-(optional)) • [Readonly](components/table#readonly-(optional)) • [Condensed](components/table#condensed-(optional)) • [Sorting](components/table#sorting-(optional)) • [API](components/table#api)

---

## Columns (Optional)

By default, a table row contains 12 columns which can be assigned to its child table cells. For example, a cell that has 12 columns assigned to it will occupy 50% of the table's width.

In specific use cases where more or less than 24 columns are required, a custom number of columns can be defined as well.

<iframe src="./assets/docs/components/table/columns.html" height="600px" style="resize: horizontal"></iframe>

```html
<kor-card label="Default (24 cols)" style="width: 100%">
  <kor-table>
    <kor-table-row slot="header">
      <kor-table-cell head grid-cols="12">12 grid-cols</kor-table-cell>
      <kor-table-cell head grid-cols="6">6 grid-cols</kor-table-cell>
      <kor-table-cell head grid-cols="3">3 grid-cols</kor-table-cell>
      <kor-table-cell head grid-cols="3">3 grid-cols</kor-table-cell>
    </kor-table-row>
    <kor-table-row>
      <kor-table-cell grid-cols="12">12 grid-cols</kor-table-cell>
      <kor-table-cell grid-cols="6">6 grid-cols</kor-table-cell>
      <kor-table-cell grid-cols="3">3 grid-cols</kor-table-cell>
      <kor-table-cell grid-cols="3">3 grid-cols</kor-table-cell>
    </kor-table-row>
    <kor-table-row>
      <kor-table-cell grid-cols="12">12 grid-cols</kor-table-cell>
      <kor-table-cell grid-cols="6">6 grid-cols</kor-table-cell>
      <kor-table-cell grid-cols="3">3 grid-cols</kor-table-cell>
      <kor-table-cell grid-cols="3">3 grid-cols</kor-table-cell>
    </kor-table-row>
  </kor-table>
</kor-card>
<kor-card label="Custom (1fr 120px auto)" style="width: 100%">
  <kor-table columns="1fr 120px auto">
    <kor-table-row slot="header">
      <kor-table-cell head>1 grid-cols</kor-table-cell>
      <kor-table-cell head>1 grid-cols</kor-table-cell>
      <kor-table-cell head>
        <kor-icon icon="more_vert" button></kor-icon>
      </kor-table-cell>
    </kor-table-row>
    <kor-table-row>
      <kor-table-cell>1 grid-cols</kor-table-cell>
      <kor-table-cell>1 grid-cols</kor-table-cell>
      <kor-table-cell>
        <kor-icon icon="more_vert" button></kor-icon>
      </kor-table-cell>
    </kor-table-row>
    <kor-table-row>
      <kor-table-cell>1 grid-cols</kor-table-cell>
      <kor-table-cell>1 grid-cols</kor-table-cell>
      <kor-table-cell>
        <kor-icon icon="more_vert" button></kor-icon>
      </kor-table-cell>
    </kor-table-row>
  </kor-table>
</kor-card>
```

---

## Readonly (Optional)

A table can be set to be read-only if the user should passive interact with the content and not perform active interactions such as selecting table rows.

<iframe src="./assets/docs/components/table/readonly.html"></iframe>

```html
<kor-table readonly>
  <kor-table-row slot="header">
    <kor-table-cell grid-cols="12" head sortable sorted sort-direction="desc">Sortable Head A</kor-table-cell>
    <kor-table-cell grid-cols="6" head>Head B</kor-table-cell>
    <kor-table-cell grid-cols="3" head>Head C</kor-table-cell>
    <kor-table-cell grid-cols="3" head>Head D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 1A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 1B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 1C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 1D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 2A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 2B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 2C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 2D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 3A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 3B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 3C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 3D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 4A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 4B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 4C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 4D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 5A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 5B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 5C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 5D</kor-table-cell>
  </kor-table-row>
</kor-table>
```

---

## Condensed (Optional)

In cases where vertical space is scarce, tables can be set to have a condensed height, which allows more items to be shown at a time.

<iframe src="./assets/docs/components/table/condensed.html"></iframe>

```html
<kor-table condensed>
  <kor-table-row slot="header">
    <kor-table-cell grid-cols="12" head sortable sorted sort-direction="desc">Sortable Head A</kor-table-cell>
    <kor-table-cell grid-cols="6" head>Head B</kor-table-cell>
    <kor-table-cell grid-cols="3" head>Head C</kor-table-cell>
    <kor-table-cell grid-cols="3" head>Head D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 1A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 1B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 1C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 1D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 2A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 2B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 2C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 2D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 3A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 3B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 3C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 3D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 4A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 4B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 4C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 4D</kor-table-cell>
  </kor-table-row>
  <kor-table-row>
    <kor-table-cell grid-cols="12">Cell 5A</kor-table-cell>
    <kor-table-cell grid-cols="6">Cell 5B</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 5C</kor-table-cell>
    <kor-table-cell grid-cols="3">Cell 5D</kor-table-cell>
  </kor-table-row>
</kor-table>
```

---

## Sorting (Optional)

When the user clicks on a sortable table header, the data of the table can be sorted and rearranged according to the alphabetical or numerical order of entries in that column.

<iframe src="./assets/docs/components/table/sorting.html"></iframe>

```html  
<kor-card style="width: 100%">
  <kor-table condensed>
    <kor-table-row slot="header">
      <kor-table-cell grid-cols="12" head sortable sorted sort-direction="desc">Sorted Head A</kor-table-cell>
      <kor-table-cell grid-cols="6" head sortable>Sortable Head B</kor-table-cell>
      <kor-table-cell grid-cols="3" head sortable>Sortable Head C</kor-table-cell>
      <kor-table-cell grid-cols="3" head>Head D</kor-table-cell>
    </kor-table-row>
  </kor-table>
</kor-card>
```

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