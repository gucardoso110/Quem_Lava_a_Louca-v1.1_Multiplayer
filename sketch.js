let restart;

//AQUI COMEÇA O JOGO
function setup() {
  createCanvas(500, 400);
  outputVolume(0.2);
  audioTrilha.loop();
  
}


function draw(){
  if(telaInicio == 1){
    background(imgInicial);
    //menuInicial();
    if(keyIsPressed && mouseClicked()){  
      telaInicio = 2;
   }
} 

  if(telaInicio == 2){
    background(rua);
    
    player1();
    player2();
    mostraCarros();
    movPlayer1();
    movPlayer2(); 
    movCarro();
    resetCarro(); 
    verificaColisaoP1(); 
    verificaColisaoP2();
    pontosPlayer1();
    pontosPlayer2();
    marcarPontosP1();
    marcarPontosP2();
    vencedorP1();
    vencedorP2();
    //limitePontos();  
    }
}
function mouseClicked(){
  telaInicio = 2;
}