class Dustbin{
constructor(){


this.ground1 = Bodies.rectangle(width/2, 660, 150, 10 , {isStatic:true} );
World.add(world, this.ground1);
	 this.ground2 = Bodies.rectangle(width/2-75, 650, 10, 50 , {isStatic:true} );
	 World.add(world, this.ground2);
			 this.ground3 = Bodies.rectangle(width/2+75, 650, 10, 50 , {isStatic:true} );
 			World.add(world, this.ground3);
    Engine.run(engine);
}
display(){
    rectMode(CENTER)
rect(this.ground1.position.x,this.ground1.position.y,150,10);
rect(this.ground2.position.x,this.ground2.position.y,10,50);
rect(this.ground3.position.x,this.ground3.position.y,10,50);   
}
}

