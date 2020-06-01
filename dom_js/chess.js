var content = document.getElementById('content');
for (var i = 0; i <= 8; i++) {
    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');
    for (var j = 1; j <= 8; j++) {
        var newCell = document.createElement('div');
        newCell.setAttribute('class', 'cell');
        newRow.appendChild(newCell);
        if (i % 2 == j % 2) {
            newCell.setAttribute("class", "white cell")
        } else {
            newCell.setAttribute("class", "black cell")
        }
    }
    content.appendChild(newRow);
}
