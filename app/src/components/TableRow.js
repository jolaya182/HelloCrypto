/**
 * title: TableRow.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component handles all the data and number cells inside the row
 */
import React from 'react';
import DateCell from './DateCell';
import NumberCell from './NumberCell';
import pages from '../css/index.scss';


const TableRow = (props) => {
    const { row, reverseDates, openLink } = props;
    const dat = row[0];
    const newRow = row.slice(1, row.length);

    return (<div className="cryptoRow">
        {row.length && <DateCell reverseDates={reverseDates} dat={dat}></DateCell>}
        {row.length && newRow.map((number, indx) =>
            <NumberCell
                openLink={openLink}
                number={number}
                key={indx}
                dat={dat}
                curr={indx + 1}
            >

            </NumberCell>)}
    </div>);
}

export default TableRow;