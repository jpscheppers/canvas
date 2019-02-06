function draw(){
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");
  // ciel
  ctx.beginPath();
  ctx.rect(0, 0, 800, 400);
  ctx.fillStyle = "#d9f2ff";
  ctx.fill();
  ctx.closePath();
  //nuache
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(200,140,40,0,Math.PI,true);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(60,140,40,0,Math.PI,true);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(140,140,60,0,Math.PI,true);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.bezierCurveTo(20, 140, 160, 170, 240, 140);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  // navire
  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(350, 300);
  ctx.lineTo(400, 400);
  ctx.lineWidth = 2;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "rgb(161, 167, 171)"
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  // navire  stroke
  ctx.beginPath();
  ctx.moveTo(350, 400);
  ctx.lineTo(350, 300);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(161, 167, 171)"
  ctx.stroke();
  ctx.closePath();

  // navire coque
  ctx.beginPath();
  ctx.arc(350,350,50,0,Math.PI,false);
  ctx.fillStyle = "#f4f4f4";
  ctx.fill();
  ctx.strokeStyle = "rgb(161, 167, 171)"
  ctx.stroke();

  // mer bg
  ctx.beginPath();
  ctx.bezierCurveTo(-100, 400, 100, 450, 200, 400);
  ctx.bezierCurveTo(200, 400, 300, 450, 400, 400);
  ctx.bezierCurveTo(400, 400, 500, 450, 600, 400);
  ctx.bezierCurveTo(600, 400, 700, 450, 1000, 400);
  ctx.strokeStyle = "#7aebff";
  ctx.lineWidth = 100;
  ctx.stroke();
  ctx.closePath();

  // mer 2
  ctx.beginPath();
  ctx.bezierCurveTo(-100, 450, 0, 500, 100, 450);
  ctx.bezierCurveTo(100, 450, 200, 500, 300, 450);
  ctx.bezierCurveTo(300, 450, 400, 500, 500, 450);
  ctx.bezierCurveTo(500, 450, 600, 500, 700, 450);
  ctx.bezierCurveTo(700, 450, 800, 500, 900, 450);
  ctx.strokeStyle = "#dffaff";
  ctx.lineWidth = 70;
  ctx.stroke();
  // mer 3
  ctx.beginPath();
  ctx.bezierCurveTo(-100, 510, 100, 560, 200, 510);
  ctx.bezierCurveTo(200, 510, 300, 560, 400, 510);
  ctx.bezierCurveTo(400, 510, 500, 560, 600, 510);
  ctx.bezierCurveTo(600, 510, 700, 560, 900, 510);
  ctx.strokeStyle = "#2e8db5";
  ctx.lineWidth = 100;
  ctx.stroke();

  //birb
  ctx.beginPath();
  ctx.bezierCurveTo(550, 200, 560, 180, 570, 200);
  ctx.bezierCurveTo(570, 200, 590, 180, 600, 200);
  ctx.lineJoin = "bevel";
  ctx.lineCap = "round";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.bezierCurveTo(620, 260, 640, 240, 660, 260);
  ctx.bezierCurveTo(660, 260, 680, 240, 700, 260);
  ctx.lineJoin = "bevel";
  ctx.lineCap = "round";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();


};
draw();
console.log('hello');
