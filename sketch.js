//CREATE THE VARIABLES
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b1,b2,b3;
//PHYSICS ENGINE
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//PRELOAD FNC. TO LOAD IMAGES
function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800,700);
//ADJUSTS RECTANGLE WITH ITS CENTRE
rectMode(CENTER);

//PACKAGE SPRITE 
packageSprite=createSprite(400, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

//HELICOPTER SPRITE
helicopterSprite=createSprite(400, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6

//GROUND SPRITE
groundSprite=createSprite(400, 665, 800,10);
groundSprite.shapeColor=color(255)

//CREATES ENGINE&WORLD
engine = Engine.create();
world = engine.world;

//PACKAGE BODY
packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.5, isStatic:true});
//ADDS PACKAGE TO THE WORLD
World.add(world, packageBody);


//CREATES GROUND
ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
//ADDS GROUND TO WORLD
World.add(world, ground);
//CREATES BORDERS
	b1=new Border(400,650,200,20); 
b2=new Border(500,610,20,100);
b3=new Border(300,610,20,100);
//RUNS ENGINE
Engine.run(engine);

}


function draw() {
//ADJUSTS RECT. WITH ITS CENTRE
	rectMode(CENTER);
	//BACKGROUND COLOUR
background(0);
//KEY PRESSED FNC.
keyPressed();
//ADJUSTS POS. OF THE PACKAGE SPRITE WITH THE PACKAGE BODY
packageSprite.x= packageBody.position.x ;
packageSprite.y= packageBody.position.y ;
//DRAWS SPRITES
drawSprites();
//DISPLAYS THE BORDERS
b1.display();
b2.display();
b3.display();
}

//FNC. TO MAKE THE PACKAGE FALL WITH THE DOWN_ARROW KEY
function keyPressed() {
if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);

}
}



