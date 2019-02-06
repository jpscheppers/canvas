function draw(){
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");
  // ici, le reste du script



function draw(ctx, xoff, yoff) {
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(135 + xoff, 105 + yoff);
  ctx.bezierCurveTo(130 + xoff, 91 + yoff, 158 + xoff, 139 + yoff, 181 + xoff, 211 + yoff);
  ctx.bezierCurveTo(186 + xoff, 225 + yoff, 198 + xoff, 266 + yoff, 204 + xoff, 273 + yoff);
  ctx.bezierCurveTo(214 + xoff, 284 + yoff, 247 + xoff, 288 + yoff, 232 + xoff, 290 + yoff);
  ctx.bezierCurveTo(217 + xoff, 292 + yoff, 330 + xoff, 269 + yoff, 345 + xoff, 266 + yoff);
  ctx.bezierCurveTo(395 + xoff, 257 + yoff, 460 + xoff, 269 + yoff, 512 + xoff, 294 + yoff);
  ctx.bezierCurveTo(555 + xoff, 315 + yoff, 550 + xoff, 349 + yoff, 547 + xoff, 364 + yoff);
  ctx.bezierCurveTo(542 + xoff, 393 + yoff, 547 + xoff, 392 + yoff, 537 + xoff, 422 + yoff);
  ctx.bezierCurveTo(532 + xoff, 436 + yoff, 527 + xoff, 471 + yoff, 532 + xoff, 485 + yoff);
  ctx.bezierCurveTo(538 + xoff, 503 + yoff, 508 + xoff, 495 + yoff, 487 + xoff, 491 + yoff);
  ctx.bezierCurveTo(472 + xoff, 488 + yoff, 484 + xoff, 466 + yoff, 483 + xoff, 451 + yoff);
  ctx.bezierCurveTo(481 + xoff, 431 + yoff, 487 + xoff, 419 + yoff, 473 + xoff, 413 + yoff);
  ctx.bezierCurveTo(459 + xoff, 407 + yoff, 461 + xoff, 437 + yoff, 391 + xoff, 437 + yoff);
  ctx.bezierCurveTo(334 + xoff, 437 + yoff, 290 + xoff, 411 + yoff, 290 + xoff, 426 + yoff);
  ctx.bezierCurveTo(290 + xoff, 441 + yoff, 305 + xoff, 489 + yoff, 290 + xoff, 489 + yoff);
  ctx.bezierCurveTo(275 + xoff, 489 + yoff, 289 + xoff, 490 + yoff, 249 + xoff, 490 + yoff);
  ctx.bezierCurveTo(234 + xoff, 490 + yoff, 254 + xoff, 455 + yoff, 251 + xoff, 436 + yoff);
  ctx.bezierCurveTo(249 + xoff, 421 + yoff, 242 + xoff, 409 + yoff, 229 + xoff, 399 + yoff);
  ctx.bezierCurveTo(217 + xoff, 390 + yoff, 198 + xoff, 384 + yoff, 180 + xoff, 356 + yoff);
  ctx.bezierCurveTo(164 + xoff, 331 + yoff, 168 + xoff, 321 + yoff, 165 + xoff, 299 + yoff);
  ctx.bezierCurveTo(159 + xoff, 254 + yoff, 115 + xoff, 123 + yoff, 100 + xoff, 121 + yoff);
  ctx.bezierCurveTo(85 + xoff, 119 + yoff, 69 + xoff, 112 + yoff, 63 + xoff, 126 + yoff);
  ctx.bezierCurveTo(57 + xoff, 140 + yoff, 51 + xoff, 119 + yoff, 57 + xoff, 100 + yoff);
  ctx.bezierCurveTo(62 + xoff, 86 + yoff, 95 + xoff, 64 + yoff, 81 + xoff, 69 + yoff);
  ctx.bezierCurveTo(67 + xoff, 74 + yoff, 132 + xoff, 48 + yoff, 119 + xoff, 55 + yoff);
  ctx.bezierCurveTo(106 + xoff, 62 + yoff, 144 + xoff, 42 + yoff, 157 + xoff, 35 + yoff);
  ctx.bezierCurveTo(220 + xoff, 3 + yoff, 143 + xoff, 81 + yoff, 142 + xoff, 66 + yoff);
  ctx.bezierCurveTo(141 + xoff, 51 + yoff, 160 + xoff, 103 + yoff, 135 + xoff, 105 + yoff);
  ctx.stroke();
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.bezierCurveTo(100, 100, 150, 240, 140, 280);
  ctx.bezierCurveTo(140, 280, 160, 300, 240, 350);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#718094";
  ctx.lineJoin = "bevel";
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.closePath();
}

};
draw();
