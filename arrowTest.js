var square = n => n * n;

var user = {
	name: 'Dkim',
	sayHi: () => console.log(this.name),
	sayHiAlt () {
		console.log(arguments);
		console.log(this.name);
	}
}

user.sayHi();

user.sayHiAlt(1, 2, 3);