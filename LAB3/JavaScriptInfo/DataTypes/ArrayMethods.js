function camelize(str) {
    return str.split('-')
                .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))   
                .join('');
}
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)


function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        let val = arr[i];
        if(val < a || val > b){
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]


let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr ); // 8, 5, 2, 1, -10


function copySorted(arr) {
    return all.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Mary


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith


function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);
// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);
alert(arr)


function getAverageAge(arr) {
    return users.reduce((prev, user) => prev + user.age, 0);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


