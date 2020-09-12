class Person {
	constructor(data) {
		this._name = data.name;
		this._department = new Department(data);
	}
	get name() {
		return this._name;
	}
	// Department 객체에 대한 위임 메서드
	get manager() {
		return this._department.manager;
	}
	get department() {
		return this._department;
	}
	set department(arg) {
		this._department = arg;
	}
}

class Department {
	constructor(data) {
		this._chargeCode = data.chargeCode;
		this._manger = data.manager;
	}

	get chargeCode() {
		return this._chargeCode;
	}
	set chargeCode(arg) {
		this._chargeCode = arg;
	}
	get manager() {
		return this._manger;
	}
	set manager(arg) {
		this._manger = arg;
	}
}

module.exports = Person;
