var myPath;


function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeColor = 'black';
	myPath.add(event.point);
}

function onMouseUp(event) {
	myPath.add(event.point);
}