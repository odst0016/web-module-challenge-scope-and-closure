// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  counter 1 is keeping all data contained within itself until it is called you cant get count on the global scope. counter2 is incrememnting count on the global scope
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 it is reaching outside of an inner function to an outer function to get information
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *counter1 would be preferable in every case except when you need to have the variable stored at a global level for access.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let score = Math.random();
  let toreturn = 0;
  if (score < 0.34) {
    toreturn = 0;
  } else if (score > 0.33 && score < 0.67) {
    toreturn = 1;
  } else {
    toreturn = 2;
  }
  return toreturn;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, numOfInn) {
  let homeScore = 0;
  let awayScore = 0;

  for (i = 0; i < numOfInn; i++) {
    let newHomeScore = inning();
    let newAwayScore = inning();
    homeScore = homeScore + newHomeScore;
    awayScore = awayScore + newAwayScore;
  }

  return { Home: homeScore, Away: awayScore };
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(inningToCheck, homeArr, awayArr) {
  let newArrr = [];
  let awayScoree = awayArr[inningToCheck];
  let homeScoree = homeArr[inningToCheck];
  newArrr.push(awayScoree);
  newArrr.push(homeScoree);
  return newArrr;
}

function scoreboard(inning, getInningScore, numOfInn) {
  let homeArr = [];
  let awayArr = [];
  for (i = 0; i < numOfInn; i++) {
    homeArr.push(inning());
    awayArr.push(inning());
  }
  for (i = 0; i < numOfInn; i++) {
    console.log(
      `Inning ${i + 1} Away Team Score:${
        getInningScore(i, homeArr, awayArr)[0]
      } <==> Home Team Score:${getInningScore(i, homeArr, awayArr)[1]}`
    );
  }
  let homeTotal = homeArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  let awayTotal = awayArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return console.log(
    `Final Score Away Team:${awayTotal} <==> Home Team:${homeTotal}`
  );
}
