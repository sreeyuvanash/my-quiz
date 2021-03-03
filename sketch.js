var form,game,player;
var gameState = 0;
var playerCount,allplayerCount,database;
var back1,back2,back3,back4;
var sree
var backgrounds
function preload(){
back1 = loadImage("back1.png")
back2 = loadImage("win.png")
back4 = loadImage("loose.png")
}
function setup(){
  canvas = createCanvas(1000,600);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start()

  back3 = createSprite(500,300)
  back3.addImage("back2",back2)
  back3.scale=0.7
  back3.visible=false;

  sree = createSprite(500,300)
  sree.addImage("back4",back4)
  sree.scale=0.7
  sree.visible=false;
}


function draw(){
  background(back1);

 
  //if (gameState===0){
  //}
  drawSprites();
}

