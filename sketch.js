const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;                
//Namespacing= giving nick name to particular function

var engine,world,ground,box;
var box1;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
 var ground_option={
   isStatic:true
   
 }
 
  ground=Bodies.rectangle(200,390,400,10,ground_option)
  World.add(world,ground)
  var box_options={
    restitution:1
  }

  var box1_options={
    restitution: 1 
  }
  

  box=Bodies.rectangle(200,200,50,50,box_options);
  World.add(world,box)

  box1=Bodies.circle(100,100,20,box1_options);

  World.add(world,box1)

  console.log(box)

}
function draw()
{
  background("green");
  Engine.update(engine)
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
    ellipseMode(RADIUS);
    ellipse(box1.position.x,box.position.y,20,20);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400,10)

    
    
}
