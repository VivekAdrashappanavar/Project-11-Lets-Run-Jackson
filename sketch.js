//declaring variables
var runner,runnerImg;
var path,pathImg;
var border1,border2;

function preload(){
  //pre-load images
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;
  path.velocityY=4;

  runner=createSprite(200,200,20,20);
  runner.addAnimation("runnerImg",runnerImg);
  runner.scale=0.08;

  border1=createSprite(15,200,20,400);
  border1.visible=false;
  border2=createSprite(387,200,20,400);
  border2.visible=false;

  createEdgeSprites();
  
}

function draw() {
  background(0);
  
  runner.collide(border1);
  runner.collide(border2);

  if(path.y > 400)
  {
    path.y = path.height/8;
  }

  runner.x=World.mouseX;
  drawSprites();

}