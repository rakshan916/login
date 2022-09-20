class Person {
	constructor(name) {
		this.name = name;
	}
		greet() {
	console.log(`Hi ${this.name}`);
	}
}

class Student extends Person {
	constructor(name) {
		super(name);
}
}
	let person1 = new Person(’Rakshan’)
	person1.greet();
	let student1 = new Student(‘Suriya’);
	student1.greet();