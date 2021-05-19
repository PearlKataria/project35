//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250)
  dog.addImage(dogImg1)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  dog.scale=0.15;
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg)
}
  drawSprites();
  textSize(20);
  fill("lightyellow");
  text("Note:Press up arrow key to feed Dog milk!",100,30);
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;

    }else{
      x=x-1;
    }
    database.ref("/").update({
      Food:x 
    })
  }


