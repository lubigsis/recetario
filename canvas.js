//---------------------declaro variables
//board1--(izquierda)
let board1;
let boardWidth1 = 50; //px
let boardHeight1 = 600;
let context1;
//board2--(derecha)
let board2;
let boardWidth2 = 50; //px
let boardHeight2 = 600;
let context2;
//(*Ojo que puse altura del canvas en el CSS y en el JS)

//imagenes del board 1
let comidaArray = [];

let comidaWidth = 30; //ver si está bien el ancho
let comidaHeight = 40; //ver si está bien la altura
let comidaX = 10; //ver
let comidaY = boardHeight1 - comidaHeight;

let comida1Img;
let comida2Img;
let comida3Img;

//--física
let velocidadX = 0;
let velocidadY = -1;
//let gravedad = .1;



//-----doy estilos a los 2 canvas
window.onload = function(){
    board1 = document.getElementById('board1');
    board1.height = boardHeight1;
    board1.width =boardWidth1;   
    context1 = board1.getContext("2d"); //para dibujar en el board

//las 3 comidas
    comida1Img = new Image();
    comida1Img.src = 'gallina1.jpg';

    comida2Img = new Image();
    comida2Img.src = 'gallina2.jpg';

    comida3Img = new Image();
    comida3Img.src = 'gallina3.jpg';


    requestAnimationFrame(update);
    setInterval(placeComida, 1000);
   
 
//----------------------------------------------------------------------------------------------
    board2 = document.getElementById('board2');
    board2.height = boardHeight2;
    board2.width = boardWidth2;
    context2 = board2.getContext("2d");
  

}

//----------------------------------------------- REVISAR
function update(){
    requestAnimationFrame(update);

    context1.clearRect(0, 0, board1.width, board1.height);

    //dibujo la comida
    for (let i = 0; i < comidaArray.length; i++){
        let comida1 = comidaArray[i];
        comida1.y += velocidadY;
        context1.drawImage(comida1.img, comida1.x, comida1.y, comida1.width, comida1.height);
    }
}


function placeComida(){
    let comida1 = {
        img : null,
        x : comidaX,
        y : comidaY,
        width : comidaWidth,
        height : comidaHeight 
    }
    let placeComidaChance = Math.random(); //REVISAR

    if (placeComidaChance > .80){
        comida1.img = comida3Img;
        comida1.width = comidaWidth;
        comidaArray.push(comida1);
    }
    else if (placeComidaChance > .70){
        comida1.img = comida2Img;
        comida1.width =  comidaWidth;
        comidaArray.push(comida1);
    }
    else if (placeComidaChance > .50){
        comida1.img =  comida1Img;
        comida1.width = comidaWidth;
        comidaArray.push(comida1);
    }
    if(comidaArray.length > 5){
        comidaArray.shift();
    }
}