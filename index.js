// Code your solution in this file!
const returnFirstTwoDrivers = (array) => { return array.slice(0,2); };

const returnLastTwoDrivers = (array) => { return array.slice(-2); };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// why not arrow function?
function createFareMultiplier(integer){ 
    return function(multiplier){ 
        return integer * multiplier }
}

function fareDoubler(fare){
    const fareDoubled = createFareMultiplier(fare)(2)
    return fareDoubled
}

function fareTripler(fare){
    const fareTripled = createFareMultiplier(fare)(3)
    return fareTripled
}

function selectDifferentDrivers(arrayOfDrivers, driversFunction){
    return driversFunction(arrayOfDrivers);
}