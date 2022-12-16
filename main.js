// console.log("js ok");

/*
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico
 che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML
 in modo da generarle tramite JS. Al click del bottone play,
  vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente,
 in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console,
 poi coloriamo la cella d'azzurro!
*/

// tutte le funzioni

// funzione creazione cella
function createcell(num) {
  const cell = document.createElement("div");
  cell.append(num);
  cell.classList.add("cell");
  box.appendChild(cell);
  cell.addEventListener("click", function () {
    console.log(num);
    cell.classList.toggle("clicked");
  });
}

const btn = document.getElementById("btn");
const box = document.getElementById("map");

// variabili iniziali
const rows = 10;
const cols = 10;
const total = cols * rows;
btn.addEventListener("click", function () {
  box.innerHTML = "";
  for (i = 1; i <= total; i++) {
    createcell((num = i));
  }
});
