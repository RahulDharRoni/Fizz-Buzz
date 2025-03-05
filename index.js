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
// Part 2: Prime Time
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

// Part 3
////////////
const value = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

const dataSplit = value.split(",");
const newArray = [];

for (let i = 0; i < dataSplit.length; i++) {
  newArray.push(dataSplit[i]);
  if ((i + 1) % 4 === 0) {
    console.log(newArray.join("  "));
  }
}
// Alternative Answer
const value2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

const dataSplit2 = value.split(",");

// Split into chunks of 4
for (let i = 0; i < dataSplit2.length; i += 4) {
  const v = dataSplit2.slice(i, i+4);
  console.log(v.join(','));
}
