noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3wVN4wF4/Clown-nose-large.webp');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('posenet is ready');
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,70,70);
}
function take_snapshot(){
    save('clown.png');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y-25;
        console.log("nose X ="+noseX);
        console.log("nose Y ="+noseY);
}}