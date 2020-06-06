const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird;
function setup(){
    //canvas
    var canvas = createCanvas(1200,500);
    //create engine
    engine = Engine.create();
    //create world
    world = engine.world;

    //calling objects
    box1=new Box(700,480,100,100)
    ground = new Ground(600,height,1200,20)
    pig=new Pig(900,480)
    bird = new Bird(100,100)
    box2 = new Box(1100,480,100,100)
    log = new Log(900,400,500,20,PI)
    box3 = new Box(700,350,100,100)
    box4 = new Box(1100,350,100,100)
    pig2 = new Pig(900,450)
    log2 = new Log(900,250,500,20,PI)
    box5 = new Box(900,100,100,100)
    log3 = new Log(980,75,200,20,PI/6)
    log4 = new Log(785,75,200,20,-PI/6)
}

function draw(){
    //background color
    background(0);
    Engine.update(engine);
    //used for debugging
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    //display
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}