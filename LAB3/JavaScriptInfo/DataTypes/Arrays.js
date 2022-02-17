let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");


let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // a, b function(){alert(this);}


function sumInput(){
    let numbers = [];

    while(true){
        let value = prompt("Input: ", 0);
    
        if (value == "" || value == null || value == !isFinite(value)) break;

        numbers.push(value);
    }

    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}
alert(sumInput());


function getMaxSubSum(arr) {
    let maxSum = 0;
    for(let i = 0; i < arr.length(); i++){
        let sumFixedStart = 0;
        for(let j = i; j < arr.length(); j++){
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]) == 5 //(the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 //(take all)
