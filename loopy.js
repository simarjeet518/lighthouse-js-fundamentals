for (let number = 100; number <= 200 ; number++) {
  if (number % 3 == 0 && number % 4 == 0){    // if number is multiple of 3 and 4
    console.log("LoopyLighthouse");
  } else if (number % 4 == 0) {   // to check if number is multiple of 4
    console.log("Lighthouse");
  } else if (number % 3 == 0) {       // to check if number is multiple of 3
    console.log("Loopy");
  } else {
    console.log(number);
  }
}
