
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  ColDef,
  ColGroupDef,
  Grid,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
  KeyCreatorParams,
  SetFilterValuesFuncParams,
  ValueFormatterParams,
  ValueGetterParams
} from 'ag-grid-community';
import { DataTypeDefinition } from 'ag-grid-enterprise';
import { getData } from './Data';
import { IOlympicData, IOlympicDataAlt, IOlympicWinnerData } from './Interfaces';
import remoteData from './RemoteData.json';
import { CELL_DATA_TYPE, FILTER_TYPE } from './Emuns';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
// import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
// import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { ModuleRegistry } from '@ag-grid-community/core';
// Register the required feature modules with the Grid
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  // ColumnsToolPanelModule,
  // FiltersToolPanelModule,
  // StatusBarModule,
  MenuModule
]);

interface IOlympicDataTypes extends IOlympicData {
  dateObject: Date;
  hasGold: boolean;
  hasGoldLabel: string;
  countryObject: {
    name: string;
  };
};

type TypeFilterValueLabel = {
  value: string | number | boolean;
  label: string;
};

const getFilterKey: (params: KeyCreatorParams<IOlympicDataTypes, TypeFilterValueLabel>) => string | number | boolean = params => {
  // console.log({ params });
  return params.value?.value ?? "";
};

const getFilterValue: (params: ValueFormatterParams<IOlympicDataTypes, TypeFilterValueLabel>) => string | number | boolean = params => {
  // console.log({ params });
  return params.value?.label ?? "";
};

const AgGrid = () => {
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 180,
      filter: true,
      floatingFilter: true,
      sortable: true,
      resizable: true,
      editable: true,
      menuTabs: ['filterMenuTab'],
    };
  }, []);
  const gridRef = useRef<AgGridReact<IOlympicDataTypes>>(null);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .then((resp) => resp.json())
    //   .then((data: IOlympicData[]) => setRowData(data));

    // setRowData(remoteData as IOlympicData[]);

    console.log({ params });

    setRowRemoteData(
      (remoteData as IOlympicData[]).map((rowData) => {
        const dateParts = rowData.date.split('/');

        return {
          ...rowData,
          date: `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`,
          dateObject: new Date(
            parseInt(dateParts[2]),
            parseInt(dateParts[1]) - 1,
            parseInt(dateParts[0])
          ),
          countryObject: {
            name: rowData.country,
          },
          hasGold: rowData.gold > 0,
          hasGoldLabel: rowData.gold > 0 ? "Yes" : "No",
        };
      })
    );
  }, []);

  // const onFilterChanged = useCallback(() => {
  //   var countryFilterModel = gridRef.current!.api.getFilterModel()['country'];
  //   var selected = countryFilterModel && countryFilterModel.values;
  //   if (!areEqual(selectedCountries, selected)) {
  //     selectedCountries = selected;
  //     console.log('Refreshing sports filter');
  //     var sportFilter = gridRef.current!.api.getFilterInstance<ISetFilter>(
  //       'sport'
  //     );
  //     sportFilter!.refreshFilterValues();
  //   }
  // }, [selectedCountries]);

  // const AllData = remoteData as IOlympicData[];
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<IOlympicWinnerData[]>(getData());
  // const [rowRemoteData, setRowRemoteData] = useState<IOlympicData[]>();
  const [rowRemoteData, setRowRemoteData] = useState<IOlympicDataTypes[]>();

  const [columnDefs, setColumnDefs] = useState<ColDef<IOlympicWinnerData>[]>([
    { field: 'name' },
    // Using dot notation to access nested property
    { field: 'medals.gold', headerName: 'Gold' },
    // Show default header name
    { field: 'person.age', cellDataType: CELL_DATA_TYPE.NUMBER },
    {
      field: "person.country", headerName: "Country"
    }
  ]);

  const [remoteDataColumnDefs, setRemoteDataColumnDefs] = useState<ColDef<IOlympicDataTypes>[]>([
    {
      field: 'athlete',
      filter: "agSetColumnFilter",
      filterParams: {
        values: ["Aleksey Nemov", "Alicia Coutts", "Michael Phelps"],
        // keyCreator: ["Aleksey Nemov", "Michael Phelps"],
        // valueFormatter: ["AN", "MP"],
        // comparator: countryComparator,
      },

    },
    { field: 'age', minWidth: 100 },
    {
      field: 'hasGold',
      minWidth: 100,
      headerName: 'Gold',
      filter: "agSetColumnFilter",
      filterValueGetter: (props: ValueGetterParams) => {
        // console.log({ props });
        // return props.data?.hasGold ? "YES" : "NO";
        return { value: props.data?.hasGold };
      },
      cellRenderer: (props: ICellRendererParams<IOlympicDataTypes, boolean>) => {
        // console.log({ v: props.value });

        return <>
          {/* {props.value?.toString()} */}
          {
            props.value === true
              ? "Yes"
              : props.value === false
                ? "No"
                : "..."
          }
        </>;
      },
      filterParams: {
        values: [
          { value: true, label: "Yes" },
          { value: false, label: "No" }
        ] as TypeFilterValueLabel[],
        // values: (params: SetFilterValuesFuncParams<IOlympicDataTypes, TypeFilterValueLabel>) => {
        //   params.success([
        //     {
        //       value: true,
        //       label: "Yes"
        //     }, {
        //       value: false,
        //       label: "No"
        //     }
        //   ] as TypeFilterValueLabel[]);
        // },
        keyCreator: getFilterKey,
        valueFormatter: getFilterValue,
      }
    },
    // {
    //   field: "hasGoldLabel",
    //   minWidth: 100,
    //   headerName: 'Gold',
    //   filterValueGetter: (props: ValueGetterParams<IOlympicDataTypes, boolean>) => {
    //     // console.log({ props });
    //     return props.data?.hasGold ? "yes" : "no";
    //   },
    // },
    { field: 'dateObject', headerName: 'Date' },
    { field: 'date', headerName: 'Date (String)' },
    { field: 'countryObject', headerName: 'Country' }
  ]);

  const dataTypeDefinitions = useMemo<{
    [cellDataType: string]: DataTypeDefinition;
  }>(() => {
    return {
      object: {
        baseDataType: 'object',
        extendsDataType: 'object',
        valueParser: (params) => ({ name: params.newValue }),
        valueFormatter: (params) =>
          params.value == null ? '' : params.value.name,
      },
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={{ height: '500px', boxSizing: 'border-box' }}>
        <div style={gridStyle} className="ag-theme-alpine">
          {/* <AgGridReact
            className='local-data'
            rowData={rowData}
            defaultColDef={defaultColDef}
            columnDefs={columnDefs}
            onGridReady={onGridReady}
          /> */}

          <AgGridReact
            ref={gridRef}
            className='remote-data'
            rowData={rowRemoteData}
            columnDefs={remoteDataColumnDefs}
            defaultColDef={defaultColDef}
            dataTypeDefinitions={dataTypeDefinitions}
            onGridReady={onGridReady}
            onFilterChanged={x => console.log({ x, filterModel: gridRef.current!.api.getFilterModel() })}
          />
        </div>
      </div>
    </div>
  );
};

export default AgGrid;