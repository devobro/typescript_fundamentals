class Car { //core members of a class in TS
	engine: string; //variables

	constructor( engine: string){ //constructor for when it's initialized
		this.engine = engine;
	}
	start(){
		alert('Engine started: ' + this.engine); //start and stop functions
	}

	stop(){
		alert('Engine stopped: ' + this.engine);
	}
}

window.onload = function (){
	var car = new Car('V8');
	car.start();
	car.stop();
}