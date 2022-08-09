export default function randomNumberGenerator(size, limit) {
  let randomNumbersArray = [];
  for (let i = 0; i < size; i++) {
    let num = Math.ceil(Math.random() * limit);
    randomNumbersArray[i] = num
  }
  return randomNumbersArray;
}