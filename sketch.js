const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var ground, ball, platform;
var box1,box2,box3,box4,box5,log1,log2,log3,log4;
var bird,pig1,pig2;
var bg, tlog , connect;

function preload()
{
    bg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    box1 = new BoxO(850,450,50,50);
    box2 = new BoxO(1000,450,50,50);
    box3  = new BoxO(1000,440,50,50);
    box4 = new BoxO(850,440,50,50);
    box5 = new BoxO(925,430,55,55)
    pig1 = new Pig(925,450)
    pig2 = new Pig(925,440);
    log1 = new StickO(925,445,250,PI/2);
    log2 = new StickO(925,435,250,PI/2);
    log3 = new StickO(850,325,150,PI/6);
    log4 = new StickO(990,325,150,(-PI/6));
    //console.log(box1);
    //console.log(box2);
    ground = new Ground(600,490,1200,20);
    platform = new Ground (175,355,250,250)
    tlog = new StickO(175,100,100,PI/2);
   bird = new Bird(200,200);
   console.log("bird")
   connect = new Chain(bird.body,tlog.body);
   console.log("bye")
   
}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    bird.display();
    ground.display("white");
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();    
    box4.display();
    box5.display();
    pig2.display();
    tlog.display();
    platform.display("brown");
    // connect.display();
   
}