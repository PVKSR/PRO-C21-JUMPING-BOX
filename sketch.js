var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   

    //create 4 different surfaces
rect1 = createSprite(95,600,150,50);
rect1.shapeColor="lightblue";

rect2 = createSprite(300,600,150,50);
rect2.shapeColor="red";

rect3 = createSprite(515,600,150,50);
rect3.shapeColor="yellow";

rect4 = createSprite(715,600,150,50);
rect4.shapeColor="green";

    //create box sprite and give velocity
box = createSprite(random(20,750),300,20,20);
box.velocityX = -5
box.velocityY = 5

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges=createEdgeSprites();

    //add condition to check if box touching surface and make it box

if (istouching(box,rect2)){
    box.shapeColor= "red";
    music.play();
}

if(istouching(box,rect1)){
    box.shapeColor= "lightblue";
} 
    
    if(istouching(box,rect4)){
    box.shapeColor= "green";
}


if (istouching(box,rect3)){
    box.velocityX= 0
    box.velocityY= 0
    box.shapeColor= "yellow"
    music.pause();
     music.pause();
    }

box.bounceOff(edges);
bounceoff(box,rect2);
bounceoff(box,rect1);
bounceoff(box,rect4);


    drawSprites();
}


