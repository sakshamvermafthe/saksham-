var bg,bgImg;
var player, shooterImg, shooter_shooting;
var brick1,brick2, brick3 , brick4 ,brick5;

function preload(){
  
  shooterImg = loadImage("assets/shooter.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bllImg = loadImage("assets/bll.png")
  bgImg = loadImage("assets/sand.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth/2, displayHeight-230, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3

  //player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  // player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)
  brick1 = createSprite(displayWidth/2, displayHeight-350, 70, 50);
  brick2 = createSprite(displayWidth/2-75, displayHeight-350, 70, 50);
  brick3 = createSprite(displayWidth/2-150, displayHeight-350, 70, 50);
  brick4 = createSprite(displayWidth/2+75, displayHeight-350, 70, 50);
  brick5= createSprite(displayWidth/2+150, displayHeight-350, 70, 50);
  
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x= player.x-20
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+20
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  b = createSprite(player.x,player.y, 50, 50);
   b.addImage(bllImg)
     b.scale = 0.09
 b.velocityY=-5
}



drawSprites();

}
