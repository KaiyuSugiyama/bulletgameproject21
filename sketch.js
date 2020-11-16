var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30, 52);
  thickness = random(22,83);
  bullet.velocityX = speed;
}
 
function draw() {
  background(0,0,0);  
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(bullet.isTouching(wall)) {
    console.log("cartouchededge");
    if(damage <= 10) {
      bullet.shapeColor = "green";
    }
    if(damage > 10) {
      bullet.shapeColor = "red";
    }
  }
  
  drawSprites();
  bullet.collide(wall);
}
function hasCollided(bullet, wall) {
  bullet
}