

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  ground= new Ground(240,785,480,30)
  division1= new Division(40,780,15,60)
  division2= new Division(80,780,15,60)
  division3= new Division(120,780,15,60)
  division4= new Division(160,780,15,60)
  division5= new Division(200,780,15,60)
  division6= new Division(240,780,15,60)
  division7= new Division(280,780,15,60)
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
    
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

}