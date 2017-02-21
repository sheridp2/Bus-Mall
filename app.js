'use strict';

var pictureBlockEl = document.getElementById('productPictures');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var totalClicks = 0;
var clickLimit = 25;

var randomNumArray = [];
var currentlyShowing = [];

function RandomPicture(name, src, clicks, views){
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
}
var stuff = [
  new RandomPicture('bag', 'img/bag.jpg'),
  new RandomPicture('banana', 'img/banana.jpg'),
  new RandomPicture('bathroom', 'img/bathroom.jpg'),
  new RandomPicture('boots', 'img/boots.jpg'),
  new RandomPicture('breakfast', 'img/breakfast.jpg'),
  new RandomPicture('bubblegum', 'img/bubblegum.jpg'),
  new RandomPicture('chair', 'img/chair.jpg'),
  new RandomPicture('cthulhu', 'img/cthulhu.jpg'),
  new RandomPicture('dogDuck', 'img/dogDuck.jpg'),
  new RandomPicture('dragon', 'img/dragon.jpg'),
  new RandomPicture('pen', 'img/pen.jpg'),
  new RandomPicture('petSweep', 'img/petSweep.jpg'),
  new RandomPicture('scissors', 'img/scissors.jpg'),
  new RandomPicture('shark', 'img/shark.jpg'),
  new RandomPicture('sweep', 'img/sweep.png'),
  new RandomPicture('tauntaun', 'img/tauntaun.jpg'),
  new RandomPicture('unicorn', 'img/unicorn.jpg'),
  new RandomPicture('usb', 'img/usb.gif'),
  new RandomPicture('waterCan', 'img/waterCan.jpg'),
  new RandomPicture('wineGlass', 'img/wineGlass.jpg')
];

function findRandom(){
  // var tempArray = [];
  // while(tempArray.length < 3){
    // var rand = stuff[Math.floor(Math.random() * stuff.length)].src;
  return stuff[Math.floor(Math.random() * stuff.length)].src;
//     if(tempArray.indexOf(rand) === -1){
//       tempArray.push(rand);
//     }
//     // console.log(tempArray);
//   }
//   randomNumArray = tempArray;
}

function displayPics(){
  var leftIndex = findRandom();
  var centerIndex = findRandom();
  var rightIndex = findRandom();

  console.log('starting left index', leftIndex);
  console.log('starting center index', centerIndex);
  console.log('starting right index', rightIndex);

  while(currentlyShowing.includes(leftIndex)){
    leftIndex = findRandom();
    console.log('new left', leftIndex);
  }
  while(centerIndex == leftIndex || currentlyShowing.includes(centerIndex)){
    centerIndex = findRandom();
    console.log('new center', centerIndex);
  }
  while(rightIndex === leftIndex || rightIndex === centerIndex || currentlyShowing.includes(rightIndex)){
    rightIndex = findRandom();
    console.log('new right', rightIndex);

  }
  currentlyShowing = [leftIndex, centerIndex, rightIndex];
  console.log(currentlyShowing);

  pictureBlockEl.removeChild(left);
  left = document.createElement('img');
  left.setAttribute('src', currentlyShowing[0]);
  pictureBlockEl.appendChild(left);

  pictureBlockEl.removeChild(center);
  center = document.createElement('img');
  center.setAttribute('src', currentlyShowing[1]);
  pictureBlockEl.appendChild(center);

  pictureBlockEl.removeChild(right);
  right = document.createElement('img');
  right.setAttribute('src', currentlyShowing[2]);
  pictureBlockEl.appendChild(right);
}

displayPics();

console.log('-----------------Event Listener click---------------');

var onImageClickEl = document.getElementById('productPictures');

onImageClickEl.addEventListener('click', handleClick);

//event listener not working corectly yet. Needs to delete current picure and add new
function handleClick(event){
  event.preventDefault();
  event.stopPropagation();
  // console.log(randomNumArray);
  if(totalClicks < clickLimit){
    randomNumArray = [];
    findRandom();
    displayPics();
    console.log('products chosen this round ' + randomNumArray);
    totalClicks ++;
    console.log('click number ' + totalClicks);
  }
}
