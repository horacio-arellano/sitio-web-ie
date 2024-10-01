function setup() {
  createCanvas(650, 650);
  noStroke();
    background(000);
}
sketch = draw
  function draw () 
    {
    for (let i = 0; i < circle.length; i++) {
    let circle = circles[i];
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size, circle.size);
    }
      
      
  
  fill("white");
      
  circle (500, 400, 80);
  circle (500, 300, 80);
  circle (500, 100, 80);
  circle (500, 200, 80);
      
  circle (400, 400, 80);
  circle (400, 300, 80);
  circle (400, 100, 80);
  circle (400, 200, 80);
      
  circle (300, 100, 100);
  circle (300, 200, 100);
  circle (300, 400, 100);
  circle (300, 300, 100);
      
  circle (200, 400, 84);
  circle (200, 200, 84);
  circle (200, 100, 84);
  circle (200, 300, 84);
      
  circle (120, 300, 60);
  circle (120, 200, 60);
  circle (120, 400, 60);
  circle (120, 100, 60);
      
  circle (55, 300, 30);
  circle (55, 200, 30);
  circle (55, 400, 30);
  circle (55, 100, 30);




  
  
  this.x = random( sketch.width=59 ) 
  this.y = random( sketch.height, sketch.height * 2 )
    
    if (mouseIsPressed){
        fill(random(255), random(255), random(255)); 
    circle(300, 300, 100)
    
    fill(random(255), random(255), random(255)); 
    circle(300, 400, 100)
    
    fill(random(255), random(255), random(255)); 
    circle(400, 300, 100)
      
         fill(random(255), random(255), random(255)); 
    circle(500, 400, 100)
    
    fill(random(255), random(255), random(255)); 
    circle(500, 300, 100)
      
    fill(random(255), random(255), random(255)); 
    circle(400, 100, 100)
    
    fill(random(255), random(255), random(255)); 
    circle(400, 400, 100)
    
      
    fill(random(255), random(255), random(255)); 
    circle(300, 300, 100)
    
    fill(random(255), random(255), random(255));
    circle(120, 300, 60)
    
    fill(random(255), random(255), random(255));
    circle (300, 100, 100);
        circle (300, 200, 100);
    fill(random(255), random(255), random(255));
    circle (500, 400, 97);
    
    fill(random(255), random(255), random(255));
    circle (500, 300, 97);
    
    fill(random(255), random(255), random(255));
    circle (400, 300, 97);
      
    fill(random(255), random(255), random(255));
    circle (400, 200, 97);
      
    fill(random(255), random(255), random(255));
    circle (400, 300, 97);
      
    fill(random(255), random(255), random(255));
    circle (500, 200, 97);  
      
    fill(random(255), random(255), random(255));
    circle (500, 100, 97);
    
    fill(random(255), random(255), random(255));
    }
    else{
      fill("black");
      circle(mouseX, mouseY, 60);
    }
    
  }