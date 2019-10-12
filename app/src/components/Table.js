/**
 * title: Table.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component handles all rows for the crypto currency 
 */
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import NameCell from './NameCell';
import pages from '../css/index.scss';


const Table = (props) => {
    const { tableData, reverseDates, openLink } = props;
    const header = tableData[0];
    const newRows = tableData.slice(1, tableData.length);
    return (<div className="cryptoColumn">
        {tableData.length && <NameCell nam="Data History" ></NameCell>}
        {tableData.length && <TableHeader header={header}></TableHeader>}
        {tableData.length && newRows.map((newRow, indx) =>
            <TableRow
                reverseDates={reverseDates}
                row={newRow}
                key={indx}
                openLink={openLink}
            >
            </TableRow>)}
    </div>);
}
export default Table;