var ctx = document.getElementById('chart').getContext('2d');

var stuff = JSON.parse(localStorage.stuff);
// console.log(stuff);
var currentClicks = [];
var overallClickTotals = [];
var localClickTotals = [];
var totalClickData = [];

console.log(localStorage.overallClickTotals);
// console.log(currentClicks);
// console.log(localStorage.overallClickTotals);
// console.log(overallClickTotals);
// console.log(allStuffClicks(stuff));
var currentClicks = allStuffClicks(stuff);
// console.log(currentClicks);

function addToLocalStorage(){
  for(var i = 0; i < currentClicks.length; i ++){
    var cummulClicks =  localClickTotals[i] + currentClicks[i];
    // console.log('Current',currentClicks);
    // console.log('Local',localClickTotals);
    overallClickTotals.push(cummulClicks);
    // console.log(overallClickTotals);
  }
  localStorage.overallClickTotals = JSON.stringify(overallClickTotals);
  // console.log(localStorage.overallClickTotals);
}
//start of how check to see if click totals are in local storage
function checkForContent(){
  if (localStorage.overallClickTotals){
    // console.log('bug null here', localStorage.overallClickTotals);
    localClickTotals = JSON.parse(localStorage.overallClickTotals);
    // console.log('localstore overall clicks total', localClickTotals);
    addToLocalStorage();

  } else{
    console.log('local storage false', localStorage.overallClickTotals);
    overallClickTotals = currentClicks;
    console.log('sending right info',overallClickTotals);
    localStorage.overallClickTotals = JSON.stringify(overallClickTotals);
    console.log('overalll click totals', localStorage.overallClickTotals);
  //   }
  }
}

// console.log('overallClickTotals', overallClickTotals);
// console.log('currentClicks', currentClicks);




function allStuffClicks(allStuff){
  var stuffClicks = [];

  for(i = 0; i < allStuff.length; i++){
    stuffClicks.push(allStuff[i].clicks);
  }
  // console.log('All Stuff Clicks: ', stuffClicks);
  currentClicks = stuffClicks;
  // console.log('currentClicks', currentClicks);
  return stuffClicks;
}

checkForContent();

function allStuffNames(allStuff){
  var stuffNames = [];

  for(i = 0; i < allStuff.length; i++){
    stuffNames.push(allStuff[i].name);
  }
  return stuffNames;
}

function allStuffViews(allStuff){
  var stuffViews = [];

  for(i = 0; i < allStuff.length; i++){
    stuffViews.push(allStuff[i].views);
  }
  // console.log('All Stuff Views: ', stuffViews);
  return stuffViews;
}

var viewsData = allStuffViews(stuff);
var clickData = allStuffClicks(stuff);
var nameData = allStuffNames(stuff);
function drawTable(){

  // var data = clickTotals;

  var chartData = {
    type: 'bar',
    data:{
      labels: nameData,
      datasets: [{
        label: 'Number of Clicks Per Product',
        data: overallClickTotals,
        backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 50, 0, 1)', 'rgba(255, 100, 0, 1)', 'rgba(255, 150, 0, 1)', 'rgba(255, 200, 0, 1)',
          'rgba(0, 255, 0, 0)', 'rgba(0, 255, 50, 1)', 'rgba(0, 255, 100, 1)', 'rgba(0, 255, 150, 1)', 'rgba(0, 255, 200, 1)',
          'rgba(0, 0, 255, 1)', 'rgba(50, 0, 255, 1)', 'rgba(100, 0, 255, 1)', 'rgba(150, 0, 255, 1)', 'rgba(200, 0, 255, 1)',
          'rgba(255, 100, 100, 1)', 'rgba(100, 255, 100, 1)', 'rgba(100, 100, 255, 1)', 'rgba(125, 125, 125, 1)', 'rgba(40, 100, 140, 1)'
        ],
      }],
    },
    options:{
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  var myChart = new Chart(ctx, chartData);
}

drawTable();
