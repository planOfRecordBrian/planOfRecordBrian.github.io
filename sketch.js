
function sketch_testDiv(p) {
    p.setup = function() {
    p.createCanvas(p.windowWidth - (p.windowWidth*.05), 1000);
    
}

p.draw = function(){
    p.background(255, p.mouseX*.1, p.mouseY*.1);
    p.noStroke();
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 40, 40);
}

}

new p5(sketch_testDiv, "testDiv")