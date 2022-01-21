//declarar variables para las animaciones de 
//dormir, cepillarse, ejercitarse, comer, bañarse y moverse
var bg,sleep, brush, gym, eat, bath, move;
var astronaut,tecla;

//1 precargar las imágenes
function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}


function setup() {
  createCanvas(600, 500);
  
  
  //2 crear un sprite para el astronauta
  //3 se agregan las animaciones para cada rutina
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.addAnimation("moving", move);
  astronaut.addAnimation("gymming", gym);
  astronaut.addAnimation("brushing", brush);
  astronaut.addAnimation("bathing", bath);
  astronaut.addAnimation("eating", eat);
  astronaut.addAnimation("brushing", brush);
  
  astronaut.scale = 0.1;
  
}

function draw() {
  
  //4 agregar la imagen al fondo;
  background(bg);
  //background("bg");
  //background=bg;
  //background(white);
  
  
  drawSprites();

  
  //5 se muestran las instrucciones para ver
  //las animaciones del juego.
  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia Arriba = Cepillarse",20, 55);
  text("Flecha hacia Abajo = Ejercitarse",20, 70);
  text("Flecha hacia la Izquierda = Comer",20, 85);
  text("Flecha hacia la Derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  //6 se invoca a la función para que acepte argumentos
  //rutina("keyCode");
  //rutina()="keyCode";
  rutina(keyCode);
  //rutina=keyCode;

}
//7 se hace la función para que acepte el argumento
//de keyCode, el cual lee el código ASCII de la tecla


//function rutina("tecla"){
function rutina(tecla){
//function rutina(keyCode){
//function rutina("keyCode"){
  if(tecla === 37){ //37 equivale a izquierda
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(tecla === 38){//38 equivale a arriba
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  
  if(tecla === 39){//39 equivale a derecha
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(tecla === 40){//40 equivale a abajo
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(tecla === 77){//77 equivale a "m"
    astronaut.changeAnimation("moving",move);
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}



