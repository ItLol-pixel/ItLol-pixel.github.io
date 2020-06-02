var justdiv = document.getElementById("justdiv")
var mouseColor1 = {
    "mouseover": "yellow",
    "click": "red",
    "dblclick": "orange",
    "mouseout": "transparent"
}

for (var etype in mouseColor1) {
    justdiv.addEventListener(etype, handler);
}
function handler(e) {
    e.target.style.backgroundColor = mouseColor1[e.type];
}
var justdiv2 = document.getElementById("justdiv2")
var mouseColor = {
    "mouseover": "aqua",
    "click": "lime",
    "dblclick": "brown",
    "mouseout": "pink"
}

for (var etype in mouseColor) {
    justdiv2.addEventListener(etype, handler2);
}
function handler2(e) {
    e.target.style.backgroundColor = mouseColor[e.type]; e.stopPropagation();
}