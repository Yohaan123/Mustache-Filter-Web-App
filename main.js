function preload() {
    mustache = loadImage("https://i.postimg.cc/44tZ4pzm/moustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}
function modelLoaded(){
    console.log("modelLoaded");
}

function draw() {
    image(video,0,0,300,300);
    image(mustache,nosex,nosey,30,30);
}

function take_snapshot(){
    save("My_MustacheFilterImage.png");
}

nosex = 0;
nosey = 0;

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        nosex = results[0].pose.nose.x - 10;
        nosey = results[0].pose.nose.y - 10;
    }
}