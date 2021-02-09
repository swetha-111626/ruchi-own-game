class Shape {
    constructor(x, y) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
       this.body=Bodies.circle(x,y,50,{restitution:0.5});
        World.add(w1,this.body);
        this.r = 50;
      this.x = x;
      this.y = y;
      
    }
    clicked(name){
        var d = dist(this.x,this.y,mouseX,mouseY);
        if(d<=this.r){
            console.log(name+" clicked");
            if(name==="tiger")
            Matter.Body.setPosition(this.body, { x: 1100, y: 100 });
            else if(name==="cow")
            Matter.Body.setPosition(this.body, { x: 800, y: 100 });
            else if(name ==="snake")
            Matter.Body.setPosition(this.body, { x: 200, y: 100 });
            else 
            Matter.Body.setPosition(this.body, { x: 500, y: 100 });
        } 
    }
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  