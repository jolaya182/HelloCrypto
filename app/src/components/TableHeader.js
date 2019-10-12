/**
 * title: TableHeader.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component handles the table header 
 */

import React from 'react';
import DateCell from './DateCell';
import NameCell from './NameCell';
import pages from '../css/index.scss';


const TableHeader = (props) => {
    const { header } = props;
    const dat = header[0];
    const newRow = header.slice(1, header.length);

    return (<div className="cryptoRow">
        {header.length && <DateCell dat={dat}></DateCell>}
        {
            newRow.length && newRow.map((nam, indx) =>
                <NameCell nam={nam.name} key={indx}></NameCell>
            )
        }

    </div>);
}
export default TableHeader;