const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;

var rocha;

var solo2;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var rocha_options = {
    restitution : 0.5,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rocha = Bodies.circle(250,10,20,rocha_options);
  World.add(world,rocha);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  solo2 = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,solo2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 //background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  
 ellipse(rocha.position.x,rocha.position.y,20);
 rect(solo2.position.x,solo2.position.y,200,20);

}

