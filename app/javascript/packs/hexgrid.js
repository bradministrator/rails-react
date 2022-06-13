const canvas = document.getElementById('hexgrid');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black'
const sides = 3

const a = ( 2 * Math.PI ) / sides;
const r = 50;

function drawHexagon(x, y){
  const canvas = document.getElementById('hexgrid');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black'
  const sides = 3

  const a = ( 2 * Math.PI ) / sides;
  const r = 50;

  ctx.fillRect(x,y,1,1);
  console.log([x,y])
  ctx.beginPath();
  for (var i = 1; i <= sides; i++){

    let xvar = x + r * Math.cos( a  * i );
    let yvar = y + r * Math.sin( a * i );
    console.log([xvar, yvar]);
    ctx.lineTo(xvar, yvar);
  }
  ctx.closePath();
  ctx.stroke();
}

let pt = [100, 100];


drawHexagon(...pt);

window.drawHexagon = drawHexagon;

// canvas.addEventListener('mousemove', function(event){
//   console.log(event);
// })

