var bullet1,bullet2,bullet3,bullet4,rocket,tankBullet,tank2Bullet;

var num = 0;
var ebullet;
var ebulletGroup;

var wall;

var army_image,army1_image,army3_image,aagni_image,missileLauncher1_image,soldier_image,
soldier1_image,soldier2_image,chinnok_image,tank_image,tank2_image,INDIANFLAG_image,
sound1_sound,bomb_sound,sound2_sound;
var tank3_image,esoldier_image,esoldier1_image,esoldier2_image,esoldier3_image,esoldier4_image;
var army,army1,aagni,akash,missileLauncher1,soldier,soldier1,soldier2,chinnok,tank,
tank2,INDIANFLAG,tank3,esoldier,esoldier1,esoldier2,esoldier3,esoldier4,sound1,bomb,sound2;
function preload(){
  army_image = loadImage("army.png");
  army1_image = loadImage("army1.png");
  army3_image = loadImage("army3.png");
  soldier_image = loadImage("soldier.png");
  soldier1_image = loadImage("soldier1.png");
  soldier2_image = loadImage("soldier2.png");
  aagni_image = loadImage("aagniMissile.png");
  missileLauncher1_image = loadImage("missileLauncher1.png");
  chinnok_image = loadImage("chinnok.png");
  tank_image = loadImage("tank.png");
  tank2_image = loadImage("tank2.png");
  INDIANFLAG_image = loadImage("INDIANFLAG.png");
  sound1_sound= loadSound("sound1.mp3");
  sound2_sound= loadSound("sound2.mp3");
  bomb_sound= loadSound("bomb.mp3");
  tank3_image = loadImage("tank3.png");
  esoldier_image = loadImage("esoldier.png");
  esoldier1_image = loadImage("esoldier1.png");
  esoldier2_image = loadImage("esoldier2.png");
  esoldier3_image = loadImage("esoldier3.png");
}

function setup() {
  createCanvas(1366,645);
  bullet1 = createSprite(1400,1400,10,10);
  bullet2 = createSprite(1400,1400,10,10);
  bullet3 = createSprite(1400,1400,10,10);
  bullet4 = createSprite(1400,1400,10,10);
  rocket = createSprite(1400,1400,10,10);
  tankBullet = createSprite(1400,1400,10,10);
  tank2Bullet = createSprite(1400,1400,10,10);
  ebullet = createSprite (1400,1400,10,10);
  ebulletGroup = createGroup();

  wall = createSprite(600,300,10,1000);
  wall.visible = false;

  INDIANFLAG = createSprite (70,245,10,10);
  INDIANFLAG.addImage(INDIANFLAG_image);
  INDIANFLAG.scale = 0.7

  army = createSprite (360,310,10,10);
  army.addImage(army_image);
  army.scale = 0.7;

  army1 = createSprite (400,370,10,10);
  army1.addImage(army1_image);
  army1.scale = 0.7;

  army3 = createSprite (300,550,10,10);
  army3.addImage(army3_image);
  army3.scale = 0.5;

  soldier1 = createSprite(300,250,10,10);
soldier1.addImage(soldier1_image);
soldier1.scale = 0.7;

soldier2 = createSprite(90,75,10,10);
soldier2.addImage(soldier2_image);
soldier2.scale = 0.3;
soldier2.visible = false;

soldier = createSprite(340,445,10,10);
soldier.addImage(soldier_image);
soldier.scale = 0.7;


 aagni = createSprite (11110,11115,10,10);
 // aagni.addImage(aagni_image);
 // aagni.scale = 0.9;

  

  missileLauncher1 = createSprite (117,425,10,10);
  missileLauncher1.addImage(missileLauncher1_image);
  missileLauncher1.scale = 0.9;

  chinnok = createSprite(10,15,10,10);
  chinnok.addImage(chinnok_image);
  chinnok.scale = 1.0;
  chinnok.velocityX = 2;

  tank = createSprite(220,190,10,10);
  tank.addImage(tank_image);
  tank.scale = 0.7;

  tank2 = createSprite(250,130,10,10);
  tank2.addImage(tank2_image);
  tank2.scale = 0.7;

  tank3 = createSprite(1250,330,10,10);
  tank3.addImage(tank3_image);
  tank3.scale = 0.7;

  esoldier = createSprite (1250,430,10,10);
  esoldier.addImage (esoldier_image);
  

  esoldier1 = createSprite (1250,530,10,10);
  esoldier1.addImage (esoldier1_image);
  esoldier1.scale = 0.7;

  esoldier2 = createSprite (1250,230,10,10);
  esoldier2.addImage (esoldier2_image);
  esoldier2.scale = 0.7;

  esoldier3 = createSprite (1250,130,10,10);
  esoldier3.addImage (esoldier3_image);
  esoldier3.scale = 0.7;
}




function draw() {
  background(0);
  
  if (keyDown("UP_ARROW")){
    soldier1.y=soldier1.y-7;
    army.y=army.y-6;
    army1.y=army1.y-5;
    soldier.y=soldier.y-4;
    army3.y=army3.y-3;
  }

  if (keyDown("DOWN_ARROW")){
    soldier1.y=soldier1.y+7;
    army.y=army.y+6;
    army1.y=army1.y+5;
    soldier.y=soldier.y+4;
    army3.y=army3.y+3;
  }

  if (keyDown("LEFT_ARROW")){
    army1.x=army1.x-7;
    soldier.x=soldier.x-5;
    army.x=army.x-5;
    soldier1.x=soldier1.x-3;
    army3.x=army3.x-3;
  }

  if (keyDown("RIGHT_ARROW")){
    army1.x=army1.x+7;
    soldier.x=soldier.x+5;
    army.x=army.x+5;
    soldier1.x=soldier1.x+3;
    army3.x=army3.x+3;
  }
  edeges = createEdgeSprites();
  chinnok.bounceOff(edeges[0]);
  chinnok.bounceOff(edeges[1]);
  chinnok.bounceOff(edeges[2]);
  chinnok.bounceOff(wall);
  

  if (keyDown("SHIFT")&& num === 1){
    soldier2.visible = true;
    soldier1.visible = true;
  }

  if (keyDown("SHIFT")&& num === 1){
    soldier2.visible = true;
    army.visible = true;
  }

  if (keyDown("SHIFT")&& num === 1){
    soldier2.visible = true;
    army1.visible = true;
  }

  if (keyDown("SHIFT")&& num === 1){
    soldier2.visible = true;
    soldier.visible = true;
  }

  
  if (keyDown("SHIFT")&& num === 1){
    soldier2.visible = true;
    army3.visible = true;
  }

  else{
    soldier2.visible = false;
  }

  if(keyDown ("SPACE")){
    bullet1 = createSprite (350,210,40,10);
    bullet1.y = soldier1.y - 40;
    bullet1.x = soldier1.x;
    bullet1.velocityX = 100;
    bullet1.shapeColor = "red";
    sound1_sound.play();
  }
  if(keyDown ("SPACE")){
    bullet2 = createSprite (400,325,40,10);
    bullet2.y = army1.y - 40
    bullet2.x = army1.x;
    bullet2.velocityX = 100;
    bullet2.shapeColor = "red";
    sound1_sound.play();
  }
  if(keyDown ("SPACE")){
    bullet3 = createSprite (360,280,40,10);
    bullet3.y = army.y - 20;
    bullet3.x = army.x;
    bullet3.velocityX = 100;
    bullet3.shapeColor = "red";
    sound1_sound.play();
  }
  if(keyDown ("SPACE")){
    bullet4 = createSprite (360,520,40,10);
    bullet4.y = army3.y - 20;
    bullet4.x = army3.x;
    bullet4.velocityX = 100;
    bullet4.shapeColor = "red";
    sound1_sound.play();
  }
    


  if(World.frameCount %20 === 0){
    var randomPosition = [130,230,330,430,530];
    var rand1 = Math.round(random(0,4))
    ebullet = createSprite (1100,330,40,10);
    ebullet.y = randomPosition[rand1];
    ebullet.velocityX = -10;
    ebullet.velocityY = 0;

    ebulletGroup.add (ebullet);
  }

  if (ebulletGroup.isTouching (soldier1)){
    soldier1.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (army1)){
    army1.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (army3)){
    army3.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (army)){
    army.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (soldier)){
    soldier.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (tank)){
    tank.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (tank2)){
    tank2.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (missileLauncher1)){
    missileLauncher1.visible = false;
    num = 1
  }

  if (ebulletGroup.isTouching (aagni)){
    aagni.visible = false;
    num = 1
  }

  if (keyDown("1")){
    aagni = createSprite (60,315,10,10);
    aagni.addImage(aagni_image);
  }

  if (bullet1.isTouching(esoldier)){
    esoldier.destroy();
  }

  if (bullet1.isTouching(esoldier1)){
    esoldier1.destroy();
  }
  if (bullet1.isTouching(esoldier2)){
    esoldier2.destroy();
  }
  if (bullet1.isTouching(esoldier3)){
    esoldier3.destroy();
  }


  if (bullet2.isTouching(esoldier)){
    esoldier.destroy();
  }

  if (bullet2.isTouching(esoldier1)){
    esoldier1.destroy();
  }
  if (bullet2.isTouching(esoldier2)){
    esoldier2.destroy();
  }
  if (bullet2.isTouching(esoldier3)){
    esoldier3.destroy();
  }

  if (bullet3.isTouching(esoldier)){
    esoldier.destroy();
  }

  if (bullet3.isTouching(esoldier1)){
    esoldier1.destroy();
  }
  if (bullet3.isTouching(esoldier2)){
    esoldier2.destroy();
  }
  if (bullet3.isTouching(esoldier3)){
    esoldier3.destroy();
  }

  if (bullet4.isTouching(esoldier)){
    esoldier.destroy();
  }

  if (bullet4.isTouching(esoldier1)){
    esoldier1.destroy();
  }
  if (bullet4.isTouching(esoldier2)){
    esoldier2.destroy();
  }
  if (bullet4.isTouching(esoldier3)){
    esoldier3.destroy();
  }




  if (keyDown(ENTER)){
    rocket = createSprite (340,410,90,8)
    rocket.velocityX = 100;
    rocket.shapeColor = "blue";
  }

  if (keyDown("9")){
    tankBullet = createSprite (340,180,40,20);
    tankBullet.velocityX = 100;
    tankBullet.shapeColor = "green";

  }

  if (keyDown("A")){
    missileLauncher1.x=missileLauncher1.x -5;

  }

  if (keyDown("D")){
    missileLauncher1.x=missileLauncher1.x +5;

  }


  if (keyDown("M")&& mousePressedOver(tank3)){
  aagni.velocityX = +2;
  aagni.velocityY = -3;
}

if (keyDown("M")&& mousePressedOver(esoldier)){
  aagni.velocityX = +2;
  aagni.velocityY = -3;
}

if (keyDown("M")&& mousePressedOver(esoldier1)){
  aagni.velocityX = +2;
  aagni.velocityY = -3;
}

if (keyDown("M")&& mousePressedOver(esoldier2)){
  aagni.velocityX = +2;
  aagni.velocityY = -3;
}

if (keyDown("M")&& mousePressedOver(esoldier3)){
  aagni.velocityX = +2;
  aagni.velocityY = -3;
}




if(aagni.y<0){
 aagni.x = tank3.x;
 aagni.y = 0;
 aagni.velocityX = 0;
 aagni.velocityY = +3; 
}

    if (aagni.isTouching (tank3)){
    tank3.destroy();
    aagni.visible = false;
    bomb_sound.play();
    
    }

    if (aagni.isTouching (esoldier)){
      esoldier.destroy();
      aagni.visible = false;
      bomb_sound.play();
      
      }

      if (aagni.isTouching (esoldier1)){
        esoldier1.destroy();
        aagni.destroy();
        bomb_sound.play();
        
        }
        if (aagni.isTouching (esoldier2)){
          esoldier2.destroy();
          aagni.destroy();
          bomb_sound.play();
          
          }

          if (aagni.isTouching (esoldier3)){
            esoldier3.destroy();
            aagni.destroy();
            bomb_sound.play();
            
            }







  drawSprites();
  }