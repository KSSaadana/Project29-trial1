const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   block1 = new Block(300,275,30,40);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
   block1.display();
}

//function mouseDragged(){
  //  Matter.Body.setPosition(b.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
  //  slingshot.fly();
//}
