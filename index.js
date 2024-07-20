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

const titleCased = () => {
  return capitalizeFirstLetter(tutorials)
}


// Attempt 1
// const titleCased = {
//   for (let i = 0; i < tutorials.length; i++) {
//     const tutorialWords = tutorials[i].split(" ");
//     for (let w = 0; w < tutorialWords.length; w++) {
//       return tutorialWords[0].toLocaleUpperCase()
//     }
//   }
// }

// Attempt 2
// const titleCased = tutorials.map(tutorial => {
//   const words = tutorial.split(" ");
//   const titleCaseWords = words.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   });
//   return titleCaseWords.join(" ");
// })

// 3rd Attempt
function capitalizeFirstLetter(tutorials) {
  return tutorials.map(tutorial => {
    const words = tutorial.split(" ");
    const titleCasedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return titleCasedWords.join(" ");
  });
}


// Revisit...
// const titleCased2 = tutorials.map(tutorial => tutorial.split(" "))