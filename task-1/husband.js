let salary = 1000;
let friends = ['Tom', 'Jhon', 'Ivan'];
let sober = true;

class Husband {
	getSalary() {
		console.log('Husband\'s salary is ' + salary);
	}
	getFriends() {
		for (let i = 0; i < friends.length; i++) {
			console.log(friends[i] + ' is husband\'s friend');
		}
	}
	getSoberInf() {
		if (sober) {
			console.log('Husband is sober');
		} else {
			console.log('Husband is drunk');
		}
	}
}

exports.someHusband = new Husband();