class Person {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	get officeAreaCode() {
		return this._telephoneNumber.areaCode;
	}
	set officeAreaCode(arg) {
		// this._telephoneNumber.areaCode = arg;
		// 세터를 호출하는 곳에서 전화번호를 매번 다시 대입하도록 변경
		this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
	}
	get officeNumber() {
		return this._telephoneNumber.number;
	}
	set officeNumber(arg) {
		this._telephoneNumber.number = arg;
	}
}

class TelephoneNumber {
	constructor(areaCode, number) {
		// 전화번호를 불변으로 만들기
		this._number = number;
		this._areaCode = areaCode;
	}
	get areaCode() {
		return this._areaCode;
	}
	set areaCode(arg) {
		this._areaCode = arg;
	}
	get number() {
		return this._number;
	}
	set number(arg) {
		this._number = arg;
	}
}

module.exports = Person;