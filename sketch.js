const Engine =Matter.Engine
const World=Matter.World
const Body= Matter.Bodies
var engine,world,object,ground


function setup() {
  createCanvas(800,400);
  
 engine=Engine.create()
 world=engine.world;
 var options={
restitution:1.0
 }
 var groundOptions={isStatic:true
  

 }
 
 ground=Body.rectangle(200,390,200,20,groundOptions)

 object=Body.circle(200,100,20,options);


World.add(world,ground)
World.add(world,object)
console.log(object)

}

function draw() {
  background(255,255,255);

  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS)
 ellipse(object.position.x,object.position.y,20,20)
  drawSprites();  



}