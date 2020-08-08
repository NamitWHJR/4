var bg 
var player, tool
var gameState = "intro"
var startButton
var downKey = 0  
var mineral1,mineral2,mineral3


function preload() {

bg = loadImage("Note.jpg")

shopimg = loadImage("shop.png")

bg2 = loadImage ("bg2main.png") 

Minerwalk = loadAnimation("minerwalk.png")
MinerwalkRight = loadAnimation("minerwalkr.png")
Minerrun = loadAnimation("minerrun.png")
MinerrunRight = loadAnimation("minerrunright.png")
starterAxe = loadImage("starteraxe.png")
Minebg = loadImage("bg under.png")

MiningAnim = loadAnimation("miner1.png","miner2.png","miner3.png","miner4.png","miner5.png","miner6.png","miner7.png","miner8.png","miner9.png")



}






function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  player = createSprite(windowWidth/2-200, displayHeight-425, 50, 50);
  player.addAnimation("walking",Minerwalk)
  player.addAnimation("walkingRight",MinerwalkRight)
  player.addAnimation("runningRight",MinerrunRight)
  player.addAnimation("running",Minerrun)
  player.addAnimation("mining",MiningAnim)


  player.scale = 1.5
  tool = createSprite(230,windowHeight/2 + 190,50,50)
  tool.addImage(starterAxe)

  startButton = createButton("play")
  startButton.position(windowWidth/2 + 400,windowHeight - 220)
  startButton.style('font-size','50px')
  startButton.style('border-radius','22px')

}

function draw() {
  
  Edges = createEdgeSprites()

  player.collide(Edges)

if (gameState == "intro"){
  background(bg);
  textSize(30)
  fill("black")
  text("Mining Adventure",windowWidth/2 - 100,25)
  player.visible = false
  tool.visible = false
  startButton.mousePressed(function (){
    gameState = "surface"

    startButton.hide();

  })



}

else if(gameState == "surface"){

background(bg2)
text(mouseX + ":"+ mouseY,50,50)

player.visible = true
tool.visible = true

if (keyDown(RIGHT_ARROW)){
  player.x = player.x + 15
  player.changeAnimation("walkingRight",MinerwalkRight)
}

if (keyDown(LEFT_ARROW)){
  player.x = player.x - 15
  player.changeAnimation("walking",Minerwalk)
}

if (player.x < 175){
  gameState = "mine"
}

if(player.isTouching(tool)){
  tool.visible = false
  gameState = "surface2"
}




}

else if(gameState == "surface2"){

  background(bg2)
  text(mouseX + ":"+ mouseY,50,50)
  
  player.visible = true
  
  
  if (keyDown(RIGHT_ARROW)){
    player.x = player.x + 15
    player.changeAnimation("walkingRight",MinerwalkRight)
  }
  
  if (keyDown(LEFT_ARROW)){
    player.x = player.x - 15
    player.changeAnimation("walking",Minerwalk)
  }
  
  if (player.x < 175){
    player.changeAnimation("running",Minerrun)
    gameState = "mine"
  }
  
  }



else if(gameState == "mine"){
  background(Minebg)

  



  if (keyDown(RIGHT_ARROW)){
    player.x = player.x + 15
    player.changeAnimation("runningRight",MinerrunRight)
    player.scale = 1.5
    downKey = 1
  }
  
  if (keyDown(LEFT_ARROW)){
    player.x = player.x - 15
    player.changeAnimation("running",Minerrun)
    player.scale = 1.5

    downKey = 2
  }

  if (keyDown(UP_ARROW)){
    player.y = player.y - 15
    
  }

  if (keyDown(DOWN_ARROW)){
    player.y = player.y + 15
    player.scale = 1.5
    
  }

  if (keyDown("space") && downKey == 2) {
    player.scale = 2.5
    player.changeAnimation("mining",MiningAnim)

  }
  
  
}



  drawSprites();

}

