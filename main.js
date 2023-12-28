const kmPrice = 0.21


// let tripLength = prompt("kilometri");
// let clientAge = prompt("età");

let tripLength = document.getElementById("kilometers");
let clientAge = document.getElementById("age");

console.log(`Trip length: ${tripLength.value} Client age: ${clientAge.value}`)
console.log(clientAge.value)

function calcTicket() {
    if (clientAge.value < 18) {
        document.getElementById("result").innerHTML = (((kmPrice * tripLength.value) * 80) / 100).toFixed(2);
    }
    else if (clientAge.value > 65) {
        document.getElementById("result").innerHTML = (((kmPrice * tripLength.value) * 60) / 100).toFixed(2);
    }
    else {
        document.getElementById("result").innerHTML = kmPrice * tripLength.value
    }
}