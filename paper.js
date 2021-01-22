class Paper{
    constructor(){
    
    var options = {
        restitution:0.3,
        density:1.2,
        friction:0.5
    }
    this.body= Bodies.circle(50, 400, 20,options );
    World.add(world, this.body);
         
    }
    display(){
        ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,20);
    
    }
    }