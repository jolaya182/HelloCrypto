/**
 * title: DateCell.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component display the date in each cell
 */
import React from 'react';
import pages from '../css/index.scss';


const DateCell = (props) => {
    const { dat, reverseDates } = props;
    return (<div
        className="cryptoColumn headerTitle cursorChange"
        onClick={reverseDates}
    >{dat.date}</div>);
};

export default DateCell;