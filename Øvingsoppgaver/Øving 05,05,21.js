/* Oppgave 1 */

var antallFrukt = "3"
var antallGrønsaker = "2"

var antallVarer = antallFrukt + antallGrønsaker

console.log(antallVarer);

var antallFrukt1 = 3
var antallGrønsaker1 = 2

var antallVarer1 = antallFrukt1 + antallGrønsaker1

console.log(antallVarer1);

/* Når du ikkje har "" så blir dei bare plussa sammen 3 + 2 som blir 32 men uten så  blir det eit mattestykke og blir 3 + 2 = 5 */

/* Oppgave 2 */

var pris = prompt("Kor mykje koster produkte uten moms? ")

var number = Number(pris);
number = number.toFixed(2)

var moms = number * 1.25

alert(moms);


/* Oppgave 3 */

var dataMengde = prompt("Kor mykje gigabyte datamengde har du brukt denne månen?    ")
var antallSamtaler = prompt("Kor mangen samtaler har du hatt denne månen?   ")
var ringeTid = prompt("Kor mangen minutt har du ringt folk  ")
var antallSMS = prompt("Kor mangen SMS har du sendt denn månen  ")
var antallMMS = prompt("Kor mangen MMS har du hat denne månen   ")

prisAbonnement = dataMengde * 10 + antallSamtaler * 0.89 + ringeTid * 0.39 + antallSMS * 0.69 + antallMMS * 1.99

alert(prisAbonnement);




