cabrito.PageLoad.elementReady('myCanvas', function () {
	// requestAnimationFrame Shim
	(function() {
	  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	  window.requestAnimationFrame = requestAnimationFrame;
	})();
	 

	var canvas = document.getElementById('myCanvas');
	 var context = canvas.getContext('2d');
	 var x = canvas.width / 2;
	 var y = canvas.height / 2;
	 var radius = 30;
	 var endPercent = 100;
	 var curPerc = 0;
	 var counterClockwise = false;
	 var circ = Math.PI * 2;
	 var quart = Math.PI / 2;

	 context.lineWidth = 10;
	 context.strokeStyle = '#ad2323';
	 context.shadowOffsetX = 0;
	 context.shadowOffsetY = 0;
	 context.shadowBlur = 10;
	 context.shadowColor = '#656565';

	 function animate(current) {
	     context.clearRect(0, 0, canvas.width, canvas.height);
	     context.beginPath();
	     context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
	     context.stroke();
	     if (clock.getPercentage() === 0) {
	     	curPerc = clock.getPercentage();
	     } else {
	     	curPerc = 100 - clock.getPercentage();
	     }
	     if (curPerc < endPercent) {
	         requestAnimationFrame(function () {
	             animate(curPerc / 100)
	         });
	     }
	 }

	 animate();
});