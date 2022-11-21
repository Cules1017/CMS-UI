import classNames from 'classnames/bind';
import styles from './TableDrag.module.scss';
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { Grid } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const cx = classNames.bind(styles);

function TableDrag() {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState([
        {
            id: '1',
            Fullname: 'John Smith',
            Name: 'Smith',
            Group: 'Admin',
            CreateDate: '18/10/2022',
            Status: 'Hoạt động',
            Operation: '',
        },
        {
            id: '2',
            Fullname: 'John Smith',
            Name: 'Smith',
            Group: 'Admin',
            CreateDate: '18/10/2022',
            Status: 'Hoạt động',
            Operation: '',
        },
        {
            id: '3',
            Fullname: 'John Smith',
            Name: 'Smith',
            Group: 'Admin',
            CreateDate: '18/10/2022',
            Status: 'Hoạt động',
            Operation: '',
        },
        {
            id: '4',
            Fullname: 'John Smith',
            Name: 'Smith',
            Group: 'Admin',
            CreateDate: '18/10/2022',
            Status: 'Hoạt động',
            Operation: '',
        },
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { headerName: 'No.', valueGetter: 'node.id', rowDrag: true },
        { field: 'Fullname', rowDrag: true },
        { field: 'Name', rowDrag: true },
        { field: 'Group', rowDrag: true },
        { field: 'CreateDate', rowDrag: true },
        { field: 'Status', rowDrag: true },
        { field: 'Operation', rowDrag: true },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1,
        };
    }, []);
    const rowClassRules = useMemo(() => {
        return {
            aqua: 'data.color == "Smith"',
            'green-row': 'data.color == "Green"',
            'blue-row': 'data.color == "Blue"',
        };
    }, []);
    var gridOptions = {};
    gridOptions.rowStyle = { background: 'rgba(0, 247, 255, 0.515)' };

    gridOptions.getRowStyle = function (params) {
        if (params.node.rowIndex % 2 === 0) {
            return { background: 'rgba(255, 0, 0, 0.411)' };
        }
    };

    const onGridReady = useCallback((params) => {}, []);
    return (
        <div className={cx('wapper', containerStyle, 'ag-theme-alpine')}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowClassRules={rowClassRules}
                rowDragManaged={true}
                animateRows={true}
                onGridReady={onGridReady}
                gridOptions={gridOptions}
            ></AgGridReact>
        </div>
    );
}

export default TableDrag;
