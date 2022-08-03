loopVar:for (;;) {
    var text = prompt('Enter a positive integer');
    Int:for(;;){
        if (/^[-+]?(\d+|Infinity)$/.test(text)) break Int;
        else continue loopVar;
    }
    var n = Number(text);
    var prime = [];
    if (!isNaN(n)&&n>0) break loopVar;
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