var a;
var circles=[];
var polygon,polygon_img;
var ground1,slingshot;
var box1,box2,box3,box4,box5,box6;
function preload(){
  polygon_img=loadImage("polygon.png")
}
function setup() {
  createCanvas(800,800);
  stroke(255)
  //ground1= new Ground(200,700,100,10)
  box1 = new Box(150,700,30,30);
  box2 = new Box(210,700,30,30);
  box3 = new Box(270,700,30,30);
  box4 = new Box(350,640,30,30);
  box5 = new Box(410,660,30,30);
  box6 = new Box(380,520,30,30);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/3)

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);


slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  //camera.zoom=camera.zoom+1
  background("black");  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
      slingshot.fly()
  }
  function keyPressed(){
if(keyCode===32){
  attach() 
}
  }