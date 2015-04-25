function move(){
	var last, first, newCell;
	if ( pressedCode && (nxC[pressedCode-33] != currCode - 37){ currCode = pressedCode; }
	last = sC.shift();
	$('.r' + last[1] +' .c' + last[0]).removeClass('active');
	first = sC[sC.length-1];
	newCell = [first[0] + nxC[currCode - 37][0], first[1] + nxC[currCode - 37][1] ];
	sC.push(newCell);
	$('.r' + newCell[1] +' .c' + newCell[0]).addClass('active');
	//pressedKeys = [];
}
function addFoodCell(){
	function getRandom(max){ return Math.round(Math.random()*max-1)+1 };
	var x = getRandom(sideWidth), y = getRandom(sideWidth);
	
	while(1){
		x = getRandom(sideWidth), y = getRandom(sideWidth);
		if (sC.join('|').indexOf(''+x+','+y) == -1) {
			$('.r' + x + '.c' + y).addClass('food'); break;
		}
	}
}

var currCode = 39, pressedCode, sideWidth = 10;
var snakeCoords = [[4,5],[5,5],[6,5]], sC = snakeCoords;
var nextCoords = [[-1,0],[0,-1],[1,0],[0,1], 2, 3, 0, 1], nxC = nextCoords;
addFoodCell();
$(document).on('keydown', function(e){ pressedCode = e.keyCode; });

var start = setInterval(move, 300);
setTimeout(function(){ clearInterval(start) }, 20000);









//limit!