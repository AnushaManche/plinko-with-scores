var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var turn=0;


var divisionHeight=300;
var divisions;
var plinko;
var particle;
var ground;

var turn =0;
var plinko;
var END=0
var PLAY=1


var score=0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Turn : "+turn,200,50);
 text("Score : "+score,350,50);

  Engine.update(engine);

  if(particle===null){

particle.display();

if(particle.body.position.y>760){

if(particle.body.position.x<300){

score=score+500;
particle=null;
if(count>=5)gameState="end";


}

}


  }
 
  if(turn>4){

text("GAME OVER",500,200)
textSize(20)


  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
turn=turn+1
particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

if(gameState==="end"){

count++;
particle=new Particle(mouseX,10,10,10)


}

}