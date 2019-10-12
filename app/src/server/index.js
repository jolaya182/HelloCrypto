/**
 * title: index.js
 * 
 * Date: 10/10/2019
 * 
 * author: javier olaya
 * 
 * description: this will handle the restfull api rest and will of a service api. 
 */

//call in the modules
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require("body-parser");

app.use(bodyParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const processFile = (data) => data.split(/\r?\n/);

const processHeader = (dataRy) => {
    const splitedValue = dataRy[0].split(/,/);
    const s = splitedValue.map(
        (coin, indx) => { return indx == 0 ? { date: coin } : { name: coin } }
    );
    return s;
}
const processBody = (dataRy) => {

    let newDataRy = [...dataRy];
    newDataRy.shift();

    let highest = { num: 0, crypotCurr: "" };
    const processedBody = newDataRy.map(function (row) {
        const cen = categorizeEachNumber(row, highest);
        highest = cen.highest.num > highest.num ? cen.highest : highest;
        return cen.categorized;
    });

    return { body: processedBody, highest: highest }
}

const categorizeEachNumber = (row, highest) => {
    let high = 0;
    let low = Number.POSITIVE_INFINITY;
    const splitedRow = row.split(/,/);
    const splitedLength = splitedRow.length;
    let categorizedNumbers = [];

    for (indx = 1; indx < splitedLength; indx += 1) {
        let currentNumber = splitedRow[indx];
        if (currentNumber > high) {
            high = currentNumber;
            highest = { num: high, crypotCurr: indx, date: splitedRow[0] }
        }
        if (currentNumber < low) { low = currentNumber; }
    }

    categorizedNumbers.push({ date: splitedRow[0] });

    for (indx = 1; indx < splitedLength; indx += 1) {
        let currentNumber = splitedRow[indx];
        if (currentNumber == high) { categorizedNumbers.push({ number: currentNumber, cat: "high" }) }
        else if (currentNumber == low) { categorizedNumbers.push({ number: currentNumber, cat: "low" }) }
        else { categorizedNumbers.push({ number: currentNumber, cat: "med" }) }
    }

    return { highest: highest, categorized: categorizedNumbers };

};

const jsonStringify = (objToStringify) => JSON.stringify(objToStringify);
app.get('/', (req, res, next) => {

    //read in file
    fs.readFile('./src/data/crypto-prices.csv', 'utf8', (err, data) => {
        // process file
        const dataRy = processFile(data);


        // process header
        const header = processHeader(dataRy);
        const processedBody = processBody(dataRy);
        const { highest, body } = processedBody;

        body.reverse();
        const highestCurr = header[highest.crypotCurr];
        highest.index = highest.crypotCurr;
        highest["crypotCurr"] = highestCurr;

        let headerBody = [[...header], ...body];
        const processedData = jsonStringify({ highest: highest, processedData: headerBody });
        res.send(processedData);
    })

});


// set up the server
app.listen(port, () => console.log(`listening to port ${port}`));