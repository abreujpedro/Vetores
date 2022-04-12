import Graphs from './graphs.js';
import animate from './render.js';

const test = new Graphs();
test.doLine([[100], [200]], [[200], [200]]);

console.table(test.lines[0]);
setInterval(() => {
  test.rotateLine(0, 45, [[150], [200]]);
  console.table(test.lines[0]);
}, 600);

animate(test);
