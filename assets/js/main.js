var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');

btnGenera.addEventListener("click", function () {

  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('km-tratta');
  var fasciaInput = document.getElementById('fascia');

  var fullName = fullNameInput.value;
  var km = kmInput.value;
  var fascia = fasciaInput.value;

  var costoPerKm = 0.21;
  var ticketPrice = costoPerKm * km;
  var offer = "Standard Ticket";
  var scontoMinorenni = ((ticketPrice * 20) / 100);
  var scontoSilver = ((ticketPrice * 40) / 100);
  if  (fascia == "minorenne"){
  ticketPrice = ticketPrice - scontoMinorenni;
  offer = "Sconto Minorenni";
 } else if (fascia == "over65") {
  ticketPrice = ticketPrice - scontoSilver;
  offer = "Sconto Silver";
 }

 var numeroCarrozza = Math.floor(Math.random() * 9) + 1 ;
 var numeroCodice = Math.floor(Math.random() * (100000 - 90000) + 90000 -1);

 var elemName = document.getElementById('nome-passeggero');
 var elemSconto = document.getElementById('sconto');
 var elemCarrozza = document.getElementById('carrozza');
 var elemCodice = document.getElementById('codice-cp');
 var elemTicket = document.getElementById('ticket-price');

 elemName.innerHTML = fullName;
 elemSconto.innerHTML = offer;
 elemCarrozza.innerHTML = numeroCarrozza;
 elemCodice.innerHTML = numeroCodice;
 elemTicket.innerHTML = ticketPrice.toFixed(2)+"€";
 document.getElementById('biglietto').style.display = "block";
});

btnAnnulla.addEventListener("click", function () {

 document.getElementById('biglietto').style.display = "none";

 var fullNameInput = document.getElementById('full-name');
 var kmInput = document.getElementById('km-tratta');
 var fasciaInput = document.getElementById('fascia');

  fullNameInput.value = "";
  kmInput.value = "";
  fasciaInput.value = "";
});
