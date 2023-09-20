// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
console.log (fareDoubler(fare));

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}

