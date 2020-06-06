class Pig{
constructor(x,y){ 
var option = {restitution:0.7,
    friction:1,
    density:1

}
this.body=Bodies.rectangle(x,y,70,70,option);
World.add(world,this.body);
this.width=70;
this.height=70;
}
display(){

    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }