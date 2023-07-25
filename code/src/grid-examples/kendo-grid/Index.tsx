import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridDataStateChangeEvent,
  GridCellProps,
  GridColumnMenuProps,
  GridColumnMenuCheckboxFilter,
  GridFilterCellProps,
} from "@progress/kendo-react-grid";
import { process, State } from "@progress/kendo-data-query";
import '@progress/kendo-theme-default/dist/all.css';

import products from "./products.json";
import { DropdownFilterCell } from "./DropdownFilterCell";
import { DropdownFilterCellDefault } from "./DropdownFilterCellDefault";

const initialDataState: State = {
  sort: [{ field: "code", dir: "asc" }],
  take: 10,
  skip: 0,
};

const Index = () => {
  const [dataState, setDataState] = React.useState<State>(initialDataState);

  const dataStateChange = (e: GridDataStateChangeEvent) => {
    console.log(({ e, dataset: e.dataState }))
    setDataState(e.dataState);
  };

  const dataDiscontinuedTextChange = (e: React.BaseSyntheticEvent) => {
    console.log((e.target.value));

    setDataState(dataState => {
      const newState = {
        ...dataState,
        filter: {
          ...dataState.filter ?? { logic: "or" },
          filters: [
            ...dataState.filter?.filters ?? [],
            {
              field: "Discontinued",
              operator: "eq",
              value: e.target.value === "true"
                ? true
                : e.target.value === "false"
                  ? false
                  : null
            }
          ]
        }
      };
      console.log({ newState });

      return newState;
    })
    // setDataState(e.dataState);
  };

  const categories: string[] = Array.from(
    new Set(
      products.map((p) =>
        p.Category ? p.Category.CategoryName : ""
      )
    )
  );

  const CategoryFilterCell: any = (props: GridFilterCellProps) => (
    <DropdownFilterCellDefault
      {...props}
      data={categories}
      defaultItem={"Select category"}
    />
  );

  const ColumnMenuCheckboxFilter = (props: GridColumnMenuProps) => {
    return (
      <div>
        <GridColumnMenuCheckboxFilter {...props} data={products} expanded={true} />
      </div>
    );
  }

  return (
    <Grid
      pageable={true}
      sortable={true}
      filterable={true}
      style={{ height: "400px" }}
      data={process(products, dataState)}
      {...dataState}
      onDataStateChange={dataStateChange}
    >
      <Column field="ProductID" title="ID" width="80px" filterable={false} />
      <Column field="ProductName" title="Name" width="250px" />
      <Column
        field="Category.CategoryName"
        title="Category Name"
        filterCell={CategoryFilterCell}

        columnMenu={ColumnMenuCheckboxFilter}
      />
      <Column field="UnitPrice" title="Price" filter="numeric" width="150px" />
      <Column
        field="UnitsInStock"
        title="In stock"
        filter="numeric"
        width="150px"
      />
      <Column
        field="Discontinued"
        filter="boolean"
        cell={(props: GridCellProps) => {
          // console.log({ props });

          return (
            <td>
              <input
                disabled={true}
                type="checkbox"
                checked={props.dataItem[props.field || ""]}
              />
            </td>
          )
        }}
      />
      <Column
        field="Discontinued"
        filter="text"
        filterCell={(props: GridFilterCellProps) => {
          console.log(props);


          return <DropdownFilterCell
            {...props}
            data={products}
            options={[{ text: "YES", value: true }, { text: "NO", value: false }]}
            defaultItem={{ text: "Select...", value: null }}
          />

          // return <div>
          //   <select onChange={dataDiscontinuedTextChange}>
          //     <option value={""}>...</option>
          //     <option value={"true"}>Yes</option>
          //     <option value={"false"}>No</option>
          //   </select>
          // </div>
        }}
        width="150px"

        cell={(props: GridCellProps) => {
          // console.log({ props });

          return (
            <td>{props.dataItem["DiscontinuedText"]}</td>
          )
        }}
      />
    </Grid>
  );
}

export default Index