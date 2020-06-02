var justdiv = document.getElementById("justdiv")
var mouseColor = {
    "mouseover": "yellow",
    "click": "red",
    "dblclick": "orange",
    "mouseout": "transparent"
}

for (var etype in mouseColor) {
    justdiv.addEventListener(etype, handler);
}
function handler(e) {
    e.target.style.backgroundColor = mouseColor[e.type];
}
var justdiv2 = document.getElementById("justdiv2")
var mouseColor = {
    "mouseover": "aqua",
    "click": "red",
    "dblclick": "brown",
    "mouseout": "pink"
}

for (var etype in mouseColor) {
    justdiv2.addEventListener(etype, handler);
}
function handler(e) {
    e.target.style.backgroundColor = mouseColor[e.type];
}