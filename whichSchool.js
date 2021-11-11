const whichSchool = function(age) {
  if (age < 13) {                       //for ages below 13
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {   //between 13 and 18
    return "Secondary School";
  }  else {
    return "Lighthouse Labs";       // above 18
  }
  }
console.log("i am 35 which school i should go for");
console.log(whichSchool(35));