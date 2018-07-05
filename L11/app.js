const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Detroit";
let html;

function hello() {
  return "hello";
}

// With template strings or literals
html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 29 ? "over 30" : "Under 30"}</li>
</ul>
`;
document.body.innerHTML = html;
