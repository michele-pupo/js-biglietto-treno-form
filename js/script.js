// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
// secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// - Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone 
// (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) 
// sarà anch’essa da scrivere in console.

// MILESTONE 2:
// - Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina 
// in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca.

// salvataggio degli elementi del DOM
const buttonElement = document.querySelector("#price");
const inputAgeElement = document.querySelector("#user-age");
const inputKmElement = document.querySelector("#user-km");
const inputStart = document.querySelector("#start");
const inputEnd = document.querySelector("#end");
const inputName = document.querySelector("#user-name");


// prezzo al chilometro
const priceForKm = 0.21;
// sconti per fascia di età
const percentageOfMinors = 20;
const percentageOver65 = 40;


// al click prende i valori di anni e km ed effettua il calcolo del prezzo del biglietto
buttonElement.addEventListener('click',
    function(){

        // stazione di partenza
        document.querySelector("#start-station").innerHTML = inputStart.value + "<br> ore 8.30 - 31/01/2024";
        // stazione di arrivo
        document.querySelector("#end-station").innerHTML = inputEnd.value + "<br> ore 15.00 - 31/01/2024";
        // nome
        document.querySelector("#name-user").innerHTML = inputName.value;

        // calcolo prezzo biglietto intero con doppia cifra dopo la virgola
        const priceToTicket = ((priceForKm * inputKmElement.value).toFixed(2));

        // calcolo sconto minorenni
        const discountForMinors = (((priceToTicket / 100) * percentageOfMinors));
        // calcolo sconto over 65
        const discountForOver65 = (((priceToTicket / 100) * percentageOver65));
        
        
        // utente minorenne sconto 20%
        if (inputAgeElement.value < 18){
            // sconto del 20%
            console.log("-20%");
            // calcolo prezzo del biglietto
            document.querySelector("#ticket-price").innerHTML = `Importo totale: ${(priceToTicket - discountForMinors).toFixed(2)} €`;

            // utente con età compresa tra 18 e 65 niente sconto
        } else if (inputAgeElement.value >= 18 && inputAgeElement.value < 65){
            console.log("prezzo intero");
            // calcolo prezzo del biglietto
            document.querySelector("#ticket-price").innerHTML = `Importo totale: ${(priceToTicket)} €`;

            // utente over 65 sconto 40%
        } else {
            // sconto del 40%
            console.log("-40%");
            // calcolo prezzo del biglietto
            document.querySelector("#ticket-price").innerHTML = `Importo totale: ${(priceToTicket - discountForOver65).toFixed(2)} €`;
        }
    }
);