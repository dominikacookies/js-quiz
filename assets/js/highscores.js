function checkForHighScores () {
  if (localStorage.getItem('highscoresLS') !== null) {
    createTable ();
    const orderedScores = orderScores ();
    orderedScores.forEach(populateTable);
  } else {
    createNullText ()
  };
};

function createTable () {
  let table = document.createElement('table');
  table.setAttribute("class", "table");
  table.setAttribute("id", "table")
  const tableDiv = document.getElementById("tableContainer");
  tableDiv.appendChild(table);

  row = table.insertRow();
  row.insertCell().textContent = "Place"
  row.insertCell().textContent = "Username"
  row.insertCell().textContent = "Score"
};

function orderScores () {
  highscores = JSON.parse(localStorage.getItem('highscoresLS'));
  orderedScores = highscores.sort(function (a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
  });
  return orderedScores;
};

function populateTable (item, index) {
  let place = index + 1;
  const table = document.getElementById("table");
  row = table.insertRow();
  row.insertCell().textContent = place;
  row.insertCell().textContent = item["username"];
  row.insertCell().textContent = item["score"];
};

function createNullText () {
  nullText = document.createElement("h2");
  nullText.textContent = "Sorry, there are no highscores yet";
  const tableDiv = document.getElementById("table");
  tableDiv.appendChild(nullText);
};


function clearStorage () {
  localStorage.clear();
}

//document.createElement(td)
  //construct


//retrieve high scores array

// for every item in the array create <tr>

// for every item in the array create td and populate with usernmae

// for every item in the array create td and populate with score


window.addEventListener("load", checkForHighScores())
document.getElementById("clearBtn").addEventListener("click", clearStorage)

