//Var Player
let velPlayer2X = vel;
let velPlayer2Y = vel;
let xPlayer2 = 298;
let yPlayer2 = 369;
let larguraP2 = 22;
let alturaP2 = 24;
let margHitP2x = 3;
let margHitP2y = 3;

let colisaoP2 = false;


//Pontos
let pontosP2 = 0;



function player2(){
  //rect(xPlayer1 + margHitP1x, yPlayer1 + margHitP1y, larguraP1, alturaP1);
  image(galinha, xPlayer2, yPlayer2);
  
}

function movPlayer2(){
  if (keyIsDown(UP_ARROW)){
      yPlayer2 -= velPlayer2Y;
  }
  if(keyIsDown(DOWN_ARROW)){
      yPlayer2 += velPlayer2Y; 
  }
   if (keyIsDown(LEFT_ARROW)){
      xPlayer2 -= velPlayer2X;
  }
  if (keyIsDown(RIGHT_ARROW)){
      xPlayer2 += velPlayer2X;
  }
 xPlayer2 = constrain(xPlayer2, 3, 470);
 yPlayer2 = constrain(yPlayer2, 0, 369);
}

function posP2inicio(){
  xPlayer2 = 298;
  yPlayer2 = 369;
}

function verificaColisaoP2(){
  for(let i = 0; i < carros.length; i++){
    colisaoP2 = collideRectRect(xCarros[i] + margemHitx, yCarros[i] + margemHity, larguraCarros, alturaCarros, xPlayer2 + margHitP2x, yPlayer2+ margHitP2y, larguraP2, alturaP2)
    if(colisaoP2){
      posP2inicio();
      audioMorreu.play();
      //print("colidiu");
      if (pontosP2MaiorZero()){
        pontosP2 -= 1;
      }
    }
  }
}

function pontosPlayer2(){
  textAlign(CENTER);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(3);
  image(galinha, 437, 5, 20, 22);
  text(pontosP2, 475, 27);
}

function marcarPontosP2(){
  if (yPlayer2 < 5){
    audioPontos.play();
    posP2inicio();
    pontosP2 += 1;
    
  }
}

/*function limitePontos(){
  rect(0, 5, width, 2);
}*/

function pontosP2MaiorZero(){
  return pontosP2 > 0;
}

function vencedorP2(){
  if (pontosP2 == 5){
    image(p2venceu, 0, 0);
  }
}
