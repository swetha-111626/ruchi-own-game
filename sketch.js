const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var form;
var chartimg;
var score=0;
var gameState=0;
var spoon,bag,brush,comb,bg,write,stretch,bath,numberimg;
var im1,im2,im3,im4;
var story1,story2,story3,story4;
var gs1=1;
var gs2=1;
var gs3=1;
var gs4=1;
function preload(){
        im1=loadImage("images/cow.png")
        im2=loadImage("images/tiger.png")
        im3=loadImage("images/snake.png")
        im4=loadImage("images/mouse.png")
        bath=loadImage("images/bath.png");
        chartimg=loadImage("images/number.jpg")
        spoon=loadImage("images/spoon.png");
        stretch=loadImage("images/strech.png");
        comb=loadImage("images/comb.png");
        bag=loadImage("images/school bag.png");
        bg=loadImage("images/bg.jpg");
        write=loadImage("images/write.png");
        brush=loadImage("images/brush.png");
        story1=loadImage("images/st1.jpg");
        story2=loadImage("images/st2.jpg");
        story3=loadImage("images/st3.jpg");
        story4=loadImage("images/st4.jpg");
        numberimg=loadImage("images/fruits.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  e1 = Engine.create();
  w1 = e1.world;

  createCanvas(windowWidth,windowHeight);

  form=new Form();
  form.display();
    ground = new Ground(600, 600, 1800, 20);
    ground1 = new Ground1(600, 550, 1800, 20);

    plf= new Ground1(200, 300, 200, 20);
    plf2= new Ground1(500, 300, 200, 20);
    plf3 = new Ground1(800, 300, 200, 20);
    plf4 = new Ground1(1100, 300, 200, 20);

    shp1=new Shape(200,500);
    //World.add(w1,shp1);
    shp2=new Shape(500,500);
    //World.add(w1,shp2);
    shp3=new Shape(700,500);
    //World.add(w1,shp3);
    shp4=new Shape(900,500);
    //World.add(w1,shp4);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);

  ball = new Ball(200, 200, 80, 80);
  }

function draw() {
  Engine.update(engine);
  background(bg); 
  if(gameState===1){
    form.twrbutton.hide();
    ground.display();
    box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  ball.display();

  }
  if(gameState===2){
    form.prsbutton.hide();
    form.phybutton.hide();
    stroke("black");
    image(brush,200,100,150,150);
    text("BRUSH YOUR TEETH DAILY",200,250);
    image(bath,400,90,120,150);
    text("TAKE A BATH DAILY",400,250);
    image(comb,550,90,120,150);
    text("COMB YOUR HAIR",550,250);
    image(stretch,670,90,150,150);
    text("EXCERCISE DAILY",710,250);
    image(write,850,90,150,150);
    text("PRACTICE HANDWRITING",860,250);
    //image(spoon,200,280,150,150);
    //text("EAT YOUR FOOD NEATLY",199,440);
    textSize(18);
    text("Got My Toothpaste",170,270);
    text("Got My Brush",170,290);
    text("Making sure my teeth are clean",200,310);
    text("Front and back and in between",200,330);
  }

if (gameState===3){
   image(story1,300,50,700,500);
   form.title.hide();
}

if (gameState===4){
  image(story2,300,20,700,550);
  form.title.hide();
}

if (gameState===5){
  image(story3,300,20,700,550);
  form.title.hide();
}
if (gameState===6){
  image(story4,300,20,700,550);
  form.title.hide();
}

if (gameState===7){
  form.title.hide();
  image(numberimg,20,20,300,500);
  form.input1.show();
  form.input2.show();
  form.input3.show();
  form.input4.show();
  form.input5.show();
  form.input6.show();
  form.input7.show();
  form.input8.show();
  form.submit.show();
}

if(gameState===8){
  var res=score;
  text("Score: "+res,200,20);
}
if(gameState===10){
  form.title.hide();
  image(chartimg,400,50,500,500)
}

if(gameState===9){
  Engine.update(e1);
  ground1.display();
  plf.display();
  plf2.display();
  plf4.display();
  plf3.display();
  imageMode(CENTER);
  text("TIGER",1100,330);
  text("COW",800,330);
  text("SNAKE",200,330);
  text("RAT",500,330);
  image(im2,shp1.body.position.x,shp1.body.position.y,150,150);
  image(im1,shp2.body.position.x,shp2.body.position.y,150,150);
  image(im3,shp3.body.position.x,shp3.body.position.y,150,150);
  image(im4,shp4.body.position.x,shp4.body.position.y,150,150);
  
}

}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseClicked(){
  shp1.clicked("tiger");
  shp2.clicked("cow");
  shp3.clicked("snake");
  shp4.clicked("rat");
}


