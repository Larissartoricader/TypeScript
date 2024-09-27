//If you want to declare the type of values from an object inside a function as parameter, you can do it. But if you have nested object, it will become really complicate insert {} inisde {}. That is the point where alias is really helpful as nested objects.

// That is how TS insider a function looks like.

function printBestSound(song: {
  artist: string;
  songName: string;
  numStream: number;
  credits: { producer: string; dj: string; compositor: string };
  position: number;
}) {
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

// To avoid all specification inside a function, we can create an alias type and define it outside the function.

type Song = {
  artist: string;
  songName: string;
  numStream: number;
  credits: { producer: string; dj: string; compositor: string };
  position: number;
};
