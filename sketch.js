function setup() {
    createCanvas(600, 600);
    background("purple")
  }
  
  function draw() {
  
   stroke("blue");
    fill("pink");
    
    //console.long(mouseIsPressed)
    
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
    }
  
  }