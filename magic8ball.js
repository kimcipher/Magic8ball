[codebyte language=javascript]
let username = '';

// prints out Hello, adding the username if it is truthy
username ? console.log(`Hello', ${username}!`)
: console.log('Hello!');

const userQuestion = 'Am I likely to read tonight?';

username ? console.log(`${username}, you asked \'${userQuestion}\'`)
: console.log(`You asked, \'${userQuestion}\'`);

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall ='Do not count on it';
    break;
  case 1:
    eightBall = 'My sources say no';
    break;
  case 2:
    eightBall ='Outlook not so good';
    break;
  case 3:
    ceightBall ='Reply hazy, try again';
    break;
  case 4:
    eightBall ='Cannot predict now';
    break;
  case 5:
    eightBall ='Signs point to yes';
    break;
  case 6:
    eightBall ='It is decidedly so';
    break;
  case 7:
    eightBall ='It is certain';
    break;
  default:
    eightBall ='You gotta go again, got no idea';
    break;
}

console.log(`The answer is: ${eightBall}`);


