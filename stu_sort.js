var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// students.sort(function (a,b){
//   console.log(b.age);
// //  console.log(b);
// })

// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

students.sort(function(a, b) {
  aAge = a.age
  bAge = b.age

  return b.age - a.age;
});

console.log(students);

//students.age will access age
//students.name will access name
//students.id will access their ID