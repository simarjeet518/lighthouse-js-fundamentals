const range = function(start , end , step ) {
  let result1 = [] ;
  if(step === undefined || start === undefined || end === undefined || start > end || step <= 0){
    return result1;

  } else  {
    while(start <= end ) {
      result1.push(start);
      start += step;
    }
    return result1;

  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

const lastIndexOf = function(arr , num) {
  let position = 0;
  if (arr.length >= 1 ){
     
    for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === num) {
      
      position = i;
      break;
    } 

  }
  } else {
      
    position = -1;
    }
    if(position !== 0) {
    return position;
    } else {
    return -1;
    }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([3], 3), "=?", -1);