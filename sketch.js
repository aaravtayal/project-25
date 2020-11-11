
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var wallr,wallb,walll;
var groundSprite,ground;
var ballImage;
var objImage,obj;

function preload()
{
	objImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(900, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	 obj = createSprite(750,570,20,20);
	 obj.addImage(objImage)
	 obj.scale = 0.5;


	ball1 = new ball(100,525,15);

	walll = new dustbin(691,585,10,120);
	wallr = new dustbin(809,585,10,120);
	wallb = new dustbin(750,640,100,10);


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	World.add(world, ground);


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);


 
  ball1.display();
  wallr.display();
  wallb.display();
  walll.display();


  drawSprites();
 
}

function keyPressed ()
 {
	if (keyCode === UP_ARROW)
	  {
         Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-45})
	  }

	 
 }



