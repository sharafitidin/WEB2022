let a = +prompt("a: ", 0);
let b = +prompt("b: ", 0);
alert(a+b);


function readNumber(){
    let num;

    do{
        prompt("Write number: ", 0)
        alert(num);
    } while(!isFinite(num))

    if(num == "" || num == null) return null;

    return +num;
}

alert('Read: ${readNumber()}');


let i = 0; // 
while (i != 10) {
  i += 0.2;
  if(9.8 < i || i < 10.2) alert(i);
}


function random(min, max){
    return min + Math.random() * (max - min);
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


function randomInteger(min, max){
    return Math.round(min - 0.5 * Math.random() * (max - min + 1));
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5