// Fizz Buzz with for loop
for(i = 1; i <= 100; i++)
{
  if(!(i % 3) && !(i % 5)){
    console.log("FizzBuzz!");
  }
  else if(!(i % 3)){
    console.log("Fizz!");
  }
  else if(!(i % 5)){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

// Create an empty object
const myObject = {
}
// Use confirm() to set a boolean value inside that object
myObject.message = confirm("Press a button!\nEither OK or Cancel.");

if(myObject.message == true){
  console.log("You pressed OK!");
}
else{
  console.log("You pressed cancel!");
}



