
var trex ,trex_running;
var ground,imageofground;
var ing 
var cloud, imageofcloud;
var r
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  imageofground = loadImage("ground2.png");
  imageofcloud = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,155,20,50);
 trex.addAnimation("running",trex_running);
trex.scale = 0.6

ing = createSprite(200,170,400,20);
ing.visible = false;

ground = createSprite(200,155,400,20);
ground.addImage("ground",imageofground);
}




function draw(){
  background("beige")

if(keyDown("space")|| keyDown("UP_ARROW") && trex.y>=100){
  trex.velocityY = -7;
}

trex.velocityY = trex.velocityY + 0.8;
trex.collide(ing);
if (ground.x<0){
  ground.x= ground.width/2;
}
ground.velocityX = -7;
spawninginthecloud();
drawSprites();
}
function spawninginthecloud(){
r = Math.round(random(100,150));
if(frameCount%r===0){
cloud = createSprite(600,100,40,10);
cloud.addImage("cloud", imageofcloud);
cloud.velocityX = -1;
cloud.scale = 0.7;
cloud.y = Math.round(random(10,100));
cloud.depth = trex.depth;
trex.depth = trex.depth + 1;
}
}