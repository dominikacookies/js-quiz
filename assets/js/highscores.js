// determine if any highscores have been saved in loca lstorage
function checkForHighScores () {
  if (localStorage.getItem('highscoresLS') !== null) {
    createTable ();
    const orderedScores = orderScores ();
    orderedScores.forEach(populateTable);
  } else {
    createNullText ()
  };
};

// create a table to present highscores in
function createTable () {
  let table = document.createElement('table');
  table.setAttribute("class", "table");
  table.setAttribute("id", "table")
  const tableDiv = document.getElementById("tableContainer");
  tableDiv.appendChild(table);

  row = table.insertRow();
  row.insertCell().textContent = "Place";
  row.insertCell().textContent = "Username";
  row.insertCell().textContent = "Score";
};

//order highscores in  a descending order
function orderScores () {
  highscores = JSON.parse(localStorage.getItem('highscoresLS'));
  orderedScores = highscores.sort(function (a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
  });
  return orderedScores;
};

//populate the table with highscores
function populateTable (item, index) {
  let place = index + 1;
  const table = document.getElementById("table");
  row = table.insertRow();
  row.insertCell().textContent = place;
  row.insertCell().textContent = item["username"];
  row.insertCell().textContent = item["score"];
};

//create text to notify user that no highscores have been recorded
function createNullText () {
  nullText = document.createElement("h2");
  nullText.textContent = "Sorry, there are no highscores yet";
  const tableDiv = document.getElementById("tableContainer");
  tableDiv.appendChild(nullText);
};

//clear local storage
function clearStorage () {
  localStorage.clear();
  location.reload();
};

window.addEventListener("load", checkForHighScores)
document.getElementById("clearBtn").addEventListener("click", clearStorage)

