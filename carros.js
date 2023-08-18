//Var Carros

let xCarros = [-100, 500, -110, 520, -130, 600];
let yCarros = [316, 259, 205, 150, 99, 43];
let velCarros = [-6, 4.5, -8, 6, -7, 8.5];
let larguraCarros = 60;
let alturaCarros = 28;
let margemHitx = 3
let margemHity = 4

function mostraCarros(){
  for (let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i]);
   // rect(xCarros[i] + margemHitx, yCarros[i] + margemHity, larguraCarros, alturaCarros);
  }
}

function movCarro(){
  for (let i = 0; i < carros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function resetCarro(){
  for (let i = 0; i < carros.length; i++){
    if(passouTelaMenos(xCarros[i])){
      xCarros[i] = 550;
    }
    if(passouTelaMais(xCarros[i])){
      xCarros[i] = -150;
    }
  }
}

function passouTelaMenos(xCarro){
  return xCarro <= -150;
}

function passouTelaMais(xCarro){
  return xCarro >= 610;
}