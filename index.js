// function greetUser() {
//   console.log('Welcome back!');
// }

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(10, 20, 54));
// console.log(add('jqshd', 'jqhd'));

// function substract(a, b) {
//   var result = a - b;

//   result++;

//   return result;
// }

// const functionResult = substract(7, 1);

// console.log(add(2, 4, substract(7, 5)))

// -----------------------------------------------------------

// function confirm() {
//   console.log('Yes');
// }

// if (5 > 7) {
//   confirm();
// } else {
//   console.log('no');
// }

// const username = '';
// const password = 'd5s4aq4';

// const database_password = 'd5s4aq4';

// if (username && password) {
//   console.log('Welcome back!');
// } else {
//   console.log('Password or username is incorrect');
// }

// if (password && database_password && password === database_password) {
//   console.log('correct pass');
// } else {
//   console.log('incorrect pass');
// }

// if (password && database_password) {

// } else if (password === database_password) {

// } else {

// }

// -----------------------------------------------------------

// const students = 30;

// for (let start = 1; start < students + 1; start++) {
//   console.log(start);
// }

// -----------------------------------------------------------

// const students_list = ['john', 'anna', 'thomas', 'maria'];
// const numbers = [1, 54, 87, 1];
// const mixed = [1, 'jgsqd', true, null];

// console.log(students_list.length);
// console.log(mixed);

// console.log(students_list[1]);

// for (let start = 0; start < students_list.length; start++) {
//   console.log(students_list[start].toUpperCase());
// }

// const username = 'john';

// console.log(username[2]);

// students_list.push('marry');
// students_list.pop();
// students_list.unshift('tom');
// students_list.shift();

// console.log(students_list);

// -----------------------------------------------------------

// const username = 'john';
// const password = 'jhqjdsh';
// const age = 45;
// const hobbies = ['dance', 'videogames', 'reading'];

// country city street

const user = {
  username: 'john',
  password: 'jhqjdsh',
  age: 45,
  hobbies: ['dance', 'videogames', 'reading'],
  address: {
    country: 'America',
    city: 'New York',
    street: 'HQA',
  },
  status: false,
  logout: function () {
    console.log('You are logged out!');
  },
};

console.log(user);
console.log(user.username);
console.log(user.age);

if (user.age > 18) {
  //   console.log('You can watch horror movies.');
  //   console.log(user.username + ' you can watch horror movies.');
  console.log(`${user.username.toUpperCase()} you can watch horror movies.`);
} else {
  console.log('Forbidden!');
}

for (let start = 0; start < user.hobbies.length; start++) {
  console.log(user.hobbies[start]);
}

user.logout();

user['occupation'] = 'Software engineer';
user.bio = 'kjqskdjkqsdhkjqshdkqsjdfh';

delete user.status;

console.log(user);
