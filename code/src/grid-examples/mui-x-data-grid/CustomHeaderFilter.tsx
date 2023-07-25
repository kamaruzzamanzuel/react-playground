import Box from '@mui/material/Box';
import Rating, { RatingProps } from '@mui/material/Rating';
import {
  DataGridPro,
  getGridNumericOperators,
  GridFilterInputValueProps,
} from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useImperativeHandle, useMemo, useRef } from 'react';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

function RatingInputValue(
  props: GridFilterInputValueProps & {
    headerFilterMenu: React.ReactNode;
    clearButton: React.ReactNode;
  },
) {
  const { item, applyValue, focusElementRef, headerFilterMenu, clearButton } = props;
  const ratingRef: React.Ref<any> = useRef(null);

  useImperativeHandle(focusElementRef, () => ({
    focus: () => {
      ratingRef.current
        .querySelector(`input[value="${Number(item.value) || ''}"]`)
        .focus();
    },
  }));

  const handleFilterChange: RatingProps['onChange'] = (event, newValue) => {
    applyValue({ ...item, value: newValue });
  };

  return (
    <>
      {headerFilterMenu}
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',
          pl: '10px',
          bl: '1px solid lightgrey',
        }}
      >
        <Rating
          name="custom-rating-filter-operator"
          placeholder="Filter value"
          value={Number(item.value)}
          onChange={handleFilterChange}
          precision={0.5}
          ref={ratingRef}
        />
      </Box>
      {clearButton}
    </>
  );
}

const CustomHeaderFilter = () => {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
    visibleFields: VISIBLE_FIELDS,
  });

  console.log({ data });

  const columns = useMemo(
    () =>
      data.columns.map(colDef => {
        if (colDef.field === 'rating') {
          return {
            ...colDef,
            minWidth: 200,
            filterOperators: getGridNumericOperators()
              .filter((operator) => operator.value !== 'isAnyOf')
              .map((operator) => ({
                ...operator,
                InputComponent: operator.InputComponent
                  ? RatingInputValue
                  : undefined,
              })),
          };
        }
        return colDef;
      }),
    [data.columns],
  );

  return (
    <div id="grid_2" className="mt-10" style={{ height: 800, width: '100%' }}>
      <DataGridPro {...data} columns={columns} unstable_headerFilters />
    </div>
  );
}

export default CustomHeaderFilter