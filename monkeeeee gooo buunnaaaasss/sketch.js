var ground;
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime = 0;
var score = 0;
function preload()
{
monkey_running =
loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}



function setup() 
{
monkey = createSprite(80, 315, 20, 20); 
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400, 350, 1000, 10);

  
bananaGroup = new Group();
obstacleGroup = new Group();
}


function draw() 
{
background("white");
ground.velocityX = -4;
ground.x = ground.width/2;
  
stroke("black");
textSize(20);
fill("black")
text("score: "+ score, 250, 50)

stroke("black");
textSize(20);
fill("black")
survivalTime = Math.ceil(frameCount/frameRate())
text("survivalTime: "+survivalTime, 100, 50)
  
monkey.collide(ground);
monkey.collide(obstacleGroup);
  
if (keyDown("space"))
{
monkey.velocityY = -8;
}
monkey.velocityY = monkey.velocityY + 0.8 

ground.velocityX = -2;

if(ground.x < -350)
{
ground.x = 800;
}
switch(score)
{
case 10: monkey.scale = 0.12;
       break;
case 20: monkey.scale = 0.14;
       break;
case 30: monkey.scale = 0.16;
       break;
case 40: monkey.scale = 0.18;
       break;
case 50: monkey.scale = 0.20;
       break;
case 60: monkey.scale = 0.22;
       break;
case 70: monkey.scale = 0.24;
       break;
case 80: monkey.scale = 0.26;
       break;
case 90: monkey.scale = 0.28;
       break;
case 100: monkey.scale = 0.30;
       break;

default: break;
}

if(monkey.isTouching(obstacleGroup))
{
monkey.scale = 0.1;
obstacleGroup.velocityX = 0;
bananaGroup.velocityX = 0;
}

if(monkey.isTouching(bananaGroup))
{
score = score+2;
bananaGroup.destroyEach();
}


bunanaz();
rocz();
drawSprites();
}

function bunanaz()
{
if (frameCount % 80 == 0)
{
banana = createSprite(600,165);
banana.velocityX = -5
banana.scale = 0.1;
banana.addImage(bananaImage);
banana.y = Math.round(random(120, 200));
bananaGroup.add(banana);
}
}

function rocz() 
{
if (frameCount % 80 == 0)
{
obstacle = createSprite(600, 315);
obstacle.velocityX = -5
obstacle.scale = 0.2;
obstacle.addImage(obstacleImage);
obstacleGroup.add(obstacle);
obstacle.setCollider("circle", 0, 0, 60);
}
}




