const size = 200;
for (let i = 1; i <= 11; i++) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  document.body.appendChild(canvas);
  canvas.style.border = "1px solid";
  canvas.style.margin = "5px";
  const ctx = canvas.getContext("2d");
  drawCircle(ctx, i);
}

function drawCircle(ctx, method) {
  ctx.translate(size / 2, size / 2);
  ctx.beginPath();
  ctx.lineWidth = 3;

  const rad = size * 0.4;

  switch (method) {
    case 1:
      ctx.arc(0, 0, rad, 0, Math.PI * 2);
      break;
    case 2:
      ctx.ellipse(0, 0, rad, rad, 0, 0, Math.PI * 2);
      break;
    case 3:
      ctx.roundRect(-rad, -rad, rad * 2, rad * 2, rad);
      break;
    case 4:
      ctx.moveTo(-rad, 0);
      ctx.arcTo(-rad, -rad, 0, -rad, rad);
      ctx.arcTo(rad, -rad, rad, 0, rad);
      ctx.arcTo(rad, rad, 0, rad, rad);
      ctx.arcTo(-rad, rad, -rad, 0, rad);
      break;
    case 5:
      ctx.moveTo(-rad, 0);
      for (let x = -rad; x <= rad; x++) {
        const y = Math.sqrt(rad * rad - x * x);
        ctx.lineTo(x, y);
      }
      for (let x = rad; x >= -rad; x--) {
        const y = -Math.sqrt(rad * rad - x * x);
        ctx.lineTo(x, y);
      }
      break;
    case 6:
      ctx.moveTo(rad, 0);
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 60) {
        const x = Math.cos(a) * rad;
        const y = Math.sin(a) * rad;
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      break;
    case 7:
      ctx.moveTo(-rad, 0);
      const c = rad * 0.95;
      ctx.quadraticCurveTo(-c, -c, 0, -rad);
      ctx.quadraticCurveTo(c, -c, rad, 0);
      ctx.quadraticCurveTo(c, c, 0, rad);
      ctx.quadraticCurveTo(-c, c, -rad, 0);
      ctx.strokeStyle = "red";
      break;
    case 8:
      ctx.moveTo(-rad, 0);
      const d = rad * 0.55;
      ctx.bezierCurveTo(-rad, -d, -d, -rad, 0, -rad);
      ctx.bezierCurveTo(d, -rad, rad, -d, rad, 0);
      ctx.bezierCurveTo(rad, d, d, rad, 0, rad);
      ctx.bezierCurveTo(-d, rad, -rad, d, -rad, 0);
      ctx.strokeStyle = "orange";
      break;
    case 9:
      ctx.lineWidth = rad * 2 + 3;
      ctx.lineCap = "round";
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = rad * 2 - 3;
      ctx.lineTo(0, 0);
      break;
    case 10:
      ctx.moveTo(-rad, 0);
      const n = 60;
      for (let i = 0; i < n; i++) {
        ctx.rotate((2 * Math.PI) / n);
        ctx.lineTo(-rad, 0);
      }
      ctx.closePath();
      break;
    case 11:
      for (let x = -rad; x <= rad; x++) {
        for (let y = -rad; y <= rad; y++) {
            const diff = Math.abs(Math.sqrt(x * x + y * y) - rad);
          if (diff < 1) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(0, 0, 0, " + (1 - diff) + ")";
            ctx.rect(x, y, 1, 1);
            ctx.stroke();
          }
        }
      }
      break;
    default:
      break;
  }

  ctx.stroke();
}
