function ucFirst(word) {
    if (!word) return word;
    
    return word[0].toUpperCase() + word.toSlice(1);
}

alert(ucFirst("john") == "John");


function checkSpam(str) {
    if (!str) return str;
    let new_str = str.toLowerCase();
    return new_str.includes("viagra") || new_str.includes("xxx");
}

checkSpam('buy ViAgRA now');// == true
checkSpam('free xxxxx');// == true
checkSpam("innocent rabbit");// == false


function truncate(str, maxlength) {
    return(str.length > maxlength) ? str.slice(0, maxlength - 1) + "..." : str; 
}

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"


function extractCurrencyValue(value) {
    return +value.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true