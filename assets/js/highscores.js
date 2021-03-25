

function checkForHighScores () {
  if (localStorage.getItem('highscoresLS') !== null) {
    console.log ("I can see it!");
    createTable ();
    highscores = JSON.parse(localStorage.getItem('highscoresLS'));
    sortedArray = highscores.sort(function (a, b) {
      return parseFloat(b.score) - parseFloat(a.score);
    });
    console.log (sortedArray);
    populateTable ();
  } else {
    createNullText ()
  };
};

function createTable () {
  let table = document.createElement('table');
  table.setAttribute("class", "table")
  const tableDiv = document.getElementById("tableContainer");
  tableDiv.appendChild(table);

  row = table.insertRow();
  row.insertCell().textContent = "Username"
  row.insertCell().textContent = "Score"
};

function populateTable () {
  highscores = JSON.parse(localStorage.getItem('highscoresLS'));
  console.log (highscores);

}

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

