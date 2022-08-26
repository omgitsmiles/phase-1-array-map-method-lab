const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// anon function using map method on tutorial array
// use split on the elements (with space between '' to denote empty char) to enable another map method
// run 2nd map method with new element run another cb function to uppercase at char1 and slice original lowercase
// .join so the array become sentences again

// const titleCased = () => tutorials.map(ele => ele.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))

function titleCased() {
  return tutorials.map(word => word.split(' ').map(letters => letters.charAt(0).toUpperCase() + letters.slice(1)).join(' '))
}