function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(135, 206, 235); // Set the background to a sky blue color
  
    // Draw the water
    fill(0, 105, 148);
    rect(0, 300, width, 100);
  
    // Draw the boat body
    fill(139, 69, 19); // Brown color for the boat
    arc(200, 300, 200, 100, PI, TWO_PI);
  
    // Draw the mast
    fill(255);
    rect(195, 200, 10, 100);
  
    // Draw the sail
    fill(255);
    triangle(200, 200, 150, 300, 200, 300);
  }
  