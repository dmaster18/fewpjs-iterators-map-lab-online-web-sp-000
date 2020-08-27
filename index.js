const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function() {return titleCasedTutorials;}


function toTitleCase(string) {
  let sentence = string.toLowerCase().split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
  if (sentence.includes(""))
  return sentence;
}

const titleCasedTutorials = tutorials.map(toTitleCase);
