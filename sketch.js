var bimg,bimg1;
var screen=0;


function preload(){
    bimg=loadImage("hen.png");
    bimg1=loadImage("bimg2.png");
}

function setup(){
    createCanvas=(windowWidth,windowHeight);
}
function draw(){
    background(bimg);
if (screen==0){
    startScreen();
}


}
function startScreen(){
    background(bimg1);
    fill("black");
    textAlign(CENTER);
    textSize(50);
    text("catch me if you can hehe!!!",width/2,height/3);
}
