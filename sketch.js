function setup () {
    createCanvas(windowWidth, 1000);
    
}

function draw(){
    background(255, mouseX*.1, mouseY*.1);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 40, 40);
}