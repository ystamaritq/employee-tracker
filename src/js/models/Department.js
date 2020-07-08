// TODO: Write code to define and export the Employee class

class Department {
	constructor(name) {
		this(null, name);
	}

	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}
}

module.exports = Department;
