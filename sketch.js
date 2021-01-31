var towerimg,tower,doorimg,door,climberimg,climber,ghostimg,ghost;
var doorgroup,climbergroup;
function preload(){
towerimg = loadImage("tower.png");
doorimg = loadImage("door.png")   ;
climberimg = loadImage("climber.png");
  ghostimg = loadImage("ghost-standing.png");
  
 ghostsound=loadSound("spooky.wav") ;
  
}

function setup(){
  createCanvas( 600,600);
  tower=createSprite(300,300);
  tower.addImage(towerimg);
  tower.velocityY=1;
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostimg);
  ghost.scale=0.5;
  doorgroup=new Group();
  climbergroup=new Group();
 // ghostsound.loop();
}


function draw(){
  background("black");
  if (tower.y >400 ){
    tower.y=300;
    
  }
 if(keyDown("left_arrow")){;
   ghost.x=ghost.x-3;
 }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
    
  }
  if(keyDown("space")){
    ghost.velocityY=-10;
    
  }
  ghost.velocityY=ghost.velocityY+0.5;
  spandoors();
  if(climbergroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
 drawSprites ();
  
}
function spandoors(){
  if(frameCount%200==0){
    door=createSprite(200,50);
  climber=createSprite(200,115);
  door.addImage(doorimg);
  climber.addImage(climberimg);
  door.velocityY=1;
  climber.velocityY=1; 
    door.x=Math.round(random(120,400));
    climber.x=door.x;
    door.lifetime=600;
    climber.lifetime=600;
    doorgroup.add(door);
    climbergroup.add(climber);
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
  }
}