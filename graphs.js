import timesMatrix from './math.js';
export default class Graphs {
  points = [];
  lines = [];

  setPoint(x, y) {
    this.points.push([[x], [y]]);
  }
  rotate(MCor, angulo, base) {
    const MB = [[MCor[0][0] - base[0][0]], [MCor[1][0] - base[1][0]]];
    const anguloRad = (Math.PI * angulo) / 180;

    const MA = [
      [Math.cos(anguloRad), Math.sin(anguloRad)],
      [-Math.sin(anguloRad), Math.cos(anguloRad)],
    ];

    const MR = timesMatrix(MA, MB);
    const MF = [[MR[0][0] + base[0][0]], [MR[1][0] + base[1][0]]];
    return MF;
  }

  doLine(um, dois) {
    const a = (dois[1][0] - um[1][0]) / (dois[0][0] - um[0][0]);
    const b = um[1][0] - a * um[0][0];
    let line = [];

    if (dois[0][0] === um[0][0]) {
      const ymax = Math.max(dois[1][0], um[1][0]);
      const ymin = Math.min(dois[1][0], um[1][0]);

      for (let i = ymin; i <= ymax; i++) {
        line.push([dois[0][0], i]);
      }
    } else {
      let provY;
      const jmax = Math.max(dois[0][0], um[0][0]);
      const xMaxString = jmax.toString();
      const separetedXMax = xMaxString.split('.');
      const separetedXMaxOne = separetedXMax[0];
      const separetedXMaxTwo = separetedXMax[1] ? separetedXMax[1] : undefined;
      const separetedXMaxOneNumber = Number(separetedXMaxOne);
      const separetedXMaxTwoNumber = separetedXMaxTwo
        ? Number('0.' + separetedXMaxTwo)
        : undefined;
      const jmin = Math.min(dois[0][0], um[0][0]);
      for (let i = jmin; i < separetedXMaxOneNumber; i++) {
        provY = a * i + b;
        line.push([i, provY]);
        if (Number(i.toString().split('.')[0]) + 1 === separetedXMaxOneNumber) {
          const newI = separetedXMaxTwo
            ? Number(i.toString().split('.')[0]) + 1 + separetedXMaxTwoNumber
            : i + 1;
          provY = a * newI + b;
          line.push([newI, provY]);
        }
      }
    }
    this.lines.push(line);
  }

  takeLineVer(line) {
    return [
      [line[0][0], line[0][1]],
      [line[line.length - 1][0], line[line.length - 1][1]],
    ];
  }

  rotateLine(index, angulo, base) {
    const k = this.takeLineVer(this.lines[index]);
    console.log(k);
    const um = this.rotate([[k[0][0]], [k[0][1]]], angulo, base);
    const dois = this.rotate([[k[1][0]], [k[1][1]]], angulo, base);
    this.lines.splice(index, 1);
    this.doLine(um, dois);
  }
}
