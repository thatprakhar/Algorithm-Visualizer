var num;
var rects = [];
var bubbleFlag = true;
var beingSorted = false;
var sortedRect = [];
var speed = 100;

class rectangles {
  constructor(xPos, height, ctx, color) {
    this.xPos = xPos;
    this.height = height;
    this.width = 1000 / num;
    this.yPos = 500 - height;
    this.ctx = ctx;

    this.color = color;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    this.ctx.stroke();
  }
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //return "#000000";
  return color;
}
var canvas = 0;
var canvasHeight = 0;
var canvasWidth = 0;
var ctx = 0;
document.addEventListener("DOMContentLoaded", function() {
  canvas = document.getElementById("canvas");
  canvasHeight = canvas.height;
  canvasWidth = canvas.width;
  ctx = canvas.getContext("2d");
});

function updateVal() {
  document.getElementById("num-val").innerHTML = document.getElementById(
    "num"
  ).value;
}

function bubbleSort() {
  if (beingSorted == false) {
    beingSorted = true;
    num = document.getElementById("num").value;
    if (num == "") {
      beingSorted = false;
      console.log("NUM is NULL\n");
      return;
    }
    console.log("num is " + num);
    var pos = 0;
    for (var i = 0; i < num; i++) {
      rects[i] = new rectangles(
        pos,
        Math.floor(Math.random() * 500),
        ctx,
        getRandomColor()
      );
      rects[i].draw();
      pos += 1000 / num;
    }

    var i = 0;
    var j = 0;
    var interval = setInterval(function() {
      if (j == num - 1 - i) {
        i++;
        j = 0;
      }
      if (i == num - 1) {
        beingSorted = false;
        console.log("exited out of bubble sort");
        clearInterval(interval);
        return;
      }
      if (rects[j].height > rects[j + 1].height) {
        var c = rects[j].color;
        rects[j].color = rects[j + 1].color;
        rects[j + 1].color = c;
        var y = rects[j].height;
        rects[j].height = rects[j + 1].height;
        rects[j + 1].height = y;
        rects[j].yPos = 500 - rects[j].height;
        rects[j + 1].yPos = 500 - rects[j + 1].height;
        ctx.fillStyle = "#333333";
        ctx.fillRect(0, 0, 1000, 500);
        for (var k = 0; k < num; k++) {
          rects[k].draw();
        }
      }
      j++;
    }, speed);
  }
  console.log("exited successfully out of bubble sort");
}
function selectionSort() {
  if (beingSorted == true) {
    return;
  }
  beingSorted = true;
  num = document.getElementById("num").value;
  if (num == "") {
    console.log("NUM is NULL\n");
    beingSorted = false;
    return;
  }
  console.log("num is " + num);
  var pos = 0;
  for (var i = 0; i < num; i++) {
    rects[i] = new rectangles(
      pos,
      Math.floor(Math.random() * 500),
      ctx,
      getRandomColor()
    );
    rects[i].draw();
    pos += 1000 / num;
  }

  var i = 0;
  var min = 2000;
  console.log("selection sort running");
  var interval = setInterval(function() {
    var min_index = i;
    min = rects[min_index].height;
    for (var j = i + 1; j < num; j++) {
      if (rects[j].height <= min) {
        min = rects[j].height;
        min_index = j;
      }
    }

    var c = rects[i].color;
    rects[i].color = rects[min_index].color;
    rects[min_index].color = c;
    var y = rects[i].height;
    rects[i].height = rects[min_index].height;
    rects[min_index].height = y;
    rects[i].yPos = 500 - rects[i].height;
    rects[min_index].yPos = 500 - rects[min_index].height;
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, 1000, 500);
    for (var k = 0; k < num; k++) {
      rects[k].draw();
    }
    i++;
    if (i >= num) {
      console.log("exited out of selection sort");
      beingSorted = false;
      clearInterval(interval);
      i = 0;
    }
  }, speed);
  console.log("exited finally out of selection");
}
