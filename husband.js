let salary = 1000;
let friends = ['Tom', 'Jhon', 'Ivan'];
let sober = true;

class Husband {
	getSalary() {
		return 'Husband\'s salary is ' + salary + '\n';
	}
	getFriends() {
		return 'Husband\'s friends are ' + friends + '\n';
	}
	getSoberInf() {
		if (sober) {
			return 'Husband is sober' + '\n';
		} else {
			return 'Husband is drunk' + '\n';
		}
	}
}

exports.someHusband = new Husband();