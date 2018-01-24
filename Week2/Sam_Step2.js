'use strict'

//JavaScript 2 Week 5 Home Work:
//Step 2:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`The odd numbers are: ${numbers.filter(element => element % 2 !== 0)}, and doubled are: ${numbers.filter(element => element % 2 !== 0).map(element => element * 2)}.`);

//It can also be resolved by defining a variable for each method:
//And I will get exactly same results:

const oddNumbers = numbers.filter(element => element % 2 !== 0);
const doubledOdds = oddNumbers.map(element => element * 2);
console.log(`The odd numbers are: ${oddNumbers}, and doubled are: ${doubledOdds}.`);

//=========================================================================================

console.log();
console.log('Step 2 Maartje section:');
console.log();

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
// console.log(typeof tasks);

console.log('Collect two days worth of tasks:');

let durationsOfTasks = tasks.map(element => element.duration);
console.log(durationsOfTasks);

let max = Math.max(...durationsOfTasks);
console.log(`The longest task takes ${max} minutes.`);

console.log();
console.log('Convert the task durations to hours, instead of minutes:');
console.log();
let tasksInHours = durationsOfTasks.map(element => element / 60);
console.log(tasksInHours);

console.log();
console.log('Filter out everything that took two hours or more (remove from the collection):');
console.log();
let twoHoursTasks = durationsOfTasks.filter(element => element >= 120);
console.log(twoHoursTasks);

console.log();
console.log('Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.')
console.log();
let hourlyPayment = durationsOfTasks.map(element => (element / 60) * 40);
console.log(hourlyPayment);
let totalPayment = hourlyPayment.reduce(function (a, b) {
    return a + b;
});
console.log(`Total hourly payment is: ${totalPayment}`);

console.log();
console.log('Output a formatted Euro amount:');
console.log();
let amountEUR = totalPayment.toFixed(2);
console.log(`The total amount by Euros is: ${amountEUR} EUR.`)





