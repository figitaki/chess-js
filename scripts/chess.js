var WHITE_KING = 100;
var WHITE_QUEEN = 90;
var WHITE_ROOK = 50;
var WHITE_BISHOP = 31;
var WHITE_KNIGHT = 30;
var WHITE_PAWN = 10;
 
var BLACK_KING = -WHITE_KING;
var BLACK_QUEEN = -WHITE_QUEEN;
var BLACK_ROOK = -WHITE_ROOK;
var BLACK_BISHOP = -WHITE_BISHOP;
var BLACK_KNIGHT = -WHITE_KNIGHT;
var BLACK_PAWN = -WHITE_PAWN;

var board = [[BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
             [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
             [0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0],
             [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
             [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK]];

function drawBoard(board) {
	var str = '';
	for (var i=0; i<8; i++) {
		str += '<div class="row">';
		for (var j=0; j<8; j++) {
			str += '<div class="column ' + 
			((i+j)%2===0?'light':'dark') + '"">' +
			'<div class="' + getPieceName(board[i][j]) + '"></div>' + 
			'</div>';
		}
		str += '</div>';
	}
	$('#board').append(str);
}

function getPieceName(peiceValue) {
	switch(peiceValue) {
		case WHITE_KING: return 'WHITE_KING';
		case WHITE_QUEEN: return 'WHITE_QUEEN';
		case WHITE_ROOK: return 'WHITE_ROOK';
		case WHITE_BISHOP: return 'WHITE_BISHOP';
		case WHITE_KNIGHT: return 'WHITE_KNIGHT';
		case WHITE_PAWN: return 'WHITE_PAWN';

		case BLACK_KING: return 'BLACK_KING';
		case BLACK_QUEEN: return 'BLACK_QUEEN';
		case BLACK_ROOK: return 'BLACK_ROOK';
		case BLACK_BISHOP: return 'BLACK_BISHOP';
		case BLACK_KNIGHT: return 'BLACK_KNIGHT';
		case BLACK_PAWN: return 'BLACK_PAWN';

		default: return 'EMPTY';
	}
}

$(function() {
	drawBoard(board);
});
