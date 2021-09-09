class Launcher{
constructor(bA, pB){
	var options = {
		bodyA: bA,
		pointB: pB, 
		stiffness: 0.02,
		length: 10
	}
	this.pointB = pB;  
	this.launch = Constraint.create(options);
	World.add(world, this.launch);
}

fly(){
this.launch.bodyA=null;
}
attach(rishit) {
	this.launch.bodyA=rishit
}

display(){
	if(this.launch.bodyA){
		
	var pointA = this.launch.bodyA.position;
	var pointB = this.pointB
	strokeWeight(4);
	line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}   
}