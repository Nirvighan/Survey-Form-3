//create all the variables
var canvas, backgroundImg;
var gameState = 0;
var voterCount;
var database;
var form, voter, game;

function setup() 
{

    ///create the canvas
    canvas = createCanvas(1000, 1000);

    //connect the database
    database = firebase.database();

    //create a new object for game
    game = new Game();
    game.getState();
    game.start();
}

function draw() 
{

    //clear teh background
    background(200);


}

//create a function to save information in the database
function saveToDatabase() 
{
    if(database != null) 
    {
        database.on()
    }
}
