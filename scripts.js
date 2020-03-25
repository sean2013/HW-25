// Prompt for name
const name = prompt("Please tell me your name.");

// Create function
const greeting = function() {
  console.log(`Good ${arguments["0"]} ${arguments["1"]}!`);
};

greeting("morning", name);

// Create an object that would hold the data.
const greeterDB = {
  userGreeting: greeting("morning", name)
};

greeting(greeterDB);
