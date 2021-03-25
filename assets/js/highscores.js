

function checkForHighScores () {
  if (localStorage.getItem('highscoresLS') !== null) {
    console.log ("I can see it!");
    //createTable ();
    //populateTable ();
    //highscores = JSON.parse(localStorage.getItem('highscoresLS'));
  } else {
    createNullText ()
  };
};

function createTable () {
  one = "hello"
  let table = document.createElement('table');

  const tableDiv = document.getElementById("table");
  tableDiv.appendChild(table);

  let row = table.insertRow();
  let cell = row.insertCell();
  cell.textContent = one;
};

function createNullText () {
  nullText = document.createElement("h2");
  nullText.textContent = "Sorry, there are no highscores yet";
  const tableDiv = document.getElementById("table");
  tableDiv.appendChild(nullText);
}


//document.createElement(td)
  //construct


//retrieve high scores array

// for every item in the array create <tr>

// for every item in the array create td and populate with usernmae

// for every item in the array create td and populate with score


window.addEventListener("load", checkForHighScores())

