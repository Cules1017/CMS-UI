import React, { useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import classNames from 'classnames/bind';
import styles from './TableDrag.module.scss';
const cx = classNames.bind(styles);

function TableDrag({ columnheader = [], rowData = [] }) {
    const [columnDefs, setColumnDefs] = useState(columnheader);
    const defaultColDef = useMemo(() => {
        return {
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1,
        };
    }, []);

    const sideBar = useMemo(() => {
        return {
            toolPanels: [
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: {
                        suppressRowGroups: true,
                        suppressValues: true,
                        suppressPivots: true,
                        suppressPivotMode: true,
                        suppressColumnFilter: true,
                        suppressColumnSelectAll: true,
                        suppressColumnExpandAll: true,
                    },
                },
            ],
            defaultToolPanel: false,
        };
    }, []);
    return (
        <div className={cx('wrapper', 'ag-theme-alpine')}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowDragManaged={true}
                animateRows={true}
                sideBar={sideBar}
            ></AgGridReact>
        </div>
    );
}

export default TableDrag;
