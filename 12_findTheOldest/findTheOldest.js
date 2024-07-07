const findTheOldest = function(arrayOfPeople) {
    arrayOfPeople.map(person => {
        if (!("yearOfDeath" in person)) {
            const currentDate = (new Date()).getFullYear();
            person.age = currentDate - person.yearOfBirth;
        }

        else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });

    const maxAge = arrayOfPeople
    .reduce((maxAge, currentPerson) => Math.max(maxAge, currentPerson.age), 0);

    return arrayOfPeople.filter(person => person.age == maxAge)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
