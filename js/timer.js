var timeHr, timeMin, timeSec, aggTime;

var startStop = $('.start-stop');
var domHr = $('.hr');
var domMin = $('.min');
var domSec = $('.sec');
var rHr = $('.r-hr');
var rMin = $('.r-min');
var rSec = $('.r-sec');


startStop.click(function() { 
	if (startStop.val() == "Start") {
		startStop.empty().val("Stop");
		timeHr = parseInt(domHr.val());
		timeMin = parseInt(domMin.val());
		timeSec = parseInt(domSec.val());
		aggTime = (60 * 60 * timeHr) + (60 * timeMin) + timeSec;
		stopwatchTime();
	}
	
});


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
			startStop.empty().val("Start");
		}
		currentRemaining = currentRemaining - 1;

	}, 900);
};
