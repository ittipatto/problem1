// let message = 'Enter a positive integer';
// window.alert(message);
// var text = prompt('Enter a positive integer');
// var n = parseInt(text);
// var prime = [];

// function getVar() {
//     var text = prompt('Enter a positive integer');
//     var n = parseInt(text);
//     return n;
// }
// getVar();

// function showPrime(n) {
//     for (let i = 2; n>i; i++){
//         if(!isPrime(i)) continue;
//         else if(isPrime(i)){
//             prime.push(i)
//         }   
//     }
//     alert('For n = '+ n +' prime number are '+ prime)
// }

// function isPrime(n) {
//     for (let i = 2; n>i; i++) {
//         if (n%i == 0) return false;
//     }
//     return true;
// }
// showPrime(n);
// alert(prime);
// function loop() {
//     if (isNaN(n)||n==null) {
//         return getVar();
//     }
// }
// loop();
function filterInt(value) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value) // = number
    } else {
      return NaN // = NaN
    }
  }

loopPrime:for (;;) {
    var text = prompt('Enter a positive integer');
    var n = filterInt(text);
    var prime = [];
    if (!isNaN(n)&&n>0) break loopPrime;
}
function showPrime(n) {
    for (let i = 2; n>i; i++){
        if(!isPrime(i)) continue;
        else if(isPrime(i)){
            prime.push(i)
        }   
    }
    alert('For n = '+ n +' prime number are '+ prime)
}

function isPrime(n) {
    for (let i = 2; n>i; i++) {
        if (n%i == 0) return false;
    }
    return true;
}
showPrime(n);