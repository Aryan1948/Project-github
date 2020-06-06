class Bird{
    //used to set values 
    constructor(x,y){
    var option={restitution:0.8,
    friction:1,
    density:1}
    this.body=Bodies.rectangle(x,y,70,70,option)
    this.width=70;
    this.height=70;
    World.add(world,this.body);
    }
   display(){

  var pos =this.body.position;
  pos.x=mouseX;
  pos.y=mouseY;
    var angle = this.body.angle;
    //push and pop is used to put certain properties inside it
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    //used to give color
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
