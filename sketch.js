const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var string,p;
 
var poly,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var base1, base2, score;  

function preload(){
    
}

function setup(){
    createCanvas(1200,800)
    engine = Engine.create();
    world = engine.world;
    score= 0
    base1=new Base(275,600)
    //base2= new Base(800,450)
    b1= new Block(213,575)
    b2= new Block(238,575)
    b3= new Block(263,575)
    b4= new Block(288,575)
    b5= new Block(313,575)
    b6= new Block(338,575)
    b7= new Block(238,540)
    b8= new Block(263,540)
    b9= new Block(288,540)
    b10= new Block(313,540)
    b11= new Block(263,505)
    b12= new Block(288,505)
    b13= new Block(275,470)
    p= new Polygon(800,450)
    string = new Slingshot(p    .body,{x:100,y:200});

    
}

function draw(){
    background(0)
    Engine.update(engine)

    base1.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();   
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();   
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    
    string.display();
    p.display();
    keyPressed();

    drawSprites();

    text("Score : "+ score,750,40);
}

function mouseDragged(){
    Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}

function keyPressed(){
    if(keyCode === 32){
        string.attach(p.body);
    }
}

 ;  
