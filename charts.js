var ctx = document.getElementById('chart').getContext('2d');

var stuff = JSON.parse(localStorage.stuff);
// console.log(stuff);
var currentClicks = [];
var overallClickTotals = [];
// console.log(overallClickTotals);
// console.log(allStuffClicks(stuff));
var currentClicks = allStuffClicks(stuff);
// console.log(currentClicks);

function checkForContent(){
  if (localStorage.overallClickTotals == 0){
    overallClickTotals = currentClicks;
    localStorage.overallClickTotals = JSON.stringify(overallClickTotals);
    console.log(overallClickTotals);
  // } else{
  //   for(var i = 0; i < overallClickTotals.length; i ++){
  //     overallClickTotals[i] += localStorage.overallClickTotals[i];
  //
  //   }
  }
}
checkForContent();
console.log(overallClickTotals);

function allStuffClicks(allStuff){
  var stuffClicks = [];

  for(i = 0; i < allStuff.length; i++){
    stuffClicks.push(allStuff[i].clicks);
  }
  // console.log('All Stuff Clicks: ', stuffClicks);
  return stuffClicks;
  stuffClicks = currentClicks;
}
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
        data: clickData,
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
