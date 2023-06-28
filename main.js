noseX=0;
noseY=0;

function preload() {
    lipstick=loadImage("https://i.postimg.cc/SKGcFH1F/lipstick-image-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " +noseX+"noseY = "+noseY);
    }
}

function draw() {
    image(video,0,0,300,300);

    image(lipstick, noseX, noseY, 45,45)
}

function take_snapshot() {
    save("picture.png");
}