// Create a board
let boardData = []
let start = 100;
for(let i=1;i<=10;i++) {
  let innerArr = []
  if(i%2 != 0) {
    for(let k=begin;j>begin-10;j--) {
      innerArr.push(k);
    }
  } else {
    for(let k=begin-9;j<begin+1;j++) {
      innerArr.push(k);
    }
  }
  boardData.push(innerArr);
  start -= 10;
}
// I visted this link while making the board game so as to get some idea but there was nothing https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
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


//I am unable to get board thatswhy i am unable to proceed with methods.
  
  