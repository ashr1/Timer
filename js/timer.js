var timeHr, timeMin, timeSec, aggTime;

var startStop = $('.start-stop');
var domHr = $('.hr');
var domMin = $('.min');
var domSec = $('.sec');
var rHr = $('.r-hr');
var rMin = $('.r-min');
var rSec = $('.r-sec');


startStop.click(function() { 
	timeHr = parseInt(domHr.val());
	timeMin = parseInt(domMin.val());
	timeSec = parseInt(domSec.val());
	aggTime = (60 * 60 * timeHr) + (60 * timeMin) + timeSec;
	stopwatchTime();
});
/*
var stopwatchTime = function() {
    var displayHr, displayMin, displaySec, currentAggTime, timeCounter;
    var idx = 2;
    var counterIdx = 0;
    var timeArr = [0, 0, 0];

    currentAggTime = aggTime;
    timeCounter = aggTime;

    while (timeCounter >= 0) {
        do {
            timeArr[idx] = currentAggTime % 60;
            currentAggTime = Math.floor(currentAggTime / 60);
            idx = idx - 1;
        } while (idx >= 0);
        //console.log(timeArr);
        setTimeout(function(){
        	rHr.empty().html(timeArr[0]);
        rMin.empty().html(timeArr[1]);
        rSec.empty().html(timeArr[2]);
        }, 900);

        //timeArr = [0, 0, 0];

        idx = 2;
        timeCounter = timeCounter - 1;
        currentAggTime = timeCounter;
    }
};*/

/*
var stopwatchTime = function() {
	var displayHr, displayMin, displaySec, currentAggTime, timeCounter;
	var idx = 2;
	var counterIdx = 0;
	var timeArr = [0, 0, 0];

	currentAggTime = aggTime;
	timeCounter = aggTime;

	while(timeCounter >= 0) {

		var secondDrawer = setInterval(function(){
					do {
		timeArr[idx] = currentAggTime % 60;
		currentAggTime = Math.floor(currentAggTime / 60);
		idx = idx - 1;
	} while(idx >= 0);
	//console.log(timeArr);
	rHr.empty().html(timeArr[0]);
	rMin.empty().html(timeArr[1]);
	rSec.empty().html(timeArr[2]);

	if(timeArr == [0,0,0]) {
		clearInterval(secondDrawer);
	}
	//timeArr = [0, 0, 0];
		}, 900);

	idx = 2;
		timeCounter = timeCounter - 1;
		currentAggTime = timeCounter;
	}
};
*/

/* This example prints out the countdown in the proper time
var stopwatchTime = function() {
	var currentRemaining = aggTime;
	var timeArr = [0 ,0, 0];

	var partitionAndPrint = setInterval(function(){

		console.log(currentRemaining);

		if(currentRemaining == 0) {
			clearInterval(partitionAndPrint);
		}
		currentRemaining = currentRemaining - 1;

	}, 900);
};
*/

var stopwatchTime = function() {
	var currentRemaining = aggTime;
	var toPartition;
	var timeArr = [0 ,0, 0];

	var partitionAndPrint = setInterval(function(){

		toPartition = currentRemaining;

		var index = 2;

		do {
			timeArr[index] = toPartition % 60;
			toPartition = Math.floor(toPartition / 60);
			index = index - 1;
		} while(index >= 0);

		rHr.empty().html(timeArr[0]);
		rMin.empty().html(timeArr[1]);
		rSec.empty().html(timeArr[2]);

		if(currentRemaining == 0) {
			clearInterval(partitionAndPrint);
		}
		currentRemaining = currentRemaining - 1;

	}, 900);
};
