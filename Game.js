//create the game class
class Game 
{


  //create the constructor function
constructor()
{


}
//read the gamestate from the database
getState()
{
  var gameStateRef = database.ref('gameState');
  gameStateRef.on("value" , function(data)
  {
      gameState = data.val();
  });
}
//update the gamestate in the database
update(state)
{
database.ref('/').update(
  {
    gameState:state
})
}
//show the form
start()
{
if(gameState === 0)
{
voter = new Voter();
voter.getCount();
 form = new Form();
 form.display();


}


}

};