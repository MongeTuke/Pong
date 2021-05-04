var nivelDificuldade = Number(window.prompt("Qual a dificuldade do gosto você gostaria de jogar? Responda de 1 a 15."));
var largura = 600;
var altura = 400; 
var corTabuleiro = "#1F8340";
var corBolinha = 0;
var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20; 
var velocidadeXBolinha = nivelDificuldade;
var velocidadeYBolinha = nivelDificuldade;
var xRaqesc = 10;
var aRaqesc = 300/nivelDificuldade;
var yRaqesc = ((altura/2)-(aRaqesc/2))
var lRaqesc = 10
var vRaqesc = nivelDificuldade * 1.5


function setup() {
    createCanvas(largura, altura);
}

function criarTabuleiro(corTabuleiro){
    background(corTabuleiro);
}

function criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha){
    circle(xBolinha, yBolinha, dBolinha);
    fill(corBolinha);
}

function criarRaqueteEsc(xRaqesc,yRaqesc,lRaqesc,aRaqesc){
  rect(xRaqesc,yRaqesc,lRaqesc,aRaqesc);
}

function movimentarBolinha(){
    xBolinha = xBolinha + velocidadeXBolinha;
    yBolinha = yBolinha + velocidadeYBolinha;
} 

function movRaqEsc(){
  if (keyIsDown(UP_ARROW)){
    yRaqesc = yRaqesc - vRaqesc
  }
  else if (keyIsDown(DOWN_ARROW)){
    yRaqesc = yRaqesc + vRaqesc
  }
}

function verificarColisaoBP(){
  if (xBolinha >= (largura - (dBolinha/2)) || xBolinha < (dBolinha/2)){
    velocidadeXBolinha = -1 * velocidadeXBolinha
}
  if (yBolinha >= (altura - (dBolinha/2)) || yBolinha < (dBolinha/2)){
    velocidadeYBolinha = -1 * velocidadeYBolinha
}
  //if (xBolinha == (largura - (dBolinha/2)) || xBolinha <= 0 + (dBolinha/2)){
    //xBolinha = largura / 2;
  //  yBolinha = altura / 2;
//}
}
function colisaoBR(){
  if (xBolinha -(dBolinha/2) <= xRaqesc + lRaqesc && yBolinha<= yRaqesc + aRaqesc && yBolinha>= yRaqesc){
    velocidadeXBolinha = -1 * velocidadeXBolinha
  }
}

  function draw() {
    criarTabuleiro(corTabuleiro);
    criarRaqueteEsc(xRaqesc,yRaqesc,lRaqesc,aRaqesc);
    criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha);
    movRaqEsc()
    movimentarBolinha();
    verificarColisaoBP();
    colisaoBR()
}