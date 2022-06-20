status = "";
img = "";
objects = [];

function preload() {
    img = loadImage("Bed.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    document.getElementById("num_of_obj_bed").innerHTML = "Status: Detecting Objects"
}

function modelLoaded() {
    console.log("Model loaded!!!")
    status = true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    if(status != "") {
        for(i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("num_of_obj_bed").innerHTML = "There are 4 big images in which cocossd has detected 0";
        }
    }
}