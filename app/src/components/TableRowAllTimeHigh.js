/**
 * title: TableRowAllTimeHigh.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component displays the all time highest crypto 
 * currency price in history
 */

import React from 'react';
import DateCell from './DateCell';
import NumberCell from './NumberCell';
import NameCell from './NameCell';
import pages from '../css/index.scss';


const TableRowAllTimeHigh = (props) => {
    const { highest, openLink } = props;
    highest.number = highest.num;
    highest.cat = "high";
    const crypotCurr = highest.crypotCurr;
    return (
        <div>
            <div className="cryptoRow">
                {highest.num && <NameCell nam="All Time High"    ></NameCell>}
            </div>

            <div className="cryptoRow">
                {highest.num && <DateCell dat={highest}></DateCell>}
                {highest.num && <NameCell nam={crypotCurr.name} ></NameCell>}
                {highest.num && <NumberCell number={highest} openLink={openLink} dat={highest} curr={highest.index} ></NumberCell>}
            </div>

            <div className="sepration">
            </div>
        </div>
    );
}

export default TableRowAllTimeHigh;