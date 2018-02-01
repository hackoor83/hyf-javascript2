'use strict'

let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(num) {
    return num;
}

function addSix(x) {
    console.log(x + addSix);
}