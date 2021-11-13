canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverwidth=100;
roverheight=90;

roverx=10;
rovery=10;

backgroundimg="mars.jpg";
roverimg="rover.png";

function add(){
    backgroundimgN=new Image();
    backgroundimgN.onload=uploadbackground;
    backgroundimgN.src=backgroundimg;
   
    roverimgN=new Image();
    roverimgN.onload=uploadrover;
    roverimgN.src=roverimg;
}

function uploadbackground(){
ctx.drawImage(backgroundimgN,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimgN,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='37')
{
    Left();
    console.log("Left");
}
if (keypressed=="39")
{
    Right();
    console.log("Right");
}
if (keypressed=="38")
{
    Up();
    console.log("Up");
}
if (keypressed=="40")
{
    Down();
    console.log("Down");
}
}