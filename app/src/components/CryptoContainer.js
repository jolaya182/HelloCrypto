/**
 * title: CryptoContainer.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this component contains all the logic for the web application 
 */

import React from 'react';
import Table from './Table';
import TableRowAllTimeHigh from './TableRowAllTimeHigh';

import pages from '../css/index.scss';
export default class CryptoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            highest: ""
        };
    }
    componentDidMount() {
        this.fetchCryptoData();
    }

    fetchCryptoData = () => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": 'application/json; charset=utf-8',
            }
        }
        fetch("http://localhost:3000", options).
            then((response) => response.json()).
            then((json) => {
                this.setState((state, prop) => ({ highest: json.highest, tableData: json.processedData }))
            }).
            catch((error) => console.log("error: ", error));
    }

    reverseDates = () => {
        let tableData = [...this.state.tableData];
        let header = tableData[0];
        let body = tableData.slice(1, tableData.length);
        body.reverse();
        let reverseTable = [[...header], ...body];
        this.setState((state, props) => ({ tableData: reverseTable }));
    }

    openLink = (dat, curr) => {
        const currStartEnd = this.getCurrDate(dat, curr);

        const cache = {
            BTC: "bitcoin",
            ETH: "ethereum",
            LTC: "litecoin",
            BCH: "bitcoin-cash"
        }
        const url = `https://coinmarketcap.com/currencies/${cache[currStartEnd.curr]}/historical-data/?start=${currStartEnd.start}&end=${currStartEnd.end}`;
        window.open(url);

    }

    getCurrDate = (dat, curr) => {
        const tableData = [...this.state.tableData];
        const names = tableData.shift();
        const curDate = tableData.filter((d) => {
            if (d[0].date === dat.date) return true;
        });
        const curDateFound = curDate[0];
        const parsedDate = this.parseDat(
            curDateFound[0]);
        const curFound = {
            start: parsedDate,
            end: parsedDate,
            curr: names[curr].name
        };
        return curFound;
    }

    parseDat = (dat) => {
        //parse Date from 6/26/2019 to 20190626
        const splitDate = dat.date.split(/\//);
        let newDate =
            splitDate[2] +
            (splitDate[0].length < 1 ? splitDate[0] : + "0" + splitDate[0]) +
            (splitDate[1].length > 1 ? splitDate[1] : + "0" + splitDate[1]);

        return newDate;
    }

    render() {
        const { tableData, highest } = this.state;
        const { reverseDates, openLink } = this;
        return (<div >

            {tableData.length &&
                <TableRowAllTimeHigh
                    highest={highest}
                    openLink={openLink}
                ></TableRowAllTimeHigh>}

            {tableData.length &&
                <Table
                    reverseDates={reverseDates}
                    tableData={tableData}
                    highest={highest}
                    openLink={openLink}
                ></Table>}

        </div>)
    }
}