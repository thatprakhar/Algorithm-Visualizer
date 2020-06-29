var num;
var rects = [];

var beingSorted = false;
var speed = 25;
console.log("Speed = " + speed);
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
        for (var k = 0; k < num; k++) {
          delete rects[k];
          console.log("delete");
        }
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
      for (var k = 0; k < num; k++) {
        delete rects[k];
        console.log("delete");
      }
      clearInterval(interval);
      i = 0;
    }
  }, speed);
  console.log("exited finally out of selection");
}

function insertionSort() {
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
  console.log("insertion sort running");
  var interval = setInterval(function() {
    var j = i;

    while (j - 1 >= 0 && rects[j].height < rects[j - 1].height) {
      // keep swapping
      var c = rects[j].color;
      rects[j].color = rects[j - 1].color;
      rects[j - 1].color = c;
      var y = rects[j].height;
      rects[j].height = rects[j - 1].height;
      rects[j - 1].height = y;
      rects[j].yPos = 500 - rects[j].height;
      rects[j - 1].yPos = 500 - rects[j - 1].height;
      ctx.fillStyle = "#333333";
      ctx.fillRect(0, 0, 1000, 500);
      for (var k = 0; k < num; k++) {
        rects[k].draw();
      }
      j--;
    }
    i++;
    if (i >= num) {
      console.log("exited out of insertion sort");
      for (var k = 0; k < num; k++) {
        delete rects[k];
        console.log("delete");
      }
      beingSorted = false;
      clearInterval(interval);
      i = 0;
    }
  }, speed);
  console.log("exited finally out of insertion");
}

function mergeSort() {
  if (beingSorted == true) return;
  num = document.getElementById("num").value;
  if (num == "") {
    console.log("NUM is NULL\n");
    beingSorted = false;
    return;
  }

  beingSorted = true;

  console.log("num is " + num);
  var pos = 0;
  ctx.fillStyle = "#333333";
  ctx.fillRect(0, 0, 1000, 500);
  for (var i = 0; i < num; i++) {
    rects[i] = new rectangles(
      pos,
      Math.floor(Math.random() * 500),
      ctx,
      getRandomColor()
    );
    rects[i].draw();
    pos += 1000 / num;
    rects[i].draw();
  }
  console.log("Here");
  mergesort(0, num - 1);
  beingSorted = false;
  console.log("exited finally out of merge");
  for (var x = 0; x < num; x++) console.log(rects[x].height);
}

async function mergesort(low, high) {
  if (low < high) {
    var mid = (low + high) / 2;
    mid = Math.floor(mid);
    mergesort(low, mid);
    mergesort(mid + 1, high);
    merge(low, mid, high);
  }
}

async function merge(l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = [];
  var R = [];
  var k = l;
  var i = 0,
    j = 0;

  for (var p = 0; p < n1; p++) {
    L[p] = new rectangles(
      rects[l + p].pos,
      rects[l + p].height,
      rects[l + p].ctx,
      rects[l + p].color
    );
  }
  for (var p = 0; p < n2; p++) {
    R[p] = new rectangles(
      rects[m + 1 + p].pos,
      rects[m + 1 + p].height,
      rects[m + 1 + p].ctx,
      rects[m + 1 + p].color
    );
  }
  while (i < n1 && j < n2) {
    if (i < n1 && j < n2) {
      if (L[i].height < R[j].height) {
        rects[k].color = L[i].color;
        rects[k].height = L[i].height;
        rects[k].yPos = 500 - rects[k].height;
        i++;
      } else {
        rects[k].color = R[j].color;
        rects[k].height = R[j].height;
        rects[k].yPos = 500 - rects[k].height;
        j++;
      }
      k++;
      ctx.fillStyle = "#333333";
      ctx.fillRect(0, 0, 1000, 500);
      for (var p = 0; p < num; p++) {
        rects[p].draw();
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }
  interval = 0;
  while (i < n1) {
    rects[k].color = L[i].color;
    rects[k].height = L[i].height;
    rects[k].yPos = 500 - rects[k].height;
    i++;
    k++;
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, 1000, 500);
    for (var p = 0; p < num; p++) {
      rects[p].draw();
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  while (j < n2) {
    rects[k].color = R[j].color;
    rects[k].height = R[j].height;
    rects[k].yPos = 500 - rects[k].height;
    j++;
    k++;
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, 1000, 500);
    for (var p = 0; p < num; p++) {
      rects[p].draw();
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  for (var i = 0; i < n1; i++) {
    delete L[i];
  }
  for (var i = 0; i < n2; i++) delete R[i];
}
