//Getting Started with TypeScript
// check out "Structured JavaScript Code" course, to help you learn to code clean vanilla JS.

//"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript." ~typescriptlang.org
// Supports standard JavaScript code.
// Provides static typing
// Encapsulation through classes and modules
// Support for constructors, properties, functions
// Define interfaces: built in form validation!
// => function support (lambdas)
// Intellisense and syntax checking

//TypeScript Compiler
// TypeScript --> tsc first.ts --> Vanilla JavaScript

class Greeter{
	greeting: string;
	constructor ( message: string ){
		this.greeting = message;
	}
	greet(){
		return "Hello, " + this.greeting;
	}
}
// Generates this Vanilla JS through compiler
// ||
// ||
// ||
// VV

var Greeter = (function(){
	function Greeter(message){
		this.greeting = message;
	}
	Greeter.prototype.greet = function(){
		return "Hello, " + this.greeting;
	};
	return Greeter;
})();

//TypeScript Syntax Rules
// TypeSript is a superset of JavaScript
// Follows the same syntax rules:
// o {} brackets define code blocks
// o Semi-colons end code expressions
//
// JavaScript keywords:
// o for
// o if
// o More..
//
// Important Keywords and Operators
// class - Container for members such as properties and functions
// constructor - Provides initializationality in a class Class
// exports - Export a member from a module
// extends - Extend a class or interface
// implements - Implement an interface
// imports - Import a module
// interface - Defines code contract that can be implemented by types
// module / namespace - Container for classes and other code
// public/private - Member visibility modifiers
// ... - Rest parameter syntax
// => - Arrow syntax used with definitions and functions
// <typeName> - <> characters use to cast/convert between types
// : - Separator between variable/parameter names and types

//Code Hierarchy
// very defined, built-in hierarchy
// top level = module/namespace
// second level = Class
// second and a half - Interface (drives consistency among multiple classes)
// third = fields, constructor, properties, functions

//Compile
// after installing typescript node package
// go to terminal and type "tsc (the filename of the .ts file)", in the directory of
// that .ts file

//Variables: Type Annotations
// var num: number = 2;
// Declare it --> Name it --> Annotate it(:) --> Type it --> Set it;
// var any1; --> Type "any", base Type for all variables
// var num1: number; --> not initializing to anything but are setting Type
// var num2: number = 2;
// var num3 = 3; --> Type Inference(number)
// var num4 = num3 + 100; --> Type Inference(number)
// var str1 = num1 + 'some string'; --> Type Inference(number)

//Dynamic and Static Typing
// copying JS code will work and it'll all be dynamic typing
// or you can give your variables static types via TS
// in Static Typing, Type safety is a compile-time feature
// in Dynamic Typing, Type safety happens at run-time debugging.
// declare keyword creates an ambient declaration (reference to a variable in a separate file) - 
// which references lib.d.ts by default, or you can declare the path with a reference at top
// Example - /<reference path="jquery.d.ts">
// then these variables have Static Typing from that library, without having them declared

/<referenece path="jwquery.d.ts">

declare var $;

var data = "Hello John";

$("div").text(data);

//Compile Time or Run Time
module demo_02_03 {
	var person : string;
	person = 'John Papa'; //defaults to 'any' type because it can't determin from the var call
	console.log(person.substring(1,4));

	person = { //because we declared the type, this misnamed object will display and error
		name: 'Colleen',
		age: 25
	};

	console.log(person.substring(1,4));
}
//helps you to find problems with your code before you even press run

//Any Type

var data: any;
var info;

//Primitive Types
// number
var age: number = 2;
var score: number = 98.25;
var rating = 98.25
// boolean
var hasData: boolean = true;
var isReady = true;
// string
var firstName: string = 'John';
var lastName = 'Papa'
// Arrays and Indexers
var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];
var firstPerson: string;
firstPerson = names[0]; //indexer
// null = subtype of all primitives(except void and undefined)
var num: number = null;
var str: string = null;
var isHappy: boolean = null;
var customer: {} = null;
var age: number;
var customer = undefined;
// undefined = subtype of all types
var quantity: number;
var company = undefined;

//Assigning types

module demo_02_05{
	//any
	var data: any;
	var info;
	var doSomething = function(arg){
		return arg;
	}
	// var x = doSomething(5);

	//primitives
	var age: number = 21;
	var score: number = 34.56;
	var rating = 99.99;

	var hasData: boolean = true;
	var isReady = true;
	var isBald = function(){
		return 'yes';
	}
	var hasHair = !!isBald();

	var firstName: string = 'John';
	var lastName = 'Papa';
	// string array
	function getArrayLength(x: string[]){
		var len :number = x.length;
		return len;
	}

	var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];
	var firstPerson: string = names[0];
	console.(getArrayLength(names));

	// null
	var guitarSales: any = null;
	var animal = null;
	var orderDate: Date = null;

	//undefined
	var quantity: number;
	var company = undefined;
}

//Object types
// o Functions, class, module, interface, and literal types
// May contain
// o Properties
// oo public or private
// oo required or optional
// o Call signatures
// o Construct signatures
// o Index signatures

// object literals
var square = { h: 10, w: 20};
var points: Object = { x: 10, y: 20}; //Object keyword explicitly defines as object

// Functions (also objects)
var multiply = function (x: number){
	return x * x;
};

var multiplyMore: Function; //Function keyword explicitly defines as function
multiplyMore = function (x: number){
	return x * x;
};

// objects
var points1 = { x: 10, y: 20 };
var x = points1.x;

var points2: {};
points2 = { x: 10, y: 20 };

var points3: Object = { x: 1};
points3 

var rectangle = {
	h: 10,
	w: 20,
	calcArea: function (){
		return this.h * this.w;
	}

	console.log( 'rect area = ' + rectangle.calcArea());

};

// Functions
var squareIt1 = function(x: number){
	return x * x;
};
var val1 = squareIt1('2');
console.log('squareIt1 = ' + val1);
val1 = squareIt1('John');
console.log('squareIt1 = ' + val1);

var squareIt = function (
	rect: { h: number; w?: number; }){ //? means it is an optional parameter
	if(rect.w === undefined){
		return rect.h * rect.h;
	}
	return rect.h * rect.w;
}

var sq1: number = squareIt({h: 10});
console.log('rectangle h and w of 10 = ' + sq1);
var sq2: string = squareIt({h:10, w:40}); //error
console.log('rectangle h and w of 10 and 40 = ' + sq2);

// Fuctions 2
// o Parameter types (required and optional)
// o Arrow function expressions
// oo Compact form of function expressions
// oo Omit the function keyword and return for values!
// oo Have scope of "this"
// o Void
// oo Used as the return type for functions that return no value

// Arrow Function Expressions
var myFunc = function (h: number, w: number){
	return h * w;
};
// ==
// ==
var myFunc = (h: number, w: number) => h * w; //Omit the function keyword, Compact return statement

// void - used as the return type for functions that return no value
var greetMe: (msg: string) => void;

greetMe = function (msg){
	console.log(msg);
};

greetMe('Hello!');

// Functions 3
module demo_02_07 {
	var squareItSimple = function(h: number, w: number){
		return h * w;
	}

	var squareItSimplest = (h: number, w: number) => h * w;

	var helloWorld: (name?: string) => void;
	helloWorld = (name?: string) => {
		console.log('Hello ' + (name || ' unknown person'));
	}
	helloWorld();
	helloWorld('John');


	var squareIt:
	 (rect: {h: number, w?: number;}) => number;

	 var rectA = { h: 7 };
	 var rectB = { h: 7, w: 12};

	 squareIt = function (rect){
	 	if (rect.w === undefined){
	 		return rect.h * rect.h;
	 	}

	 		return rect.h * rect.w;
	 }

	 console.log(squareIt(rectA));
	 console.log(squareIt(rectB));

}

// Functions 4

module demo_02_03{

	interface SquareFunction{
		(x: number): number;
	}

	var squareItBasic: SquareFunction =
	 	(num) => num * num;

	 //interface rectangle

	 interface Rectangle {
	 	h: number;
	 	w?: number;
	 }

	var squareIt: (rect: Rectangle) => number;
	 // (rect: {h: number, w?: number;}) => number;

	 var rectA = { h: 7 };
	 var rectB = { h: 7, w: 12};

	 squareIt = function (rect){
	 	if (rect.w !== undefined){
	 		return rect.h * rect.h;
	 	}

	 		return rect.h * rect.w;
	 }

	 console.log(squareIt(rectA));
	 console.log(squareIt(rectB));

	 interface Person {
	 	name: string;
	 	age?: number;
	 	kids: number;
	 	calcPets: () => number;
	 	makeYounger: (years: number) => void;
	 	greet: (msg: string) => string;
	 }

	 var p: Person = {
	 	// favoriteMovie: 'LOTR',
	 	name: 'Colleen',
	 	age: 40,
	 	kids: 4,
	 	calcPets: function(){
	 		return this.kids * 2;
	 	},
	 	makeYounger: function (years: number){
	 		this.age -= years;
	 	},
	 	greet: function( msg: string ){
	 		return msg + ', ' + this.name;
	 	}

	 	var pets = p.calcPets();
	 	console.log(pets);

	 	p.makeYounger(15);
	 	var newAge = p.age;
	 	console.log(newAge);

	 	var msg = p.greet('Good day to you');
	 	console.log(msg);

	 }

	 	interface SessionEval {
	 		addRating: (rating: number) => void;
	 		calcRating: number;
	 	}


	 	function sessionEvaluator(): SessionEval{
	 		var ratings: number [] = [];
	 		var addRating = (rating: number = 5){
	 			ratings.push(rating);
	 	 		};
	 	 	var calcRating = () => {
	 	 		var sum: number = 0;
	 	 		ratings.forEach(function (score){
	 	 			sum += score;
	 	 		});
	 	 		return sum / ratings.length;
	 	 	};

	 	 	return {
	 	 		addRating: addRating,
	 	 		calcRating: calcRating
	 	 	}
	 	}


	 	var s = sessionEvaluator();
	 	s.addRating(4);
	 	s.addRating(5);
	 	s.addRating(5);
	 	s.addRating(5);
	 	console.log(s.calcRating());
}

//Classes
// a class is a container that encapsulates code, such as functions or variables, into
// reusable containers that you can use throughout your code
// it's like a tupperware that you throw things into which are related

//TypeScript Class Members
// Fields - are variables 
// Constructors - initilize an object, so pass in starter data that the app needs at runtime
// Properties - ways we can get or set different field values, they act as filters
// Functions - action which we want to perform

//Defining Classes
class Car { //Classes act as containers that encapsulate code
	//Fields

	//Constructor

	//Properties

	//Functions
}

//Defining Constructors
class Car {
	engine: string; //field

	constructor(engine: string){ //Constructors are used to initialize fields
		this.engine = engine;
	}
}

//Class simplified

class Car {
	constructor(public engine: string){} //inserting 'public' auto-generate the field (like above)
}

//Adding Functions

class Car {
	engine: string;

	constructor(engine: string){
		this.engine = engine;
	}

	start(){
		return "Started " + this.engine;
	}

	stop(){
		return "Stopped " + this.engine;
	}
}

//Defining Properties
// Properties act as filters and can have get or set blocks

class Car {
	private _engine: string; //everything is public by default, so if want to make this inaccessible
							// then add 'private' and the "_" is just to remind you it's private

	constructor(engine: string){
		this.engine = engine;
	}

	get engine(): string {
		return this._engine;
	}
	set engine(value: string){
		if(value == undefined) throw 'Supply an Engine!';
		this._engine = value;
	}
}

//Using Complex Types
// class Engine, in this example is a complex type

class Engine {
	constructor(public horsePower: number,
				public engineType: string){}
}

class Car {
	private _engine: Engine;

	constructor(engine: Engine){
		this.engine = engine;
	}

	...
}

//Instantiating a Type
// Types are instantiated using the "new" keyword

var engine = new Engine(300, 'V8');
var car = new Car(engine);


//Defining Classes 2

class Engine {
	constructor(public horsePower: number, public engineType: string)
}

class Car {
	private _engine: Engine;

	constructor(engine: Engine){
		this.engine = engine;
	}

	get engine() : Engine {
		return this._engine;
	}

	set engine(value: Engine){
		if( engine == undefined) throw 'Please supply an engine';
		this._engine = value;
	}

	start() : void {
		alert('Car engine started ' + this._engine.engineType);
	}
}

window.onload = function(){
	var engine = new Engine(300, 'V8')
	var car = new Car(engine)
	alert(car.engine.engineType);
	car.start();

};

//Properties Limitations
// get and set may not work in older browsers *shrug* whatever

//Casting Types
// convert from one type to a different type

var table : HTMLTableElement = //this will fail
	document.createElement('table'); //because this creates and HTML element not HTML table element

var table : HTMLTableElement = 
	<HTMLTableElement>document.createElement('table');

//Type Definition Files
// As you work with the DOM or other libraries, you need a Type Definition file (*.d.ts file)
// lib.d.ts is built-in out of the box for the DOM and JavaScript

//HelloWorld Calculator

window.onload = function(){
	var calc = new Calculator('X', 'Y', 'Output');
};

class Calculator {
	private x : HTMLInputElement; //from lib.t.ts file
	private y : HTMLInputElement;
	private output : HTMLSpanElement;

	constructor(xId: string, yId: string, outputId: string){
		this.x = <HTMLInputElement>document.getElementById(xId); //casting required here because
		this.y = <HTMLInputElement>document.getElementById(yId); //getElementById only returns a
		this.output = <HTMLSpanElement>document.getElementById(outputId); //regular element not input
		this.wireEvents();
	}

	wireEvents(){
		document.getElementById('Add').addEventListener('click',
			event => {
				this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value))
			});
		document.getElementById('Subtract').addEventListener('click',
			event => {
				this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value))
			});
	}
	add(x: number, y : number) {
		return x + y;
	}

	subtract(x : number, y : number){
		return x - y;
	}
}

//Extending Types
// writing a base class and then inheriting that functionality to make a child class 
// say we had an Auto class with fields specific to any automobile
// then we could extend that type to Truck or SUV classes
//Extending a Type
// Types can be extended using the TypeScript "extends" keyword
class ChildClass extends ParentClass {
	constructor() { //if you want to put a constructor in a child class, then you have to call
		super(); //the constructor of the parent class, here "super()" is calling the parent
	}
}
// more robust example of type extension
// class Auto {
// 	engine: Engine;
// 	constructor(engine: Engine) {
// 		this.engine = engine;
// 	}
// }

// class Truck extends Auto {
// 	fourByFour: boolean;
// 	constructor(engine: Engine, fourByFour: boolean){
// 		super(engine);


// 		this.fourByFour = fourByFour;
// 	}
// }

//Type Extension 2
class Engine {
	constructor(public horsePower: number, public engineType: string){}

	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}
}

class Accessory {
	constructor(public accessoryNumber: number, public title: string){}
}

class Auto {
	private _basePrice: number;
	private _engine: Engine;
	make: string;
	model: string;
	accessoryList: string;

	constructor(basePrice: number, engine: Engine, make: string, model: string){
		this._engine = engine;
		this._basePrice = basePrice;
		this.make = make;
		this.model = model;
	}

	calculateTotal() : number {
		var taxRate = .08;
		return this.basePrice + (taxRate * this.basePrice);
	}
	//addAccessories(new Accessory(), new Accessory(...)); 
	addAccessories(...accessories: Accessory[]){ //rest parameter, allows passing in values separated
		this.accessoryList = ''; //by commas
		for (var i = 0; i < accessories.length; i++){
			var ac = accessories[i];
			this.accessoryList += ac.accessoryNumber + ' ' + ac.title + ' <br />';

		}
	}

	getAccessoryList(): string {
		return this.accessoryList;
	}

	get basePrice(): number {
		return this._basePrice;
	}

	get engine(): Engine {
		return this._engine;
	}

	set engine(value: Engine){
		if (value == undefined) throw 'Please supply an engine.';
		this._engine = value;
	}
}

class Truck extends Auto {
	bedLength: string;
	fourByFour: boolean;

	constructor(basePrice: number, engine: Engine, make: string, model: string,
				bedLength: string, fourByFour: boolean){
		super(basePrice, engine, make, model); //what gets passed up to the parent object
		this.bedLength = bedLength;
		this.fourByFour = fourByFour;
	}
 }
window.onload = function(){
	var truck = new Truck(40000, new Engine(300, 'V8'), 'Chevy', 'Silverado',
				'Long Bed', true);
	truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4312, 'Towing package'));
	truck.engine.start((status: boolean, engineType: string) => {
		alert(engineType + ' was started');
	})
};

//Using Interfaces
// Interfaces are code contracts, reusable functions in different classes
//Defining an Interface
// Interfaces provide a way to define a 'contract' that other objects must implement

interface IEngine { //IEngine Interface defines 2 members
	start(callback: (startStatus: boolean,
			engineType: string) => void) : void; //start() doesn't return any data
	stop(callback: (stopStatus: boolean,
			engineType: string) => void) : void; 
}

// start() accepts the callback function as a parameter
// callback is not a primitive but a callback function.
// callback ust have two parameters, a string and a boolean and it doesn't return anything
// either, hence 'void'.

//Optional Members in an Interface
interface IAutoOptions {
	engine: IEngine;
	basePrice: number;
	state: string;
	make?: string; //optional member
	model?: string; //optional member
	year?: number; //optional member
}

//Implementing an Interface
// once you define a contract, then a class must implement it
// and the compiler will enforce the contract and make sure you implement all members
// of the interface
// since IEngine has start and stop, then the class must have them, as well
// the signature of the return and the parameters must match up, in this case the callbacks

class Engine implements IEngine {
	constructor(public horsePower: number,
				publick engineType: string){}

	start(callback: (startStatus: boolean,
			engineType: string) => void) {
		window.setTimeout() => {
			callback(true, this.engineType);
		}, 1000);
	}
	stop(callback: (stopStatus: boolean,
			engineType: string) => void) {
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}
}

//Using an Interface as a Type
// once you have an interface defined, you don't have to implement it
// you can just use it somewhere in a class 

class Auto {
	engine: IEngine;
	basePrice: number;
	//More fields ...

	constructor(data: IAutoOptions) {
		this.engine = data.engine;
		this.basePrice = data.basePrice;
	}
}

// here 'engine' is defined as a field, but we're saying that we can pass in any
// anything that implements IEngine
// this leads to polymorphic behavior, so we have a set of engines all implement start and stop
// but the way they start and stop may be different.
// we also have in the constructor the ability to pass in some data object that implements the
// IAutoOptions function, then we will assign those up into our fields.

//Using Interfaces 2
// show how to write an interface and then show how to implement it to drive consistency
// accross multiple classes
// interface IEngine is going to have a start and stop function in it
// this will guarantee that any class that implements that interface also has start and stop
// interfaces are simply contracts (they don't actually do anything, hence void)
// they define things such as different members such as fields or functions (in this case),
// and what dataTypes they are and what parameters they have, but they don't say what to do.
// that's up to the class that implements the interface
// so in IEngine we define two 'stubs'
// the Engine class will implement those stubs

// Note: Interfaces in TypeScript are only used as you're writing the code, they're not
// used at all in the run-time. You won't find any reference in the transpiled JS to the
// interface. It only helps us make sure that we have consistency as we build our code and 
// ultimately generate the JS.
// allows you to catch your problems up front, instead of at runtime




interface IEngine {
	start(callback: (startStatus: boolean, engineType: string) => void) : void;
	stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
}


class Engine implements IEngine{
	constructor(public horsePower: number, public engineType: string){}

	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void) {
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000)
	}
}

class CustomEngine implements IEngine {

	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, 'Custom Engine');
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void) {
		window.setTimeout(() => {
			callback(true, 'Custom Engine');
		}, 1000)
	}
}

class Accessory {
	constructor(public accessoryNumber: number, public title: string){}
}

class Auto{
	private _basePrice: number;
	private _engine: IEngine;
	state: string;
	make: string;
	model: string;
	year: number;
	accessoryList: string;

	constructor(basePrice: number, engine: IEngine, make: string, model: string,
				state: string, year: number){

	this.engine = engine;
	this.basePrice = basePrice;
	this.state = state;
	this.make = make
	this.model = model;
	this.year = year;
	}

	calculateTotal() : number {
		var taxRate = .08;
		return this.basePrice + (taxRate * this.basePrice);
	}

	addAccessories(...accessories: Accessory[]){
		this.accessoryList = '';
		for (var i = 0; i < accessories.length; i++){
			var ac = accessories[i];
			this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
		}
	}

	getAccessoryList(): string{
		return this.accessoryList;
	}

	get basePrice(): number {
		return this._basePrice;
	}

	set basePrice(value: number){
		if (value <= 0) throw 'price must be >= 0';
		this._basePrice = value;
	}

	get engine(): IEngine {
		return this._engine;
	}

	set engine(value: IEngine) {
		if (value == undefined) throw 'Please supply an engine.';
		this._engine = vaue;
	}

}

class Truck extends Auto {
	bedLength: string;
	fourByFour: boolean;

	this.bedLength = bedLength;
	this.forByFour = fourByFour;
}

window.onload = function(){
	var auto = new Auto(40000, new Engine(250, 'Type'), 'Make', 'Model', 'AZ', 2010);
	var myEngine = <Engine>auto.engine; //because we are loosely coupled and IEngine only has start
	alert(myEngine.horsePower.toString()); // and stop
}
// casting the interface to as specific type allows access to the members in that type --> to Engine

//Extending an Interface
// defining an Interface which is the base and then adding additional functionality

interface IAutoOptions {
	engine: IEngine;
	basePrice: number;
	state: string;
	make?: string; //optional member
	model?: string; //optional member
	year?: number; //optional member
}

interface ITruckOptions extends IAutoOptions {
	bedLength?: string;
	fourByFour: boolean;
}

// ITruckOptions defines IAutoOptions members plus custom members
// used to ensure consistency

//Using an Extended Interface

class Truck extends Auto {
	bedLength: string;
	fourByFour: boolean;

	constructor(data: ITruckOptions){ //Extended Interface
		super(data);
		this.bedLength = data.bedLength;
		this.fourByFour = data.fourByFour;
	}
}
// in order to use the extended interface, we go into an extended class and pass it into a constructor
// now the extended class has access to the interface for Auto and the additional members in the
// Auto extension ITruckOptions


interface IEngine {
	start(callback: (startStatus: boolean, engineType: string) => void) : void;
	stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
}

interface IAutoOptions {
	basePrie: number;
	engine: IEngine;
	state: string;
	make: string;
	model: string;
	year: number;
}

interface ITruckOptions extends IAutoOptions {
	bedLength: string;
	fourByFour: boolean;
}
class Engine implements IEngine{
	constructor(public horsePower: number, public engineType: string){}

	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void) {
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000)
	}
}

class CustomEngine implements IEngine {

	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, 'Custom Engine');
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void) {
		window.setTimeout(() => {
			callback(true, 'Custom Engine');
		}, 1000)
	}
}

class Accessory {
	constructor(public accessoryNumber: number, public title: string){}
}

class Auto{
	private _basePrice: number;
	private _engine: IEngine;
	state: string;
	make: string;
	model: string;
	year: number;
	accessoryList: string;

	constructor(options: IAutoOptions){
	// constructor(basePrice: number, engine: IEngine, make: string, model: string,
	// 			state: string, year: number){

		this.engine = options.engine;
		this.basePrice = options.basePrice;
		this.state = options.state;
		this.make = options.make
		this.model = options.model;
		this.year = options.year;
	// this.engine = engine;
	// this.basePrice = basePrice;
	// this.state = state;
	// this.make = make
	// this.model = model;
	// this.year = year;
	}

	calculateTotal() : number {
		var taxRate = .08;
		return this.basePrice + (taxRate * this.basePrice);
	}

	addAccessories(...accessories: Accessory[]){
		this.accessoryList = '';
		for (var i = 0; i < accessories.length; i++){
			var ac = accessories[i];
			this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
		}
	}

	getAccessoryList(): string{
		return this.accessoryList;
	}

	get basePrice(): number {
		return this._basePrice;
	}

	set basePrice(value: number){
		if (value <= 0) throw 'price must be >= 0';
		this._basePrice = value;
	}

	get engine(): IEngine {
		return this._engine;
	}

	set engine(value: IEngine) {
		if (value == undefined) throw 'Please supply an engine.';
		this._engine = vaue;
	}

}

class Truck extends Auto {
	bedLength: string;
	fourByFour: boolean;


	constructor(options: ITruckOptions){

	// constructor(basePrice: number, engine: Engine, make: string, model: string,
	// 			state: string, year: number, bedLength: string, fourByFour: boolean){
	super(options);
	this.bedLength = options.bedLength;
	this.forByFour = options.fourByFour;
	}
}

//Problem: class Truck has 8 parameters and, as a user, we have to make sure that we pass
// the parameters in in a particular order, which gets tricky, plus it's messy from a coding
// standpoint.
// so we're going to allow an object to be passed-in to the constructors that implements a specific
// interface
// add IAutoOptions up under interface IEngine, which has the 6 constructors currently implemented
// in Auto

//Modules
// helps keep separation in our code
// so we can separate out different units of work that we have in different modules
// these different modules can even be in separate files.
// so one module can handle data access
// one module can handle UI integration
// another one might do animations
// by separating the code out, it give us a lot of great features: like testability, reusability
// maintainability, and uses good patterns like separation of concerns and solid?

//How to identify a module
// use the keyword 'namespace'
// explicitly declare a module

namespace dataservice{
	//code
};

//Module Flexibility
// Extending modules
// o Extend modules within or across files
// o Separation of concers - Each module has a specific role
// oo Ex. dataservice module, router module for navigation, or animations module
// o Open
// oo Import other modules or Export featurs (choose what to expose)

//Internal - Named Module
// all accessibility is only within the module
namespace Shapes {
	interface IRectangle {
		height: number;
		width: number;
	}

	export class Rectangle implements IRectangle {
	// class Rectangle implements IRectangle {
		constructor (public height: number, public width: number){

		}
	}

	var rect: IRectangle = new Rectangle(10, 4);
}

	var myRectangle = new Shapes.Rectangle(2,4);
// var myRectangle = Shapes._____
// this will fail because nothing was exported from the module so Shapes is inaccessible
// add the export keyword in order to gain access to the class outside of the module

//Extending Internal Modules

namespace Shapes {
	export class Rectangle {
		constructor (public height: number, public width: number){

		}
	}
}

var rect = new Shapes.Rectangle(2,4);

namespace Shapes {
	export class Circle {
		constructor (public radius: number){

		}
	}
}
var circle = new Shapes.Circle(20);

// by using the module keyword, we can extend it with a new class
// then both classes are accessible outside of the modules
// modules automatically produce IFFEs, once transpiled down to vanilla JS
// outer () disambiguates function expression from statement
// locks-in values and saves state, which minimizes global scope pollution and creates privacy

//Separating Internal Modules into separate files
// Modules separated across files
// o Separation is ideal for larger projects
// Must load them in proper sequence
// o Script tags

//Separation
// imagine this is in shapes.ts
namespace Shapes {
	export class Rectangle {
		constructor (
			pubic height: number, public width: number){

		}
	}
}

// imagine that this is in shapemaker.ts

/// <reference path = "shapes.ts">
namespace ShapeMaker {
	var rect = new Shapes.Rectangle(2,4);
}

// because the Shapes module has 'export' prefix on its class 'Rectangle', it is accessible
// adding the reference path above the 'ShapeMaker' module, allows it to have access
// to that separate file which contains the 'Shapes' module and the 'Rectangle' class
// in that separate file.
// in order for this to work, we need to load the *.js files in the proper sequence, based
// on dependencies or put them in the right, descending order in the index.html file.
// which is a hassle when your app has dozens of modules


//Importing External Modules and Managing Large Applications
// o Internal
// oo Namespace-like modules
// oo For grouping code
// oo No need to 'import' them
//
// o External
// oo Separately loadable modules
// oo Exported entities can be imported into other modules

import viewmodels = require('./viewmodels');
























