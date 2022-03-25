setup(){
canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
}
    function draw() {
        image(video,0,0,300,300);
        image(clown_nose,noseX-10,noseY+10,30,10);
    }