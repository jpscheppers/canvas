function draw(){
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");
  // ici, le reste du script

ctx.beginPath();
ctx.rect(45, 45, 300, 200);
ctx.fillStyle = "#dce7ed";
ctx.fill();

ctx.beginPath();
ctx.rect(30, 30, 300, 200);
ctx.fillStyle = "#4eafe8";
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "#4eafe8";
ctx.stroke();


ctx.beginPath();
ctx.rect(30, 50, 300, 15 );
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.rect(30, 190, 300, 15 );
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(160,140,40,0,Math.PI*2,false);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(220,140,40,0,Math.PI*2,false);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(190,110,40,0,Math.PI*2,false);
ctx.strokeStyle = "white";
ctx.stroke();

};
draw();
console.log('hello');
