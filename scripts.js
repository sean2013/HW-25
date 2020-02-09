// Nested object
const bio = {
  name: "Runali",
  age: 30,
  parents: {
    mother: "Rufina",
    father: "Paulino"
  }
};
console.log(bio.name);
console.log(bio.parents.father);

// Re-assign one of the value keys.
bio.age = 2;
console.log(bio.age);
