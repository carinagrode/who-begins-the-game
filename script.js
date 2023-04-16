// You're about to play a board game with your loved ones?
// Find out who begins - with this little program!

// Ask for the names of the players
const namesArray = prompt('Who\'s playing? e.g. Max, Mia, Tom');

let newNamesArray;
let names;
let starter;

// Split entered names string into names array
// Display warning message if there are no commas

if (namesArray.indexOf(',') > -1) { 
    names = namesArray.split(',');
} else {
    newNamesArray = prompt('Please separate the names with commas e.g. Max, Mia, Tom'); 
    names = newNamesArray.split(',');
    };
      
// Choose a random name from the array
// Save the name in the starter variable
function chooseName() {
    let name = names[Math.floor(Math.random()*names.length)];
    return name
}

starter = chooseName();

// Display the name in the p element of the HTML file
function displayStarter() {
    document.querySelector('p').innerHTML = starter;
}

// Change the content of the p element into an ? to start again
// Empty the starter variable and choose a new starter
function clearDisplay() {
    document.querySelector('p').innerHTML = '?';
    starter = '';
    starter = chooseName();
}

// Get a new starter name when you click the Let's see button
const start = document.getElementById('start');
start.addEventListener('click', displayStarter);

// Get a ? and choose a new name for the starter variable when you click the Reset button
const reset = document.getElementById('reset');
reset.addEventListener('click', clearDisplay);