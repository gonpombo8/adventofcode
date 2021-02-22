import data from './data';

function challenge() {
  // remove first row cause we start looking at the row 1;
  return runMap(3, 1);
};

function runMap(rigth: number, down: number) {
  return data
    .slice(down)
    .filter((d, index) => {
      const row = d.split('');
      // (index / down) avoids adding a right position when the row needs to be ignored.
      // + 1 => https://miro.medium.com/max/1006/1*iJhMo_FJ6ka70UU1t_h1eQ.png
      // * right gives us the movements to the right.
      // % row.length indicates that the map has Infinity positions, so we start over.
      const rowKey = ((index / down + 1) * rigth) % row.length;

      return index % down === 0
        ? row[rowKey] === '#'
        : false
    }).length
}

function challenge2() {
  return [
    runMap(1, 1),
    runMap(3, 1),
    runMap(5, 1),
    runMap(7, 1),
    runMap(1, 2),
  ].reduce((acc, value) => acc * value, 1);
};

console.log(
  `Challenge 1: ${challenge()}\nChallenge 2: ${challenge2()}`,
);
