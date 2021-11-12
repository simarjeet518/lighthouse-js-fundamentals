const carPassing = function (cars, speed) {
  // Your code in here ...
  cars.push({time:Date.now(),speed:speed});
  return cars;
  
}

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highestMetric = 0 ;
  let newMetric = 0;
  let submitterName ;
  for( let i = 0; i < vegetables.length; i++) {
    newMetric = vegetables[i][metric];
    if(newMetric >highestMetric )
    {
      submitterName = vegetables[i]['submitter'];
      console.log(submitterName);
      highestMetric = newMetric;
      console.log(highestMetric);
    }
    
    
  }
  console.log(submitterName);
    
  
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
