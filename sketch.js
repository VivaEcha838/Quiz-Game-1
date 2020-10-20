var canvas, bgImage;

var quiz;

//var gameState = 0;


var form, player, game;

var database;




function setup(){
    canvas = createCanvas(displayWidth - 35, displayHeight - 30);


database = firebase.database();

game = new Game();
//game.getState();
game.start();

}

function draw(){

   /* if(playerCount === 4){
        game.update(1);

    }
    if(gameState === 1){
       clear();
       game.play();
    }*/
  
    
}



