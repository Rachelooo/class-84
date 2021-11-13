canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverwidth=100;
roverheight=90;

roverx=10;
rovery=10;

roverarray=["Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg", "Mars4.jpeg", "Mars5.jpeg", "Mars6.jpeg", "Mars7.jpeg","Mars8.jpeg","Mars9.jpeg","Mars10.jpeg"];
randomnumber=Math.floor(Math.random()*10);
console.log(randomnumber);

backgroundimg=roverarray[randomnumber];
console.log("background image = "+ backgroundimg);
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
function Up(){
    if (rovery>=0)
    {
        rovery=rovery-10;
        console.log("when up arrow is pressed, x = "+ roverx + " | y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}
function Down(){
    if (rovery<=500)
    {
        rovery=rovery+10;
        console.log("when down arrow is pressed, x = "+ roverx + " | y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}
    function Right(){
        if (roverx<=700)
        {
            roverx=roverx+10;
            console.log("when right arrow is pressed, x = "+ roverx + " | y = " + rovery);
            uploadbackground();
            uploadrover();
        }
    }
    function Left(){
        if (roverx>=0)
        {
            roverx=roverx-10;
            console.log("when left arrow is pressed, x = "+ roverx + " | y = " + rovery);
            uploadbackground();
            uploadrover();
        }
    }
