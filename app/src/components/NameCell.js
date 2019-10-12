/**
 * title: NameCell.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component displays the name of the crypto currency
 */
import React from 'react';
import pages from '../css/index.scss';


const NameCell = (props) => {
    const { nam } = props;
    return (<div className="cryptoColumn headerTitle"> {nam} </div>);
};

export default NameCell;