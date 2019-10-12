/**
 * title: NumberCell.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component places the price of the crypto currency color coded
 */

import React from 'react';
import pages from '../css/index.scss';


const NumberCell = (props) => {
    const { number, openLink, dat, curr } = props;
    return (
        <div
            onClick={(e) => openLink(dat, curr)}
            className={`cryptoColumn numberCursorChange ${number.cat} headerTitle `}>
            {number.number}
        </div>
    )
}

export default NumberCell;
