function activebutton() {

  var nome = document.getElementById("nome").value;
  console.log("nome del passeggero: " + nome);

  var cognome = document.getElementById("cognome").value;
  console.log("cognome del passeggero: " + cognome);

  var kilometri = document.getElementById("kilometri").value;
  console.log("kilometri da percorrere: "+ kilometri);

  var eta = document.getElementById("eta").value;
  console.log("età del passeggero: " + eta);

  var biglietto = (kilometri * 0.21);
  console.log("costo del biglietto: " + biglietto);

  var scontoMin = (biglietto * 20) / 100;
  console.log("sconto minorenni: " + scontoMin);

  var scontoMax = (biglietto * 40) / 100;
  console.log("sconto over 65: " + scontoMax);

  var codice = Math.floor(Math.random() * 10000) + 900000;
  console.log("codice biglietto: " + codice);

  var carrozza = Math.floor(Math.random() * 9 ) + 1;
  console.log("numero carrozza: " + carrozza);

  var prezzo = 0;
  console.log("prezzo: " + prezzo);

  var sconto = "";
  console.log("sconto: " + sconto);


  if (nome == "" | cognome == "" | kilometri == "" | eta ==  "") {
    alert("Riempi tutti i campi!!!");
  } else {
    stampa.className = "show";
  }
  if (eta == "maggiorenne") {
    prezzo = biglietto;
    sconto = "Sconto non previsto!"
    console.log(prezzo + sconto);
  } else if (eta == "minorenne") {
    prezzo = biglietto - scontoMin;
    sconto = "Sconto del 20%!!!"
    console.log(prezzo + sconto);
  } else if (eta == "over65") {
    prezzo = biglietto - scontoMax;
    sconto = "Sconto del 40%!!!"
    console.log(prezzo + sconto);
  }
  document.getElementById("stampa_nome").innerHTML = ("Nome passeggero: " + nome);
  document.getElementById("stampa_cognome").innerHTML = ("Cognome passeggero: " + cognome);
  document.getElementById("stampa_codice").innerHTML = ("Codice biglietto: " + codice);
  document.getElementById("stampa_carrozza").innerHTML = ("Numero carrozza: " + carrozza);
  document.getElementById("stampa_prezzo").innerHTML = ("Prezzo del biglietto: " + prezzo);
  document.getElementById("stampa_sconto").innerHTML = ("Tipo di sconto: " + sconto);

}

function activebutton2() {

  stampa.className = "hidden";
  document.getElementById("nome").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("kilometri").value = "";
  document.getElementById("eta").value = "";

  stampa_nome.innerHTML = "";
  stampa_cognome.innerHTML = "";
  stampa_codice.innerHTML = "";
  stampa_carrozza.innerHTML = "";
  stampa_prezzo.innerHTML = "";
  stampa_sconto.innerHTML = "";
}
