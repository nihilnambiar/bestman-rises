class Drops{
    constructor(x,y){
        var options={
        isStatic:false,
        restitution:0.4,
        friction:0,
    }
    this.body = Bodies.circle(x,y,5,options);
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    fill("blue");
    translate(pos.x,pos.y);
    rotate(angle)
	ellipseMode(CENTER);
    ellipse(0, 0,5,5);
    pop();
    
}
update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}
}