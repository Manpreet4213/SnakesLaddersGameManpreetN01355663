// Create a board
let boardnumber = []
let start = 100;
for(let i=1;i<=10;i++) {
  let mynumber = []
  if(i%2 != 0) {
    for(let k=begin;j>begin-10;j--) {
      mynumber.push(k);
    }
  } else {
    for(let k=begin-9;j<begin+1;j++) {
      mynumber.push(k);
    }
  }
  boardnumber.push(mynumber);
  start -= 10;
}
// I visted this link while making the board game so as to get some idea about vue code but there was nothing https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
//Board rules
let board = [
  {
    boardURL: 'manpreet.jpg',
    boardLogic: {
      2: {end: 38},
      4: {end: 14},
      9: {end: 31},
      33: {end: 85},
      52: {end: 88},
      80: {end: 99},
      98: {end: 8},
      51: {end: 11},
      56: {end: 15},
      62: {end: 57},
      53: {end: 92},
    }
  }
  //board logic written according to the image of the board.
  ];
  //I have provided my image link  for the board but i am unable to get it on the page so i am unable to proceed further. 
  
// For Gamers, the objects are written below.
  
let gamers = [
  {
    id: 'Person 1',
    img: 'person.jpg',// these iamges are not appearing for me i don't know why?
    currentNum: 1,
    disabledDice: false,
    diceNum: undefined
  },
  {
    id: 'Person 2',
    img: 'person2.jpg',
    currentNum: 1,
    disabledDice: true,
    diceNum: undefined
  }
];

// I have taken the players images from the link - https://ca.images.search.yahoo.com/yhs/search?p=images+for+players+cartoons&fr=yhs-shnl-001&hspart=shnl&hsimp=yhs-001&imgurl=http%3A%2F%2F1.bp.blogspot.com%2F-A9PifSprgCI%2FT58CfDoi77I%2FAAAAAAAAAqM%2FIb7qNoksROc%2Fs1600%2Fcartoon-football-player-009.jpg#id=61&iurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F37%2F14%2F69%2F371469c5bb2f52a352de3f0e04afd009--street-fighter-football-players.jpg&action=click
//I am unable to get board thatswhy i am unable to proceed with methods.
  
  