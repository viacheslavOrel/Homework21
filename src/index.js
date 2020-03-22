'use strict';

function getKeys(obj) {
    const arr = [];

    for(const key in obj) {
        if (obj.propertyIsEnumerable(key)) arr.push(key);
    }

    return arr;
}

function getValues(obj) {
    const arr = [];

    for(const key in obj) {
        if (obj.propertyIsEnumerable(key)) arr.push(obj[key]);
    }

    return arr;
}

function getEntries(obj) {
    const arr = [];

    for(const key in obj) {
        if (obj.propertyIsEnumerable(key)) arr.push([key, obj[key]]);
    }

    return arr;
}

const testObj = {
    name: 'Brendan',
    surname: 'Eich',
    byear: 1961,
    company: 'Netscape'
};

console.log('Object.keys: ', Object.keys(testObj));
console.log('getKeys: ', getKeys(testObj));

console.log('Object.values: ', Object.values(testObj));
console.log('getValues: ', getValues(testObj));

console.log('Object.entries: ', Object.entries(testObj));
console.log('getEntries: ', getEntries(testObj));

function getX (y) {
    const findX = (startValue, endValue) => {
        const middleValue = Math.round((endValue - startValue) / 2) + startValue;
        const condition = middleValue ** 2 + middleValue;

        if (condition === y) return middleValue;
        else return condition < y ? findX(middleValue, endValue) : findX(startValue, middleValue);
    };

    return `x**2 + x = ${y};\nx = ${findX(0, Math.round(Math.sqrt(y)))}`;
}

console.log(getX(110));