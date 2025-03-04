for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let num = 4;
for (let i = num + 1; num; i++) {
  let primeNumber = true;
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      primeNumber = false;
      break;
    } else primeNumber;
  }
  if (primeNumber) {
    console.log(num);
    break;
  }
}

