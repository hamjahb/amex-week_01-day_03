// Your Answer below
let a = prompt("enter a number");
let result = "";

if (a % 3 == 0) {
    result="Pling"
} else if (a%5 == 0) {
    result = "Plang";
} else if (a % 7 == 0) {
    result = "Plong";
} else {
    toString(a)
    result = a
}
console.log(result)
