const c = document.getElementById('UgCanvas');

const ctx = c.getContext('2d');
ctx.canvas.width = 500;
ctx.canvas.height = 500;
ctx.fillStyle = '#7F7F00';
function render(content) {
  for (let x = 0; x < content.lines.length; x++) {
    let prov = content.lines[x];
    let prov2;
    for (let key = 0; key < content.lines[x].length; key++) {
      prov2 = prov[key];
      ctx.fillStyle = '#7F7F00';
      ctx.fillRect(prov2[0], prov2[1], 1, 1);
    }
  }
}

function animate(content) {
  requestAnimationFrame(() => animate(content));
  ctx.clearRect(0, 0, c.width, c.height);
  render(content);
}

export default animate;
