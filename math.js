function timesMatrix(MA, MB) {
  const MR = [];
  let h;
  for (let k = 0; k < MA.length; k++) {
    for (let j = 0; j < MB[0].length; j++) {
      h = 0;
      for (let i = 0; i < MA.length; i++) {
        h = MA[k][i] * MB[i][j] + h;
      }
      MR.push([h]);
    }
  }
  return MR;
}

export default timesMatrix;
