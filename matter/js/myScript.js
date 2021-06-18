/* This is a demo for matter.js  */

var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

var engine = Engine.create();

var render = Render.create({
	element: document.body,
	engine: engine
});


var size = 80;

var boxA = Bodies.rectangle(400,200,size,size);
var boxB = Bodies.rectangle(450,50,size,size);
var ground = Bodies.rectangle(400,610,810,60, {isStatic: true});

for (var num = 0; num < 100; num++) {
	var boxes = Bodies.rectangle(Math.random()*800,Math.random()*600,size,size);
	Composite.add(engine.world, [boxes,ground]);
}


Render.run(render);


var runner = Runner.create();

Runner.run(runner,engine);









