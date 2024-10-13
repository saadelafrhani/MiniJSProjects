function updateClock() {
	var now = new Date();
	var hours = now.getHours().toString().padStart(2, "0");
	var minutes = now.getMinutes().toString().padStart(2, "0");
	var seconds = now.getSeconds().toString().padStart(2, "0");
	var time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);