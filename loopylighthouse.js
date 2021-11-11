const loopyLighthouse = function(range, multiple, words) {
  let number = [] ;
  while(range[0] <= range[1]) {
    
    if (range[0] % multiple[0] === 0 && range[0] % multiple[1] === 0) {
      console.log(`${words[0]}${words[1]}`)
      //number.push(`${words[0]}${words[1]}`); 
    } else if (range[0] % multiple[0] === 0) {
      console.log(`${words[0]}`);
      number.push(`${words[0]}`);
    } else if (range[0] % multiple[1] === 0) {
      console.log(`${words[1]}`);
      number.push(`${words[1]}`);
    } else {
      console.log(range[0]);
      number.push(range[0]);
    }
    range[0] ++;
      
  }
  //console.log(number);

}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

