const raining = true;
const cold = false;
const temperature = -1;

if (raining) {
  console.log('Don\'t forget your umbrella!' );
}

if (temperature < 0) {
  console.log('Make sure your pick out a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside!');


