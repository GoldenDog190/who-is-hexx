'use strict';

/*
About Me Details:

Q1: Was Hexx raised in the city or the country? - country
  if country
    OMG! Is it THAT obvious?!?!
  else
    Ha! Yes! No one has to know that I was actually raised in the swamps of Texas!

Q2: Would you believe that Hexx loves to ride motorcycles? - Yes
  if yes
    Duh, who doesn't love a beautifully hand-painted cruiser? Varoom!
  else
    Thats fair. I don't even have a car. But I do have my motorcycle license!

Q3: Do you think Hexx has ever been a professional ballerina? - yes
  if yes
    Yup. Ballet is the reason my pinky toes don\'t touch the ground.
  else
    Really? I mean, I know I don\'t come off as the most graceful but give me some credit! I was a ballerina for 18 years!

Q4: Does Hexx prefer summer or winter? - Summer
  if summer
    Yes! Give me all the heat!
  else
    Nooooo, snow is too cold to enjoy. Prove me wrong.

Q5: Does Hexx enjoy biking or rollerskating more? - rollerskating
  if rollerskating
    Yeah! This is how we roll!
  else
    Naw, 8 wheels are better than 2! Later Sk8er!
*/

//-------------------welcome--------------------------

var yourName = prompt('Hey friend, what name may I call you?');
console.log('yourName :', yourName);

alert('Hey ' + yourName + '! It\'s great to meet you! Thanks for visting my site!');

//--------Q1-----------country vs city----------------

var countryAnswer = prompt('Was Hexx raised in the city or the country?').toLowerCase();
if(countryAnswer === 'country') {
  alert('OMG! Is it THAT obvious?!?!');
  //console.log('they answered \'Was Hexx raised in the city or the country\' correctly');
} else {
  alert('Ha! Yes! No one has to know that I was actually raised in the swamps of Texas!');
  //console.log('they answered \'Was Hexx raised in the city or the country\' incorrectly');
}

//--------Q2-----------motorcycles----------------

var motorcycleAnswer = prompt('Would you believe that Hexx loves to ride motorcycles?').toLowerCase();
if(motorcycleAnswer === 'yes') {
  alert('Duh, who doesn\'t love a beautifully hand-painted cruiser? Varoom!');
  //console.log('they answered \'Would you believe that Hexx loves to ride motorcycles?\' correctly');
} else {
  alert('Thats fair. I don\'t even have a car. But I do have my motorcycle license! ');
  //console.log('they answered \'Would you believe that Hexx loves to ride motorcycles?\' incorrectly');
}

//--------Q3-----------ballerina----------------

var ballerinaAnswer = prompt('Do you think Hexx has ever been a professional ballerina?').toLowerCase();
if(ballerinaAnswer === 'yes') {
  alert('Yup. Ballet is the reason my pinky toes don\'t touch the ground.');
  //console.log('they answered \'Do you think Hexx has ever been a professional ballerina?\' correctly');
} else {
  alert('Really? I mean, I know I don\'t come off as the most graceful but give me some credit! I was a ballerina for 18 years!');
  //console.log('they answered \'Do you think Hexx has ever been a professional ballerina?\' incorrectly');
}

//--------Q4-----------summer vs winter----------------

var summerAnswer = prompt('Does Hexx prefer summer or winter?').toLowerCase();
if(summerAnswer === 'summer') {
  alert('Yes! Give me all the heat!');
  //console.log('they answered \'Does Hexx prefer summer or winter?\' correctly');
} else {
  alert('Nooooo, snow is too cold to enjoy. Prove me wrong.');
  //console.log('they answered \'Does Hexx prefer summer or winter?\' incorrectly');
}

//--------Q5-----------rollerskating--------------------

var rollerskatingAnswer = prompt('Does Hexx enjoy biking or rollerskating more?').toLowerCase();
if(rollerskatingAnswer === 'rollerskating') {
  alert('Yeah! This is how we roll!');
  //console.log('they answered \'Does Hexx enjoy biking or rollerskating more?\' correctly');
} else {
  alert('Naw, 8 wheels are better than 2! Later Sk8er!');
  //console.log('they answered \'Does Hexx enjoy biking or rollerskating more?\' incorrectly');
}


