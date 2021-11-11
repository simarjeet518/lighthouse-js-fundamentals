const finalPosition = function(moves) {
  
  let positionX = 0 ;
  let positionY = 0 ;
  for ( let val of moves ) {
    if ( val === "west") {
      positionX--;
      
    } else if( val === "east") {
      positionX++;
      
    } else if( val === "north") {
      positionY++;
      
    } else {
      positionY--;
    
    }
  }
  return [positionX,positionY];
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));