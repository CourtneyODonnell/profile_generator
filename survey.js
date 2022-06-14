const readline = require('readline');

//create object for supplied questions
const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
}
//create object for answers

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

//original code from instructions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyPromt = () => {
  
};

// commented out the original code from instructions
// rl.question('What do you think of Node.js?', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });