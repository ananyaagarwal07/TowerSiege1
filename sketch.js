const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, polygon;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  g = new Ground(100,200,1200,200);
  stand = new Ground(200,200,700,200)
  // tier 1
  block1 = new Box(300,275,30,40, "green");
  block2 = new Box(330,275,30,40, "green");
  block3 = new Box(360,275,30,40, "green");
  block4 = new Box(390,275,30,40, "green");
  block5 = new Box(420,275,30,40, "green");
  block6 = new Box(450,275,30,40, "green");
  block7 = new Box(480,275,30,40, "green");

  // tier 2
  block8 = new Box(330,235,30,40, "yellow");
  block9 = new Box(360,235,30,40, "yellow");
  block10 = new Box(390,235,30,40, "yellow");
  block11 = new Box(420,235,30,40, "yellow");
  block12 = new Box(450,235,30,40, "yellow");
 
  // tier 3 
  block13 = new Box(360,195,30,40, "blue");
  block14 = new Box(390,195,30,40, "blue");
  block15 = new Box(420,195,30,40, "blue");
  //top tier
  block16 = new Box(390,155,30,40,"black");

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  ss = new Slingshot(polygon, {x: 50, y:200});
}

function draw() {
  background("pink"); 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ellipseMode(RADIUS);
  ellipse(polygon.position.x, polygon.position.y, 20, 20);
  
  ss.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  ss.fly();
}