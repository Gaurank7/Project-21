var block1, block2, block3, block4;
var ball;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=5;
    ball.velocityY=5;

   
    block1=createSprite(100,580,180,30);
    block1.shapeColor="red";

    block2=createSprite(295,580,180,30);
    block2.shapeColor="yellow";

    block3=createSprite(490,580,180,30);
    block3.shapeColor="cyan";

    block4=createSprite(685,580,180,30);
    block4.shapeColor="lime";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(ball.x<0){
        ball.velocityX=5
    }else if(ball.x>800){
        ball.velocityX=-5
    }
   
  if(ball.isTouching(block4)){
    music.play()
    ball.shapeColor="lime";
    ball.bounceOff(block4);
    
  }
  
  else if(ball.isTouching(block3)){
    music.play()
    ball.shapeColor="cyan";
   ball.bounceOff(block3)
   
  }
    
  else if(ball.isTouching(block2)){
    music.play()
    ball.shapeColor="yellow";
    ball.bounceOff(block2)
  }
  
  else if(ball.isTouching(block1)){
    music.play()
    ball.shapeColor="red";
    ball.bounceOff(block1)
  }

  if (ball.y<0){
    music.stop()
    ball.velocityY=5
  }

    drawSprites()
}



