
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,obstacle;
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  createCanvas(650,400)
  monkey = createSprite(80,350);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1; 
  monkey.x = 80;
  
  ground = createSprite(400,350,900,10);
  //ground.veiocityX = -4;
  ground.x = ground.width/2;
  //ground.y = 350;
  
  
}


function draw() {
 background(0,255,0);
  
   
  if (keyDown("space")){
   monkey.velocityY  = - 12;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  
  
 
  
   monkey.collide(ground);
  if(World.frameCount % 60===0){
    food();
  }
  if(World.frameCount % 200===0){
    obstacles();
  }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
drawSprites(); 
}

function food(){
  
    banana = createSprite(600,Math.round(random(10,300)))
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.lifetime = 200;
  
}

function obstacles(){
  obstacle = createSprite(600,320);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -5;
  obstacle.scale = 0.2;
  obstacle.lifetime = 200;
}



