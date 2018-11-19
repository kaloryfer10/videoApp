var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var startButton = document.getElementById('start');
var snapButton = document.getElementById('snap');

var context = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia|| navigator.oGetUserMedia || navigator.msGetUserMedia

if (navigator.getUserMedia) {
  navigator.getUserMedia({video: true}, streamWebCam, error);
}

function streamWebCam(stream) {
	video.src = window.URL.createObjectURL(stream);
	//video.play();
}

function error(e) {
  alert(e);
}

startButton.addEventListener('click', function() {
	video.play();
});

snapButton.addEventListener('click', function() {
	canvas.width = video.clientWidth;
	canvas.height = video.clientHeight;
	context.drawImage(video, 0, 0);
});