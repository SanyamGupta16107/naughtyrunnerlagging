//images
var bg ;
var playerrunning,playerstanding,playerfallen
var dog;
var car1,car2,car3,car4,car5,car6,car7;
var music;

//sprite
var bgsprite;
var player;
var Dog;
var car;

var y;

function preload() {
  bg=loadImage('assets/bg.png');
  playerrunning=loadAnimation('assets/player/running1.png','assets/player/running2.png');
  playerstanding=loadImage('assets/player/standing.png');
  playerfallen=loadImage('assets/player/fallen.png');

  car1=loadImage('assets/vehicle/c1.png');
  car2=loadImage('assets/vehicle/c2.png');
  car3=loadImage('assets/vehicle/c3.png');
  car4=loadImage('assets/vehicle/c4.png');
  car5=loadImage('assets/vehicle/c5.png');
  car6=loadImage('assets/vehicle/c6.png');
  car7=loadImage('assets/vehicle/c7.png');

  dog=loadImage('assets/dog/dog.png');
}


function setup() {
   
  createCanvas(windowWidth,windowHeight);
  
  y=0;
  
  
  player=createSprite(windowWidth/2,windowHeight-100);
  player.scale=1.5;
  player.addAnimation("running",playerrunning);
  player.velocityY=-2;

  Dog=createSprite(windowWidth/2,player.y+150);
  Dog.velocityY=-2;
  Dog.addImage(dog);
  Dog.scale=1.5;

  //player.addAnimation("standing",playerstanding);
}

function draw() {
  background('gray'); 

  bgsprite=createSprite(windowWidth/2,y,windowWidth,windowHeight*2);
  bgsprite.addImage(bg);
  bgsprite.velocityY=4;
  bgsprite.scale=1.25;
  if(bgsprite.y>windowHeight-200){
    bgsprite.y=0;

  }

  //imageMode(CENTER);
  //bgsprite=image(bg,windowWidth/2,y,windowWidth,windowHeight*2);
  
  

  //y=y+2;
  //if(y>400){
    //y=0;
  //}
  
  

  

  camera.position.x=windowWidth/2
  camera.position.y=player.y;

  spawnVehicles();
  drawSprites();
}

function spawnVehicles(){
  if(frameCount%225===0){
    var rand=Math.round(random(1,3));
    if(rand===1){
      car=createSprite(windowWidth/2,0);}
      else if(rand===2){
        car=createSprite(150,0);
      }
      else if(rand===3){
        car=createSprite(windowWidth-150,0)
      }
      var rand1=Math.round(random(1,7))
      switch (rand1){
        case 1 : car.addImage(car1);
        break;
        case 2 : car.addImage(car2);
        break;
        case 3 : car.addImage(car3);
        break;
        case 4 : car.addImage(car4);
        break;
        case 5 : car.addImage(car5);
        break;
        case 6 : car.addImage(car6);
        break;
        case 7 : car.addImage(car7);
        break;
        default:
        break;

      }
      
      car.velocityY=2;
      car.scale=2;
      car.lifetime=windowHeight/2;
    }
    
}