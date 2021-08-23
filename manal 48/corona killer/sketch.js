
var gameState="intro";
var bg1,bg1Img;
var playbg,playBgImage;
var button ,buttonImg;
var player,playerImg;
var playerStop;
var start,startImage;
var rock1,rock1Img,rock2,rock2Img,rock3,rock3Img,rock4,rock4Img;
var rock,rocksGroup;
function preload(){
   bg1Img=loadImage("Images/bg1.png");
   buttonImg=loadImage("Images/button1.png");
   playBgImage=loadImage("Images/playbg3.jpg");
   playerImg=loadAnimation("Images/pm1.png","Images/pm2.png");
   playerStop=loadAnimation("Images/pm2.png");
   startImage=loadImage("Images/startbutton.jpg");
   rock1Img=loadImage("Images/rock1.jpg");
   rock2Img=loadImage("Images/rock2.jpg"); 
   rock3Img=loadImage("Images/rock3.jpg");
   rock4Img=loadImage("Images/rock4.jpg");
}


function setup(){
createCanvas(windowWidth,windowHeight);
intro=createSprite(windowWidth/2,windowHeight/2,width,height);
intro.addImage(bg1Img);
intro.scale=3.5;

button=createSprite(windowWidth/2,windowHeight/2);
button.addImage(buttonImg);
button.scale=0.9;

playbg=createSprite(windowWidth/2,windowHeight/2);
playbg.addImage(playBgImage);
playbg.visible=false;
playbg.scale=2.1;

player =createSprite(windowWidth/2,windowHeight/2+160);
//player.addAnimation("moving",playerImg);
player.addAnimation("moving",playerImg);
player.visible=false;
player.scale=3;


start=createSprite(windowWidth/2-100,windowHeight/2);
start.addImage(startImage);
start.scale=0.5;


rocksGroup=new Group();

}

function draw(){
 background("white");
 
 if (gameState==="play" ){
  background("grey");
  intro.visible=false;
  button.visible=false;
  player.visible=true;
  playbg.visible=true;
  start.visible=true;
 // gameState="play2"
// Start()
  if(mousePressedOver(start)){
     gameState="play2"
  }

  
 }

 
 
 if(gameState=="play2"){
      start.visible=false;
      playbg.velocityY=5;
    // console.log(playbg.y);
    
      Rocks();
  

      if(playbg.y>1000){
        playbg.y=playbg.height/2;
      }
          if (keyDown(RIGHT_ARROW)){
            player.addAnimation("moving",playerImg);
            player.x+=3;
            player.changeAnimation("moving",playerImg);
          }
          if (keyDown(LEFT_ARROW)){
            player.addAnimation("moving",playerImg);
            player.x-=2;
            player.changeAnimation("moving",playerImg);
          }
    }
  
    
       
     drawSprites();

     if(gameState=="intro"){
      //background("white");
      intro.visible=true;
      button.visible=true;
      playbg.visible=false;
      start.visible=false;
      
      fill(0,100,0);
      textSize(60);
      text("𝓒𝓞𝓡𝓞𝓝𝓐 𝓚𝓘𝓛𝓛𝓔𝓡",windowWidth/2-270,windowHeight/2-210);
      fill(255,215,0);
      textSize(40);
      text("𝐂𝐋𝐈𝐂𝐊 𝐓𝐎 𝐏𝐋𝐀𝐘",windowWidth/2-150,windowHeight/2+100);
      fill(60,179,113);
      textSize(50);
      text("ℜ𝔲𝔩𝔢𝔰:-",windowWidth/2-70,windowHeight/2+140);
      fill(233,150,122);
      textSize(50);
     text("𝖘𝖜𝖎𝖕𝖊 𝖙𝖔 𝖒𝖔𝖛𝖊",windowWidth/2-150,windowHeight/2+180);
     fill(0,139,139);
      textSize(40);
     text("𝕿𝖍𝖊𝖎𝖗 𝖆𝖗𝖊 𝖙𝖍𝖗𝖊𝖊 𝖑𝖎𝖛𝖊𝖘 ",windowWidth/2-190,windowHeight/2+220);
     fill(188,143,143);
     textSize(40);
    text(" 𝕴𝖋 𝖞𝖔𝖚 𝖙𝖔𝖚𝖈𝖍 𝖈𝖔𝖗𝖔𝖓𝖆 𝖇𝖆𝖈𝖙𝖊𝖗𝖎𝖆 𝖞𝖔𝖚𝖗 𝖑𝖎𝖛𝖊 𝖜𝖎𝖑𝖑 𝖉𝖊𝖈𝖗𝖊𝖆𝖘𝖊.",windowWidth/2-450,windowHeight/2+260);
     fill(205,92,92);
      textSize(50);
      text("𝖒𝖆𝖉𝖊 𝖇𝖞 𝖒𝖆𝖓𝖆𝖑 𝖟𝖆𝖗𝖊𝖊𝖓",windowWidth/2-250,windowHeight/2+300);
    
      //image(bg1Img,windowWidth/2,windowHeight/2,width,height);
      if (mousePressedOver(button)){
        gameState='play';
       // Rocks();
      }
      }
  
     
       
      }

  
  

  function Rocks(){
      if (frameCount % 60 === 0) {
        rock = createSprite((random(windowWidth/2-300,windowWidth/2+300)),100,100,10,10);
        rock.velocityY=4;
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: rock.addImage("rock1",rock1Img);
            break;
            case 2: rock.addImage("rock2", rock2Img);
            break;
            case 3: rock.addImage("rock3", rock3Img);
            break;
            case 4: rock.addImage("rock4", rock4Img);
            break;
        }
        rocksGroup.add(rock);  
        rock.depth=player.depth;
        player.depth=player.depth+1
  }
   
  }










