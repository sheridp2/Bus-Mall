'use strict';

var pictureBlockEl = document.getElementById('productPictures');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var totalClicks = 0;
var clickLimit = 25;
var clickTotals = [];
var viewTotals = [];

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
  return(Math.floor(Math.random() * stuff.length));
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

  // console.log('starting left index', leftIndex);
  // console.log('starting center index', centerIndex);
  // console.log('starting right index', rightIndex);

  while(currentlyShowing.includes(leftIndex)){
    leftIndex = findRandom();
    // console.log('new left', leftIndex);
  }
  while(centerIndex === leftIndex || currentlyShowing.includes(centerIndex)){
    centerIndex = findRandom();
    // console.log('new center', centerIndex);
  }
  while(rightIndex === leftIndex || rightIndex === centerIndex || currentlyShowing.includes(rightIndex)){
    rightIndex = findRandom();
    // console.log('new right', rightIndex);

  }
  console.log(leftIndex, centerIndex, rightIndex);
  stuff[leftIndex].views ++;
  stuff[centerIndex].views ++;
  stuff[rightIndex].views ++;
  // console.log(stuff[3].views, stuff[3].name);

  pictureBlockEl.removeChild(left);
  // left = document.createElement('img');
  left.setAttribute('src', stuff[leftIndex].src);
  pictureBlockEl.appendChild(left);

  pictureBlockEl.removeChild(center);
  // center = document.createElement('img');
  center.setAttribute('src', stuff[centerIndex].src);
  pictureBlockEl.appendChild(center);

  pictureBlockEl.removeChild(right);
  // right = document.createElement('img');
  right.setAttribute('src', stuff[rightIndex].src);
  pictureBlockEl.appendChild(right);

  currentlyShowing = [leftIndex, centerIndex, rightIndex];
}

displayPics();

console.log('-----------------Event Listener click---------------');

var onImageClickEl = document.getElementById('productPictures');

onImageClickEl.addEventListener('click', handleClick);

function handleClick(event){

  event.preventDefault();
  event.stopPropagation();

  var target = event.target;
  var targetSrc = target.getAttribute('src');

  if(totalClicks < clickLimit){

    findRandom();
    displayPics();

    totalClicks ++;
    console.log('click number ' + totalClicks);
    // console.log('currentlyShowing ' + currentlyShowing);
    for(i = 0; i < stuff.length; i++){
      if(stuff[i].src === targetSrc){
        stuff[i].clicks ++;
        // console.log(stuff.clicks);
        // console.log(stuff[i].clicks);
      }
    }
  } else{
    for(var i = 0; i < stuff.length; i++){
      // console.log(stuff[i].clicks);
      clickTotals.push(stuff[i].clicks);
      // console.log(totalClicks);
      console.log('Views of ' + stuff[i].name + ' was ' + stuff[i].views + ' and total clicks is ' + stuff[i].clicks);
      console.log('When viewed, the % chance it will be clicked = ' + Math.round((stuff[i].clicks) / (stuff[i].views) * 100));
    }
    showLink();
    saveProductsToLocalStorage(stuff);
  }
  // drawTable();
}

function saveProductsToLocalStorage(stuff){
  localStorage.stuff = JSON.stringify(stuff);
  console.log('saved to localStorage');
}

function showLink(){
  var hiddenToNot = document.getElementById('chartsLink');
  hiddenToNot.removeAttribute('class');
  hiddenToNot.setAttribute('class', 'chartsButton');
}
