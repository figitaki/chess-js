var WHITE_KING = 0x01;
var WHITE_QUEEN = 0x02;
var WHITE_ROOK = 0x03;
var WHITE_BISHOP = 0x05;
var WHITE_KNIGHT = 0x06;
var WHITE_PAWN = 0x07;
 
var BLACK_KING = 0x09;
var BLACK_QUEEN = 0x0A;
var BLACK_ROOK = 0x0B;
var BLACK_BISHOP = 0x0D;
var BLACK_KNIGHT = 0x0E;
var BLACK_PAWN = 0x0F;

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
			((i+j)%2===0?'light':'dark') + '">' +
			'<div class="' + getPieceName(board[i][j]) + 
			'" row=' + i + ' col=' + j + '></div>' + 
			'</div>';
		}
		str += '</div>';
	}
	$('#board').html(str);
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

function psuedo_legal(from)

var background_color;
var selected_color;
var selected_x;
var selected_y;
var selected = false;

function refreshPage() {
	drawBoard(board);
	$('.column').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
	$('.column').click(function() {
		if(!selected) {
			$(this).addClass('selected');
			selected = true;
			selected_x = parseInt($(this).children(':first').attr('col'));
			selected_y = parseInt($(this).children(':first').attr('row'));
		} else {
			board[$(this).children(':first').attr('row')][$(this).children(':first').attr('col')] = board[selected_y][selected_x];
			board[selected_y][selected_x] = 0;
			selected = false;
			refreshPage();
		}
	});
}

$(refreshPage);