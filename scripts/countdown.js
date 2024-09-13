//const referenceDate = new Date('Dec 26, 2021 10:00:00').getTime();
const referenceDate = (new Date("Oct 04, 2024 00:00:00").getTime());

const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elOutput = document.getElementById('output');

var loop = setInterval(function () {
	var currentDate = new Date().getTime();
	var remainTime = referenceDate - currentDate;

	elDays.innerHTML = Math.floor(remainTime / (1000 * 60 * 60 * 24));
	elHours.innerHTML = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	elMinutes.innerHTML = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
	elSeconds.innerHTML = Math.floor((remainTime % (1000 * 60)) / 1000);

	if (remainTime <= 0) {
		clearInterval(loop);
		elDays.innerHTML = 0;
		elHours.innerHTML = 0;
		elMinutes.innerHTML = 0;
		elSeconds.innerHTML = 0;
		elOutput.innerHTML = 'Tempo esgotado';
	}
}, 1000);
