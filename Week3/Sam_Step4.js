'use strict'

//Point No. 1:
function foo(func) {
    bar();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);
