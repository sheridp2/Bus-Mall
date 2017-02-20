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
  new RandomPicture('boots', 'img/boots/jpg'),
  new RandomPicture('breakfast', 'img/breakfast.jpg'),
  new RandomPicture('bubblegum', 'img/bubblegum'),
  new RandomPicture('chair', 'img/chair.jpg'),
  new RandomPicture('cthulhu', 'img/cthulhu.jpg'),
  new RandomPicture('dogDuck', 'img/dogDuck.jpg'),
  new RandomPicture('dragon', 'img/dragon.jpg'),
  new RandomPicture('pen', 'img/pen.jpg'),
  new RandomPicture('petSweep', 'img/petSweep.jpg'),
  new RandomPicture('scissors', 'img/scissors.jpg'),
  new RandomPicture('shark', 'img/shark.jpg'),
  new RandomPicture('sweep', 'img/sweep.jpg'),
  new RandomPicture ('tauntaun', 'img/tauntaun.img'),
  new RandomPicture ('unicorn', 'img/unicorn.img'),
  new RandomPicture('usb', 'img/usb.gif'),
  new RandomPicture('waterCan', 'img/waterCan.jpg'),
  new RandomPicture('wineGlass', 'img/wineGlass.jpg')
];

// for(var i = 0; i < stuff.length; i++){
//   // console.log(stuff[i].name);
//   // console.log(stuff[i].src);
// }
