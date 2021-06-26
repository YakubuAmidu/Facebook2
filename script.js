var database = [
  {
    username: 'yakubu',
    password: 'supersecret',
  },
  {
    username: 'Sally',
    password: '123',
  },
  {
    username: 'Ingrid',
    password: '777',
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

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function sigIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert('Sorry, username and password do not match');
  }
}

console.log(sigIn(userNamePrompt, passwordPrompt));
