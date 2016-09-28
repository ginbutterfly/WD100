// Create a "cheat sheet" JavaScript file that contains working examples with comments of:

// - Variables

var name = "Emma";
var breed = "Cavalier King Charles Spaniel";

// - Debugging (alerts, console.log, logging to HTML)

alert(name + " the " + breed);

// <script>
// 	console.log('HELLO CONSOLE!');
// </script>



// - Different data types

// String - "Hello Console"
var breed = "Cavalier King Charles Spaniel";

// Number - 5, 5.5, 1000 (all numbers in JS are floats)

var number1 = 7;
var number2 = 10;
// console.log(number1 + number2);
var result = number1 + number2;
console.log(result);


// Boolean - true, false

// A JavaScript Boolean represents one of two values: true or false.
Boolean(10 > 9)         // returns true
(10 > 9)						// returns true
(5 < 4)						// returns false

// Undefined (no value)

var x;

// - Arrays
var cars = ["Saab", "Volvo", "BMW"];

// - Testing
window.alert(name + " the " + breed);

// - Logic
var age = 10;
if (age >= 21) {
  // allow the user to see the wine site
  alert("welcome!");
} else {
  // redirect the user to welch's grape juice site
  alert("whoops! you're too young!");
}

// - Functions
var x = 10;
var y = 20;
function addStuff(x, y) {
	return x + y;
}

var result = addStuff(10, 20);
console.log(result);


function myFunction() {
    var person = prompt("Please enter your name", "John Doe");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}

function openDoor(doorNumber) {

	if (doorNumber ==== 1) {
		return "You win a car!";
	} else if (doorNumber === 2) {
		return "Sorry, all you get is a jar of pennies";
	} else if (door ==== 3) {
		return "You win a weekend in Las Vegas!";
		} else {
			return "that's not a valid door number";
		}
	}

console.log(openDoor(2));
console.log(openDoor(3);
console.log(openDoor("cat"));