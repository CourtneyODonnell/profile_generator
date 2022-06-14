const readline = require('readline');
//provided by instructions

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  profile.push(`My name is ${answer}`);
  rl.question(`What activities do you enjoy? `, (answer) => {
    profile.push(`I enjoy ${answer}`);
    rl.question(`What is your favorite kind of music? `, (answer) => {
      profile.push(`I love to listen to ${answer}`);
      rl.question('Which meal of the day is your favourite? ', (answer) => {
        profile.push(`${answer} is my favourite meal of the day.`);
     
        rl.question(`What is your favourite food? `, (answer) => {
          profile.push(`My favourite food is ${answer}`);
       
          rl.question('Which sport is your favourite? ', (answer) => {
            profile.push(`I love ${answer}`);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.push(`My superpower is ${answer}!`);
              console.log(profile);
              rl.close();
            });
          });
        });
      });  
    }); 
  });
});
//OMG IT WORKS DONT CHANGE ANYTHING