var backIm,ground;
var trex,trexIm,trex_collided;
var database
var gameState=0;
var game

function preload(){
backIm=loadImage("background.jpg")
trexIm= loadAnimation("trex1.png","trex3.png","trex4.png");
trex_collided = loadAnimation("trex_collided.png");


}
function setup(){
var canvas=createCanvas(1200,600)
trex = createSprite(50,460,20,50);
ground=createSprite(500,520,2000,20)
  database = firebase.database();
  game=new Game()
  trex.addAnimation("running", trexIm);

}

function draw(){
background(backIm)
if(keyDown("space") ) {
    game.update(1);
    }
drawSprites()
}

