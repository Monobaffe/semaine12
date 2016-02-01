var xo = "";
var computer = "";
var moves = 0;
var win = 0;
var lose = 0;
var tie = 0;
var isWinner = false;
var isTied = false;
var isValid = false;
function assignPlayer(Letter) {
    xo = Letter;
    if (xo == 'X')
        { computer = 'O' }
    else
        { computer = 'X' }
    document.getElementById('X').disabled = true;
    document.getElementById('O').disabled = true;

}
function makeMove(position) {
    if (xo == "") {
        alert("utiliser le bouttons x ou o pour commencer");
        return;
    }
    if (isWinner || isTied) {
        alert("La partie est terminer,relancer la partie pour jouer encore");
        return;
    }
   	document.getElementById(position).style.color="green";
    document.getElementById(position).innerHTML = xo;
    document.getElementById(position).disabled = true;
    moves++;
 
    findWinner(xo);
    if (moves == 9 && isWinner == false) {
        alert("Partie finie, Egalité!");
        isTied = true;
        tie++;
        document.getElementById('tie').innerHTML = "Egalité: " + tie;
        return;
    }
    if (isWinner) {
        return;
    }
    getComputerMove();
    moves++;
    findWinner(computer);
   
}
function restartGame(chr) {
   
    xo = chr;
    if (xo == "X")
        computer = "O";
    else
        computer = "X";
    moves = 0;
    isWinner = false;
    isTied = false;
    isValid = false;
    document.getElementById('A1').disabled = false;
    document.getElementById('A2').disabled = false;
    document.getElementById('A3').disabled = false;
    document.getElementById('B1').disabled = false;
    document.getElementById('B2').disabled = false;
    document.getElementById('B3').disabled = false;
    document.getElementById('C1').disabled = false;
    document.getElementById('C2').disabled = false;
    document.getElementById('C3').disabled = false;
	document.getElementById('A1').style.color="black";
    document.getElementById('A1').innerHTML = "_";
	document.getElementById('A2').style.color="black";
    document.getElementById('A2').innerHTML = "_";
	document.getElementById('A3').style.color="black";
    document.getElementById('A3').innerHTML = "_";
	document.getElementById('B1').style.color="black";
    document.getElementById('B1').innerHTML = "_";
	document.getElementById('B2').style.color="black";
    document.getElementById('B2').innerHTML = "_";
	document.getElementById('B3').style.color="black";
    document.getElementById('B3').innerHTML = "_";
	document.getElementById('C1').style.color="black";
    document.getElementById('C1').innerHTML = "_";
	document.getElementById('C2').style.color="black";
    document.getElementById('C2').innerHTML = "_";
	document.getElementById('C3').style.color="black";
    document.getElementById('C3').innerHTML = "_";
}
function getComputerMove() {
    var ranMove = 0;
    var totalMoves = 0;
   
    if (document.getElementById('B2').innerHTML != xo && document.getElementById('B2').innerHTML != computer) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        return;
    }
    findGoodMove();
    
    if (isValid == false)
        blockPlayer();
    while (isValid == false) {
        ranMove = Math.floor((Math.random() * 9) + 1);
        switch (ranMove) {
            
            case 1:
                {
                    if (document.getElementById('A1').innerHTML == '_') {
						document.getElementById('A1').style.color="red";
                        document.getElementById('A1').innerHTML = computer;
                        document.getElementById('A1').disabled = true;
                        isValid = true;
                    }
                    break;
                   
                }
            case 2:
                {
                    if (document.getElementById('A2').innerHTML == '_') {
						document.getElementById('A2').style.color="red";
                        document.getElementById('A2').innerHTML = computer;
                        document.getElementById('A2').disabled = true;
                        isValid = true;
                    }
                    break;
                    
                }
            case 3:
                {
                    if (document.getElementById('A3').innerHTML == '_') {
						document.getElementById('A3').style.color="red";
                        document.getElementById('A3').innerHTML = computer;
                        document.getElementById('A3').disabled = true;
                        isValid = true;
                    }
                    break;
                }
            case 4:
                {
                    if (document.getElementById('B1').innerHTML == '_') {
						document.getElementById('B1').style.color="red";
                        document.getElementById('B1').innerHTML = computer;
                        document.getElementById('B1').disabled = true;
                        isValid = true;
                    }
                    break;
                }
            case 5:
                {
                    if (document.getElementById('B2').innerHTML == '_') {
						document.getElementById('B2').style.color="red";
                        document.getElementById('B2').innerHTML = computer;
                        document.getElementById('B2').disabled = true;
                        isValid = true;
                    }
                   
                    break;
                }
            case 6:
                {
                    if (document.getElementById('B3').innerHTML == '_') {
						document.getElementById('B3').style.color="red";
                        document.getElementById('B3').innerHTML = computer;
                        document.getElementById('B3').disabled = true;
                        isValid = true;
                    }
                   
                    break;
                }
            case 7:
                {
                    if (document.getElementById('C1').innerHTML == '_') {
						document.getElementById('C1').style.color="red";
                        document.getElementById('C1').innerHTML = computer;
                        document.getElementById('C1').disabled = true;
                        isValid = true;
                    }
                    
                    break;
                }
            case 8:
                {
                    if (document.getElementById('C2').innerHTML == '_') {
						document.getElementById('C2').style.color="red";
                        document.getElementById('C2').innerHTML = computer;
                        document.getElementById('C2').disabled = true;
                        isValid = true;
                    }
                   
                    break;
                }
            case 9:
                {
                    if (document.getElementById('C3').innerHTML == '_') {
						document.getElementById('C3').style.color="red";
                        document.getElementById('C3').innerHTML = computer;
                        document.getElementById('C3').disabled = true;
                        isValid = true;
                    }
                   
                    break;
                }
            default:
                alert("Quelque chose ne va pas " + ranMove);
                break;
            }
       

           
    }
    isValid = false;
}
function findWinner(player) {

    if (document.getElementById('A1').innerHTML == player && document.getElementById('A2').innerHTML == player && document.getElementById('A3').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (document.getElementById('B1').innerHTML == player && document.getElementById('B2').innerHTML == player && document.getElementById('B3').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (document.getElementById('C1').innerHTML == player && document.getElementById('C2').innerHTML == player && document.getElementById('C3').innerHTML == player) {
        isWinner = true;
        alert("winner is " + player);
    }
    if (document.getElementById('A1').innerHTML == player && document.getElementById('B1').innerHTML == player && document.getElementById('C1').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (document.getElementById('A2').innerHTML == player && document.getElementById('B2').innerHTML == player && document.getElementById('C2').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (document.getElementById('A3').innerHTML == player && document.getElementById('B3').innerHTML == player && document.getElementById('C3').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (document.getElementById('A1').innerHTML == player && document.getElementById('B2').innerHTML == player && document.getElementById('C3').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (document.getElementById('C1').innerHTML == player && document.getElementById('B2').innerHTML == player && document.getElementById('A3').innerHTML == player) {
        isWinner = true;
        alert("Le gagnant est " + player);
    }
    if (isWinner == true) {
        if (player == xo) {
            win++;
            document.getElementById('win').innerHTML = "Partie gagner: " + win;
        }
        else {
            lose++;
            document.getElementById('loose').innerHTML = "Partie perdu: " + lose;
        }
    }
}
function findGoodMove() {
    if (document.getElementById('A1').innerHTML == computer && document.getElementById('A2').innerHTML == computer && document.getElementById('A3').innerHTML == '_' && isValid == false) {
		document.getElementById('A3').style.color="red";
        document.getElementById('A3').innerHTML = computer;
        document.getElementById('A3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == computer && document.getElementById('A2').innerHTML == '_' && document.getElementById('A3').innerHTML == computer && isValid == false) {
		document.getElementById('A2').style.color="red";
        document.getElementById('A2').innerHTML = computer;
        document.getElementById('A2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == '_' && document.getElementById('A2').innerHTML == computer && document.getElementById('A3').innerHTML == computer && isValid == false) {
		document.getElementById('A1').style.color="red";
        document.getElementById('A1').innerHTML = computer;
        document.getElementById('A1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('B1').innerHTML == computer && document.getElementById('B2').innerHTML == computer && document.getElementById('B3').innerHTML == '_' && isValid == false) {
		document.getElementById('B3').style.color="red";
        document.getElementById('B3').innerHTML = computer;
        document.getElementById('B3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('B1').innerHTML == computer && document.getElementById('B2').innerHTML == '_' && document.getElementById('B3').innerHTML == computer && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('B1').innerHTML == '_' && document.getElementById('B2').innerHTML == computer && document.getElementById('B3').innerHTML == computer && isValid == false) {
		document.getElementById('B1').style.color="red";
        document.getElementById('B1').innerHTML = computer;
        document.getElementById('B1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('C1').innerHTML == computer && document.getElementById('C2').innerHTML == computer && document.getElementById('C3').innerHTML == '_' && isValid == false) {
		document.getElementById('C3').style.color="red";
        document.getElementById('C3').innerHTML = computer;
        document.getElementById('C3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == computer && document.getElementById('C2').innerHTML == '_' && document.getElementById('C3').innerHTML == computer && isValid == false) {
		document.getElementById('C2').style.color="red";
        document.getElementById('C2').innerHTML = computer;
        document.getElementById('C2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == '_' && document.getElementById('C2').innerHTML == computer && document.getElementById('C3').innerHTML == computer && isValid == false) {
		document.getElementById('C1').style.color="red";
        document.getElementById('C1').innerHTML = computer;
        document.getElementById('C1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A1').innerHTML == computer && document.getElementById('B1').innerHTML == computer && document.getElementById('C1').innerHTML == '_' && isValid == false) {
		document.getElementById('C1').style.color="red";
        document.getElementById('C1').innerHTML = computer;
        document.getElementById('C1').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == computer && document.getElementById('B1').innerHTML == '_' && document.getElementById('C1').innerHTML == computer && isValid == false) {
		document.getElementById('B1').style.color="red";
        document.getElementById('B1').innerHTML = computer;
        document.getElementById('B1').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == '_' && document.getElementById('B1').innerHTML == computer && document.getElementById('C1').innerHTML == computer && isValid == false) {
		document.getElementById('A1').style.color="red";
        document.getElementById('A1').innerHTML = computer;
        document.getElementById('A1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A2').innerHTML == computer && document.getElementById('B2').innerHTML == computer && document.getElementById('C2').innerHTML == '_' && isValid == false) {
		document.getElementById('C2').style.color="red";
        document.getElementById('C2').innerHTML = computer;
        document.getElementById('C2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A2').innerHTML == computer && document.getElementById('B2').innerHTML == '_' && document.getElementById('C2').innerHTML == computer && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A2').innerHTML == '_' && document.getElementById('B2').innerHTML == computer && document.getElementById('C2').innerHTML == computer && isValid == false) {
		document.getElementById('A2').style.color="red";
        document.getElementById('A2').innerHTML = computer;
        document.getElementById('A2').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A3').innerHTML == computer && document.getElementById('B3').innerHTML == computer && document.getElementById('C3').innerHTML == '_' && isValid == false) {
		document.getElementById('C3').style.color="red";
        document.getElementById('C3').innerHTML = computer;
        document.getElementById('C3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A3').innerHTML == computer && document.getElementById('B3').innerHTML == '_' && document.getElementById('C3').innerHTML == computer && isValid == false) {
		document.getElementById('B3').style.color="red";
        document.getElementById('B3').innerHTML = computer;
        document.getElementById('B3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A3').innerHTML == '_' && document.getElementById('B3').innerHTML == computer && document.getElementById('C3').innerHTML == computer && isValid == false) {
		document.getElementById('A3').style.color="red";
        document.getElementById('A3').innerHTML = computer;
        document.getElementById('A3').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A1').innerHTML == computer && document.getElementById('B2').innerHTML == computer && document.getElementById('C3').innerHTML == '_' && isValid == false) {
		document.getElementById('C3').style.color="red";
        document.getElementById('C3').innerHTML = computer;
        document.getElementById('C3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == computer && document.getElementById('B2').innerHTML == '_' && document.getElementById('C3').innerHTML == computer && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == '_' && document.getElementById('B2').innerHTML == computer && document.getElementById('C3').innerHTML == computer && isValid == false) {
		document.getElementById('A1').style.color="red";
        document.getElementById('A1').innerHTML = computer;
        document.getElementById('A1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('C1').innerHTML == computer && document.getElementById('B2').innerHTML == computer && document.getElementById('A3').innerHTML == '_' && isValid == false) {
		document.getElementById('A3').style.color="red";
        document.getElementById('A3').innerHTML = computer;
        document.getElementById('A3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == computer && document.getElementById('B2').innerHTML == '_' && document.getElementById('A3').innerHTML == computer && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == '_' && document.getElementById('B2').innerHTML == computer && document.getElementById('A3').innerHTML == computer && isValid == false) {
		document.getElementById('C1').style.color="red";
        document.getElementById('C1').innerHTML = computer;
        document.getElementById('C1').disabled = true;
        isValid = true;
    }

}
function blockPlayer() {
    if (document.getElementById('A1').innerHTML == xo && document.getElementById('A2').innerHTML == xo && document.getElementById('A3').innerHTML == '_' && isValid == false) {
		document.getElementById('A3').style.color="red";
        document.getElementById('A3').innerHTML = computer;
        document.getElementById('A3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == xo && document.getElementById('A2').innerHTML == '_' && document.getElementById('A3').innerHTML == xo && isValid == false) {
		document.getElementById('A2').style.color="red";
        document.getElementById('A2').innerHTML = computer;
        document.getElementById('A2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == '_' && document.getElementById('A2').innerHTML == xo && document.getElementById('A3').innerHTML == xo && isValid == false) {
		document.getElementById('A1').style.color="red";
        document.getElementById('A1').innerHTML = computer;
        document.getElementById('A1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('B1').innerHTML == xo && document.getElementById('B2').innerHTML == xo && document.getElementById('B3').innerHTML == '_' && isValid == false) {
		document.getElementById('B3').style.color="red";
        document.getElementById('B3').innerHTML = computer;
        document.getElementById('B3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('B1').innerHTML == xo && document.getElementById('B2').innerHTML == '_' && document.getElementById('B3').innerHTML == xo && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('B1').innerHTML == '_' && document.getElementById('B2').innerHTML == xo && document.getElementById('B3').innerHTML == xo && isValid == false) {
		document.getElementById('B1').style.color="red";
        document.getElementById('B1').innerHTML = computer;
        document.getElementById('B1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('C1').innerHTML == xo && document.getElementById('C2').innerHTML == xo && document.getElementById('C3').innerHTML == '_' && isValid == false) {
		document.getElementById('C3').style.color="red";
        document.getElementById('C3').innerHTML = computer;
        document.getElementById('C3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == xo && document.getElementById('C2').innerHTML == '_' && document.getElementById('C3').innerHTML == xo && isValid == false) {
		document.getElementById('C2').style.color="red";
        document.getElementById('C2').innerHTML = computer;
        document.getElementById('C2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == '_' && document.getElementById('C2').innerHTML == xo && document.getElementById('C3').innerHTML == xo && isValid == false) {
		document.getElementById('C1').style.color="red";
        document.getElementById('C1').innerHTML = computer;
        document.getElementById('C1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A1').innerHTML == xo && document.getElementById('B1').innerHTML == xo && document.getElementById('C1').innerHTML == '_' && isValid == false) {
		document.getElementById('C1').style.color="red";
        document.getElementById('C1').innerHTML = computer;
        document.getElementById('C1').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == xo && document.getElementById('B1').innerHTML == '_' && document.getElementById('C1').innerHTML == xo && isValid == false) {
		document.getElementById('B1').style.color="red";
        document.getElementById('B1').innerHTML = computer;
        document.getElementById('B1').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == '_' && document.getElementById('B1').innerHTML == xo && document.getElementById('C1').innerHTML == xo && isValid == false) {
		document.getElementById('A1').style.color="red";
        document.getElementById('A1').innerHTML = computer;
        document.getElementById('A1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A2').innerHTML == xo && document.getElementById('B2').innerHTML == xo && document.getElementById('C2').innerHTML == '_' && isValid == false) {
		document.getElementById('C2').style.color="red";
        document.getElementById('C2').innerHTML = computer;
        document.getElementById('C2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A2').innerHTML == xo && document.getElementById('B2').innerHTML == '_' && document.getElementById('C2').innerHTML == xo && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A2').innerHTML == '_' && document.getElementById('B2').innerHTML == xo && document.getElementById('C2').innerHTML == xo && isValid == false) {
		document.getElementById('A2').style.color="red";
        document.getElementById('A2').innerHTML = computer;
        document.getElementById('A2').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A3').innerHTML == xo && document.getElementById('B3').innerHTML == xo && document.getElementById('C3').innerHTML == '_' && isValid == false) {
		document.getElementById('C3').style.color="red";
        document.getElementById('C3').innerHTML = computer;
        document.getElementById('C3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A3').innerHTML == xo && document.getElementById('B3').innerHTML == '_' && document.getElementById('C3').innerHTML == xo && isValid == false) {
		document.getElementById('B3').style.color="red";
        document.getElementById('B3').innerHTML = computer;
        document.getElementById('B3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A3').innerHTML == '_' && document.getElementById('B3').innerHTML == xo && document.getElementById('C3').innerHTML == xo && isValid == false) {
		document.getElementById('A3').style.color="red";
        document.getElementById('A3').innerHTML = computer;
        document.getElementById('A3').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('A1').innerHTML == xo && document.getElementById('B2').innerHTML == xo && document.getElementById('C3').innerHTML == '_' && isValid == false) {
		document.getElementById('C3').style.color="red";
        document.getElementById('C3').innerHTML = computer;
        document.getElementById('C3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == xo && document.getElementById('B2').innerHTML == '_' && document.getElementById('C3').innerHTML == xo && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('A1').innerHTML == '_' && document.getElementById('B2').innerHTML == xo && document.getElementById('C3').innerHTML == xo && isValid == false) {
		document.getElementById('A1').style.color="red";
        document.getElementById('A1').innerHTML = computer;
        document.getElementById('A1').disabled = true;
        isValid = true;
    }///////
    if (document.getElementById('C1').innerHTML == xo && document.getElementById('B2').innerHTML == xo && document.getElementById('A3').innerHTML == '_' && isValid == false) {
		document.getElementById('A3').style.color="red";
        document.getElementById('A3').innerHTML = computer;
        document.getElementById('A3').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == xo && document.getElementById('B2').innerHTML == '_' && document.getElementById('A3').innerHTML == xo && isValid == false) {
		document.getElementById('B2').style.color="red";
        document.getElementById('B2').innerHTML = computer;
        document.getElementById('B2').disabled = true;
        isValid = true;
    }
    if (document.getElementById('C1').innerHTML == '_' && document.getElementById('B2').innerHTML == xo && document.getElementById('A3').innerHTML == xo && isValid == false) {
		document.getElementById('C1').style.color="red";
        document.getElementById('C1').innerHTML = computer;
        document.getElementById('C1').disabled = true;
        isValid = true;
    }

}