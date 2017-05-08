var primes=[];
var numbers = [];
function isPrime(input){
  values(input);
  for(var i=0;i<=numbers.length - 1;i++){
    var val = Math.floor(numbers[i] / 2);
    while (val !== 0){
      if (numbers[i] % val !== 0){
        primes.push(numbers[i]);
      }
      --val;
    }
 }
 return primes;
}

function values(input){
  for(var i=3;i<=input;i++){
		numbers.push(i);
	}
	return numbers;
}


isPrime(10)