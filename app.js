// prime number = only divide evenly by ones self or one


function isPrime(num){

if ( num < 2) {
    return false;
} 

let root = Math.ceil(Math.sqrt(num));
console.log(root);

for (let i = 2; i <= root ; i ++) {
    if(num % i === 0){
        return false;
    }

}
    return true;
}

console.log(isPrime(8));
// false
console.log(isPrime(11));
// true
console.log(isPrime(121));
// false
console.log(isPrime(127));
// true