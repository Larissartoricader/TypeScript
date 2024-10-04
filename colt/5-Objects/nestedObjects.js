"use strict";
//If you want to declare the type of values from an object inside a function as parameter, you can do it. But if you have nested object, it will become really complicate insert {} inisde {}. That is the point where alias is really helpful as nested objects.
// That is how TS insider a function looks like. Too many information inside a function
function printBestSound(song) {
    console.log(song.artist);
}
const bestSong = {
    artist: "Anitta",
    songName: "Bang Bang",
    numStream: 32453,
    credits: {
        producer: "X Producer",
        dj: "X DJ",
        compositor: "X Compositor",
    },
    position: 2,
};
printBestSound(bestSong);
//We only have the function and ONE type, that we created, for the object.
function showMeTheSong(songName) {
    console.log(songName.artist);
    console.log(songName.numStream);
}
showMeTheSong(bestSong);
function calculateSong(newSong) {
    const valueOfSong = newSong.numStream * 0.333;
    console.log(valueOfSong);
    return valueOfSong;
}
calculateSong(bestSong);
// I can or can not insert the VariableZ when I declare my variable of the my own created type Point.
const myPoint = { variableX: 1, variableY: 2 };
const myUser = {
    id: 12345,
    username: "Luana",
    age: 54,
    adress: "City Street, 234",
};
console.log(myUser.id);
// I can no reassign the ID because onde I declare it, I can not change it.
//myUser.id = 2837;
