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
var mouseColor2 = {
    "mouseover": "aqua",
    "click": "lime",
    "dblclick": "brown",
    "mouseout": "pink"
}

for (var etype in mouseColor2) {
    justdiv2.addEventListener(etype, handler2);
}
function handler2(e) {
    e.target.style.backgroundColor = mouseColor2[e.type]; e.stopPropagation();
}