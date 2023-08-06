
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
  ValueGetterParams
} from 'ag-grid-community';
import { DataTypeDefinition } from 'ag-grid-enterprise';
import { getData } from './Data';
import { IOlympicData, IOlympicWinnerData } from './Interfaces';
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
  countryObject: {
    name: string;
  };
}

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
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .then((resp) => resp.json())
    //   .then((data: IOlympicData[]) => setRowData(data));

    // setRowData(remoteData as IOlympicData[]);

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
        };
      })
    );
  }, []);

  // const AllData = remoteData as IOlympicData[];
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<IOlympicWinnerData[]>(getData());
  // const [rowRemoteData, setRowRemoteData] = useState<IOlympicData[]>();
  const [rowRemoteData, setRowRemoteData] = useState<IOlympicData[]>();

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
    { field: 'athlete' },
    { field: 'age', minWidth: 100 },
    {
      field: 'hasGold',
      minWidth: 100,
      headerName: 'Gold',
      // filter: FILTER_TYPE.TEXT,
      // floatingFilter: true,
      filterValueGetter: (props: ValueGetterParams<IOlympicDataTypes, boolean>) => {
        return props.data?.hasGold ? "yes" : "no";
      },
      cellRenderer: (props: ICellRendererParams<IOlympicDataTypes, boolean>) => {
        console.log({ props });

        return <span>
          {
            props.value === true
              ? "YES"
              : props.value === false
                ? "NO"
                : "..."
          }
        </span>;
      }
    },
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
            className='remote-data'
            rowData={rowRemoteData}
            columnDefs={remoteDataColumnDefs}
            defaultColDef={defaultColDef}
            dataTypeDefinitions={dataTypeDefinitions}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};

export default AgGrid;