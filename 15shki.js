$('body').append($('<div class="grid-container"></div>'));
[0, 1, 2, 3].forEach(function (n, i) {
    $('.grid-container').append($('<div class="row r' + n + '"></div>'));
    [0, 1, 2, 3].forEach(function (_n) {
        $('.row.r' + n).append($('<div class="cell c' + _n + ' r' + n + '" data-row="' + n + '" data-cell="' + _n + '"></div>'));
    });
});
['_', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(function (a, b) {
    return (~~ (Math.random() * 15) % 2);
}).forEach(function (n, i) {
    $('.grid-container .r' + ~~ (i / 4) + '.c' + (i % 4)).append(n);
});

function changePlaces() {
    $('.r' + pressedCellCoords[0] + '.c' + pressedCellCoords[1]).text('_');
    $('.r' + emptyCellCoords[0] + '.c' + emptyCellCoords[1]).text(pressedCellCoords[2]);
    emptyCellCoords = pressedCellCoords;
};

var emptyCellCoords = [+$('.cell:contains(_)').attr('data-row'), +$('.cell:contains(_)').attr('data-cell')], pressedCellCoords = [];

$('.cell').click(function () {
    pressedCellCoords = [+$(this).attr('data-row'), +$(this).attr('data-cell'), $(this).text()];
    console.log(pressedCellCoords, emptyCellCoords);
    ([ [0, -1], [-1, 0], [0, 1], [1, 0] ].map(function (coords) {
        return [emptyCellCoords[0] + coords[0], emptyCellCoords[1] + coords[1]];
    }).join('|').indexOf(pressedCellCoords[0] + ',' + pressedCellCoords[1]) > -1) && changePlaces();
});
