import { getPasswords } from './data';

const passwords = getPasswords();

function challenge () {
  console.time('Challenge 1');
  const validPasswords = passwords.filter(({ letter, numB, numA, value }) => {
    const count = value.split('').filter(p => p === letter).length;
    return count >= numA && count <= numB;
  }).length;
  console.timeEnd('Challenge 1');
  return validPasswords;
};

function challenge2() {
  console.time('Challenge 2');
  const validPasswords = passwords.filter(({ letter, numB, numA, value }) => {
    const letters = value.split('');
    const letterA = letters[numA - 1];
    const letterB = letters[numB - 1];
    return (letterA === letter || letterB === letter) && letterA !== letterB;
  }).length;
  console.timeEnd('Challenge 2');
  return validPasswords;
}

console.log(
  `Challenge 1: ${challenge()}\nChallenge 2: ${challenge2()}`,
);
