var database = [
  {
    username: 'yakubu',
    password: 'supersecret',
  },
];

var newsFeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning',
  },
  {
    username: 'Sally',
    timeline: 'Javascript is so coool!',
  },
];

var userNamePrompt = prompt("What's is your username ?");
var passwordPrompt = prompt("What's is your passord ?");

function sigIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert('Sorry, username and password do not match');
  }
}

console.log(sigIn(userNamePrompt, passwordPrompt));
