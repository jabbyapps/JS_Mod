const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 46,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL"
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val;

val = person.firstName;
// Get specific value

val = person.lastName;
val = person.hobbies[0];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 44 },
  { name: "Glen", age: 46 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
