// TODO: Write code to define and export the Employee class

class Role {
	constructor(tittle, salary) {
		this.tittle = tittle;
		this.salary = salary;
	}

	getTitle() {
		return this.tittle;
	}

	getSalary() {
		return this.salary;
	}
}

module.exports = Role;
