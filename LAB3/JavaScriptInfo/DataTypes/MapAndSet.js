function unique(arr) {
    let result = [];

    for(let str of arr){
        if(!result.includes(str)) {
            result.push(str);
        }
    }
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 
alert( unique(strings) ); // Hare, Krishna, :-O


function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
]; 
let usersById = groupById(users);
/*
// after the call we should have:

usersById = {
john: {id: 'john', name: "John Smith", age: 20},
ann: {id: 'ann', name: "Ann Smith", age: 24},
pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


function unique(arr) {
    return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 
alert( unique(values) ); // Hare, Krishna, :-O


function aclean(arr) {
    let map = new Map();
    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era


let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys);


