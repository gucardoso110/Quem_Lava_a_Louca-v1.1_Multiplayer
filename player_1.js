//Var Player
let vel = 2.5;
let velPlayer1X = vel;
let velPlayer1Y = vel;
let xPlayer1 = 168;
let yPlayer1 = 372;
let larguraP1 = 22;
let alturaP1 = 24;
let margHitP1x = 3;
let margHitP1y = 3;

let colisaoP1 = false;

let esq = 0;

//Pontos
let pontosP1 = 0;



function player1(){
  //rect(xPlayer1 + margHitP1x, yPlayer1 + margHitP1y, larguraP1, alturaP1);
  image(galinha2, xPlayer1, yPlayer1);
  
}


function movPlayer1(){
  if (keyIsDown(87)){
      yPlayer1 -= velPlayer1Y;
  }
  if(keyIsDown(83)){
      yPlayer1 += velPlayer1Y; 
  }
   if (keyIsDown(65)){
      xPlayer1 -= velPlayer1X;
  } 
  if (keyIsDown(68)){
      xPlayer1 += velPlayer1X;
  }
 xPlayer1 = constrain(xPlayer1, 3, 470);
 yPlayer1 = constrain(yPlayer1, 0, 372);
}

function posP1inicio(){
  xPlayer1 = 168;
  yPlayer1 = 370;
}


function verificaColisaoP1(){
  for(let i = 0; i < carros.length; i++){
    colisaoP1 = collideRectRect(xCarros[i] + margemHitx, yCarros[i] + margemHity, larguraCarros, alturaCarros, xPlayer1 + margHitP1x, yPlayer1+ margHitP1y, larguraP1, alturaP1)
    if(colisaoP1){
      posP1inicio();
      audioMorreu.play();
      //print("colidiu");
      if (pontosP1MaiorZero()){
        pontosP1 -= 1;
      }
    }
  }
}

function pontosPlayer1(){
  textAlign(CENTER);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(3);
  image(galinha2, 43, 6, 18, 20);
  text(pontosP1, 25, 27);
}

function marcarPontosP1(){
  if (yPlayer1 < 5){
    audioPontos.play();
    posP1inicio();
    pontosP1 += 1;
  }
}

/*function limitePontos(){
  rect(0, 5, width, 2);
}*/

function pontosP1MaiorZero(){
  return pontosP1 > 0;
}

function vencedorP1(){
  if (pontosP1 == 5){
    image(p1venceu, 0, 0);
  }
}
