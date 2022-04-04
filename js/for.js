function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }

  for ( let i = 0;  i < 10; i += 1) {
    console.log( `The random number is ${getRandomNumber(10)}` );
  }