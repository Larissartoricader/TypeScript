//If you want to declare the type of values from an object inside a function as parameter, you can do it. But if you have nested object, it will become really complicate insert {} inisde {}. That is the point where alias is really helpful as nested objects.
// That is how TS insider a function looks like. Too many information inside a function
function printBestSound(song) {
    console.log(song.artist);
}
var bestSong = {
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
    var valueOfSong = newSong.numStream / 0.333;
    console.log(valueOfSong);
    return valueOfSong;
}
calculateSong(bestSong);
