'use strict';

var totalClicks = 0;
var randomNumArray = [];

function RandomPicture(name, src){
  this.name = name;
  this.src = src;
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
  new RandomPicture ('tauntaun', 'img/tauntaun.jpg'),
  new RandomPicture ('unicorn', 'img/unicorn.jpg'),
  new RandomPicture('usb', 'img/usb.gif'),
  new RandomPicture('waterCan', 'img/waterCan.jpg'),
  new RandomPicture('wineGlass', 'img/wineGlass.jpg')
];

// for(var i = 0; i < stuff.length; i++){
//   // console.log(stuff[i].name);
//   // console.log(stuff[i].src);
// }

function findRandom(){
  var tempArray = [];
  while(tempArray.length < 3){
    var rand = stuff[Math.floor(Math.random() * stuff.length)].src;
    if(tempArray.indexOf(rand) === -1){
      tempArray.push(rand);
    }
    // console.log(tempArray);
  }
  randomNumArray = tempArray;
}
findRandom();
console.log(randomNumArray);

var pictureBlockEl = document.getElementById('productPictures');
function postPictures(){
  var pictureEl = document.createElement('h1');
  pictureBlockEl.appendChild(pictureEl);

  for(var i = 0; i < randomNumArray.length; i++){
    var addPic = document.createElement('img');
    addPic.setAttribute('src', randomNumArray[i]);
    pictureEl.appendChild(addPic);

    console.log(typeof(randomNumArray[i]));
  }
}

function removePictures(){
  var pictureEl = document.getElementById('prodcutPictures');
  var removePicEl = document.getElementByTag('h1');
  pictureEl.removeChild(removePicEl);
}
postPictures();

console.log('-------------------Event Listener click---------------');

var onImageClickEl = document.getElementById('productPictures');

onImageClickEl.addEventListener('click', handleClick);

//event listener not working corectly yet. Needs to delete current picure and add new
function handleClick(event){
  event.preventDefault();
  event.stopPropagation();

  removePictures();
}
