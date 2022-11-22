import React, { useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import classNames from 'classnames/bind';
import styles from './TableDrag.module.scss';
import { userInFo } from '~/routes';
const cx = classNames.bind(styles);

function TableDrag({ columnheader = [], small = false }) {
    // const columnDefs = [
    //     { field: 'ID', headerClass: cx('table__header'), rowDrag: true },
    //     { field: 'Fullname', headerClass: cx('table__header'), rowDrag: true },
    //     { field: 'Name', headerClass: cx('table__header'), rowDrag: true },
    //     { field: 'Group', headerClass: cx('table__header'), rowDrag: true },
    //     { field: 'CreateDate', headerClass: cx('table__header'), rowDrag: true },
    //     { field: 'Status', headerClass: cx('table__header'), rowDrag: true },
    //     { field: 'Operation', headerClass: cx('table__header'), rowDrag: true },
    // ];
    const [columnDefs, setColumnDefs] = useState(columnheader);
    const defaultColDef = useMemo(() => {
        return {
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1,
        };
    }, []);

    return (
        <div className={cx('wrapper', 'ag-theme-alpine', { small })}>
            <AgGridReact
                rowData={userInFo}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowDragManaged={true}
                animateRows={true}
            ></AgGridReact>
        </div>
    );
}

export default TableDrag;
