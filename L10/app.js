const firstName = "Williams";
const lastName = "Johnson";
const age = 36;
const str = "Hello my name is HUMAN!";
const tags = "web design,web development,programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Glen ";
val += "Barnett";

val = "Hello, my name is " + firstName + " and I am " + age + " years old.";

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat()
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Hello", "Goodbye");

// includes()
val = str.includes("HUMAN");

console.log(val);
