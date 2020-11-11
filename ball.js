class ball{
  constructor(x, y,radius) {
      var options = {
           isStatic:false,
          restitution:0.5,
          friction:1.0,
          density:1.0
      }
      this.radius = radius;
      this.body = loadImage("paper2.png");
      this.body = Matter.Bodies.circle(x, y,radius, options);
      World.add(world, this.body);
    }
    display()
    {

    //  Engine.update(engine);
    //  push();
       ellipseMode(RADIUS)
       fill("magenta")
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
     // pop();
      }
}