/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/


/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica:
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale
(o output) sarà anch’essa da scrivere in console.
*/
/*
1 - selezionare value degli input
2 - fare inserire nell'input kilometri e età
1A - seleziona il value dal input 
1b- rendere int
1c- salvare il valore
2 - chiedere l'età
2b- rendere int
2c- salvare il valore
3 - calcolare valore iniziale biglietto in let per poterlo cambiare negli if
4 - verificare se sono disponibili sconti 
5 - applicare eventuali sconti 
6 - "stampare" il prezzo del biglietto
*/
const targetPrezzoFianle = document.getElementById("prezzoFinale");
const kilometri = document.getElementById("kilometri");
const età = document.getElementById("età");
const nomeCognome = document.getElementById("nomeCognome");
const button = document.getElementById("button");




button.addEventListener("click", function(){
    //seleziono gli input
    let valoreKilometri = parseInt(kilometri.value);
    let valoreEtà = parseInt(età.value);
    //verifico che i dati inseriti siano corretti
    if (!isNaN(valoreKilometri) || !isNaN(valoreEtà)){
        
        //calcolo il prezzo del biglietto 
        let prezzoBiglietto = valoreKilometri * 0.21;
    
    
        if (età.value > 65){
            let bigliettoIntero = prezzoBiglietto;
            prezzoBiglietto -= (prezzoBiglietto * 4) / 10;
            
        }
        else if(età.value < 18 ){
            let bigliettoIntero = prezzoBiglietto;
            prezzoBiglietto -= (prezzoBiglietto * 2) / 10;
            
        };
    
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        //rendo visibile il biglietto togliendo la classe 
        
        document.getElementById("nomeBiglietto").innerText= nomeCognome.value;
        console.log();
        //randomizzo i valori di carrozza e treno
        document.getElementById("carrozzaBiglietto").innerText = Math.floor((Math.random() * 10)+1);
        document.getElementById("trenoBiglietto").innerText = Math.floor((Math.random() * 10000)+1);
        document.getElementByid
        targetPrezzoFianle.innerText =  "£" + prezzoBiglietto; 

    };










});














