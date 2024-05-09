/*const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

BmiJohn = massJohn / heightJohn ** 2;

BmiMark = massMark / heightMark ** 2;

console.log("Mark BMI", BmiMark);
console.log("John BMI", BmiJohn);

const markHigherBMI = BmiMark > BmiJohn;

if (markHigherBMI) {
  console.log(`Mark's BMI (${BmiMark}) is higher than John's (${BmiJohn}) `);
} else {
  console.log(`John's (${BmiJohn})  is higher than Mark's BMI (${BmiMark}) `);
}

//console.log(markHigherBMI);

/*const Name = "Shazzad";
const job = "SQA Engineer";
const birthYear = 1999;
const presentYear = 2024;

console.log(`I'm ${Name} , a ${presentYear - birthYear} year old ${job}!`);

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("She can drive a care 🚌");
}

console.log(Number("shazzad"));

const averageScoreDolphin = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreDolphin, averageScoreKoalas);

if (averageScoreDolphin > averageScoreKoalas) {
  console.log(`Dolphine is winer!`);
} else {
  console.log(`Koalas is winer!`);
}

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}*/

const billValue = 275;
const tipValue = 50 <= billValue >= 300 ? (275 * 15) / 100 : (275 * 20) / 100;
console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
    billValue + tipValue
  }`
);
