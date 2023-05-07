const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 121, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
// companies.forEach(function (company) {
//   console.log(company);
// });

// filter
// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// const retailCompanies = companies.filter(
//   (company) => company.category == "Technology"
// );

// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end < 1990
// );

// console.log(eightiesCompanies);

// map
// const mapCompanies = companies.map(
//   (company) =>
//     `${company.name} started on ${company.start} and ended on ${company.end}`
// );
// console.log(mapCompanies);

// const agesSquared = ages.map((age) => Math.sqrt(age));
// console.log(agesSquared);

// sort
// const sortedCompanies = companies.sort((company1, company2) =>
//   company1.start > company2.start ? true : false
// );
// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const companiesLifetimes = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(companiesLifetimes);
