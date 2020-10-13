
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 
 var ground1,paperball,dustbin,dustbin1,dustbin2;

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground1=new ground(700,680,1400,20);

	dustbin=new useme(1100,630,20,100,PI/2);
	dustbin1=new useme(1170,660,120,20,PI/2);
	dustbin2=new useme(1240,630,20,100,PI/2);
	
	paperball=new ball(180,450,40);
	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER)
  background("white");
 
  

  dustbin.display();
  dustbin1.display();
  dustbin2.display();

  paperball.display();
  ground1.display();

 
  drawSprites();
 
}

function keyPressed (){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
	}
}



