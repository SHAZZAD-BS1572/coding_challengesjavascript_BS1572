const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

//Exercise array

const calcAge = (birthYear) => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(age);

//Part 2 // Coding Challenge #2 tip calculator

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(`Bills ${bill}, Tips ${tips}, Totals ${totals}`);

//

const abdull = {
  firstName: "Abdull",
  lastName: "Abid",
  age: 2037 - 1998,
  job: "Software engineer",
  friends: ["jilani", "sakib", "sakil"],
};

// Challenge
// "Abdull has 3 friends, and his best friend is called jilani"

console.log(
  `Abdull has ${abdull.friends.length} friends, and his best friend is called ${abdull.friends[0]}`
);

// Challenge
// Need to create a mathod to get summary information.

const abid = {
  firstName: "Abid",
  lastName: "khan",
  birthYear: 1998,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2007 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      abid.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(abid.getSummary());

//Coding Challenge #3 calculate higher BMI

const muhammad = {
  name: "Muhammad",
  mass: "78",
  height: "1.69",
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(muhammad.calcBmi());

const abdullah = {
  name: "Abdullah",
  mass: "92",
  height: "1.95",
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

muhammad.calcBmi();
abdullah.calcBmi();

console.log(muhammad.bmi, abdullah.bmi);

if (muhammad.bmi > abdullah.bmi) {
  console.log(
    `${muhammad.name}'s BMI (${muhammad.bmi}) is higher than ${abdullah.name}'s BMI (${abdullah.bmi})`
  );
} else if (abdullah.bmi > muhammad.bmi) {
  console.log(
    `${abdullah.name}'s BMI (${abdullah.bmi}) is higher than ${muhammad.fullName}'s BMI (${muhammad.bmi})`
  );
}

// Coding Challenge #4

const totalTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < Bills.length; i++) {
  const tip = totalTip(Bills[i]);
  tips.push(tip);
  totals.push(tip + Bills[i]);
}

console.log(Bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(Bills));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
