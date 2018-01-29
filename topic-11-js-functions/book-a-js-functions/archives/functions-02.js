const playlistCollection = [
  {
    id: "01",
    title: "Beethoven Sonatas",
    songs: [
      {
        id: "04",
        title: "Piano Sonata No. 3",
        artist: "Beethoven",
      },
      {
        id: "05",
        title: "Piano Sonata No. 7",
        artist: "Beethoven",
      },
      {
        id: "06",
        title: "Piano Sonata No. 10",
        artist: "Beethoven",
      }
    ]
  },
  {
    id: "02",
    title: "Beethoven Concertos",
    songs: [
      {
        id: "07",
        title: "Piano Concerto No. 0",
        artist: "Beethoven",
      },
      {
        id: "08",
        title: "Piano Concerto No. 4",
        artist: "Beethoven",
      },
      {
        id: "09",
        title: "Piano Concerto No. 6",
        artist: "Beethoven",
      }
    ]
  },
  {
    id: "03",
    title: "Beethoven Variations",
    songs: [
      {
        id: "10",
        title: "Opus 34: Six variations on a theme in F major",
        artist: "Beethoven",
      },
      {
        id: "11",
        title: "Opus 120: Thirty-three variations on a waltz by Diabelli in C majo",
        artist: "Beethoven",
      }
    ]
  }
];

function getPlaylists() {
  for(let i=0;  i<playlistCollection.length; i++)
  {
    for(let j=0; j<playlistCollection[i].songs.length; j++)
    {
      console.log(playlistCollection[i].songs[j]);
    }
  }
};


// //- Write a function that uses a loop to iterate through the songs array and console.log all of the songs.
const playList = 
  {
    id: "01",
    title: "Beethoven Sonatas",
    artist: "Beethoven",
    songs: [ "Piano Sonata No. 3","Piano Sonata No. 7","Piano Sonata No. 10"],
    rating: 4
  };

function songOutput()
{
  for (let i=0; i<playList.songs.length; i++)
  {
    console.log(playList.songs[i]);
  }
}


// //- Write another funciton that again uses a loop to iterate in the reverse direction, logging the people starting at 'James' and finishing with 'Greg'

function songOutputReverse()
{
  for (let i=playList.songs.length; i>-1; i--)
  {
    console.log(playList.songs[i]);
  }
}

// //write a function that uses the return keyword...

function songOutputReverseReturn(tempString)
{
   for (let i=playList.songs.length; i>0; i--)
  {
    tempString = tempString + " <br>" + playList.songs[i-1];
  }
  return tempString;
}

