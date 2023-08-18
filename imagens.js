let galinha;
let galinha2;
let galinha_2_esq;

let fundo;
let rua;
let imgInicial;

let carro_1;
let carro_2; 
let carro_3; 
let carro_4; 
let carro_5; 
let carro_6; 


let audioTrilha;
let audioMorreu;
let audioPontos;

//Var de Telas
let telaInicio = 1;
let p1venceu;
let p2venceu;

function preload(){
  fundo   = loadImage("imagens/fundo.png");
  rua = loadImage("imagens/rua_gelo.png");
  imgInicial = loadImage("imagens/tela_inicial_5.png");
  
  galinha = loadImage("imagens/galinha.png");
  galinha2 = loadImage("imagens/galinha_2.png");
  galinha2Esq = loadImage("imagens/galinha_2_esq.png");
  
  carro_1 = loadImage("imagens/carro_1.png");
  carro_2 = loadImage("imagens/carro_2.png");
  carro_3 = loadImage("imagens/carro_3.png");
  carro_4 = loadImage("imagens/carro_4.png");
  carro_5 = loadImage("imagens/carro_5.png");
  carro_6 = loadImage("imagens/carro_6.png");
  carros  = [carro_1, carro_2, carro_3, carro_4, carro_5, carro_6];
  
  audioTrilha = loadSound("sons/musica.mp3");
  audioMorreu = loadSound("sons/colidiu.mp3");
  audioPontos = loadSound("sons/pontos.wav");
  
  p1venceu = loadImage("imagens/player_1_venceu.png")
  p2venceu = loadImage("imagens/player_2_venceu.png")
}