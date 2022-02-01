function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
};

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
return function (value) {
return int * value
}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (driver1, driver2) {
    return driver2(driver1)
}

