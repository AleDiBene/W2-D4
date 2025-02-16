/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function(l1,l2){
    calcolo = l1 * l2;
    console.log(calcolo);
}

area(5,3)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(p1, p2){
    sum = p1 + p2;
    if(p1 ===  p2){
        sum = sum * 3;
    }

    console.log(sum);
}

crazySum(8, 2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(par) {
    let diff = Math.abs(par - 19);  // Calcola la differenza assoluta

    if (par > 19) {  // Se il numero fornito è maggiore di 19
        diff = diff * 3;
    }

    return diff;  // Restituisce la differenza (o moltiplicata per 3)
}

console.log(crazyDiff(19));  // Output: 0
console.log(crazyDiff(25));  // Output: 18
console.log(crazyDiff(10));  // Output: 9



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(num){
    if(num > 20 && num < 100){
        console.log('true')
    } else if ( num === 400){
        console.log('è uguale a 400')
    } else {
        console.log('condizione non soddisfatta');
    }
}

boundary(99)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function(string) {
    if (string.startsWith('EPICODE')) { 
        return string;  
    } else {
        return 'EPICODE ' + string;  
    }
}

console.log(epify('è il migliore.'));     
console.log(epify('EPICODE è fantastico!')); 


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(num){
    if (num <= 0) {
        return "Inserisci un numero positivo!";
    }
    if(num % 3 === 0){
        console.log('è un multiplo di 3');
    } else if(num % 7 === 0){
        console.log('è un multiplo di 7');
    } else {
        console.log('cambia numero!')
    }
}

check3and7(4);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(string){
    let arrChar = string.split('');

    let arrInvert = arrChar.reverse();

    console.log(arrInvert)
}

reverseString('come stai?');


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function(string) {
    let arrWorld = string.split(" ");
    
    for (let i = 0; i < arrWorld.length; i++) {
        // 3. Trasforma in maiuscola la prima lettera e aggiungi il resto della parola
        arrWorld[i] = arrWorld[i].charAt(0).toUpperCase() + arrWorld[i].slice(1);
    }
    return arrWorld.join(" ");
}

console.log(upperFirst('ciao come stai?'));  
console.log(upperFirst('epicode è fantastico')); 


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(string){
    let cut = string.slice(1, -1)
    return cut;
}

console.log(cutString('epicode'));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function(n) {
    let arr = [];  
    for (let i = 0; i < n; i++) {
        // Genera un numero casuale tra 0 e 10 e aggiungilo all'array
        let num = Math.floor(Math.random() * 11);  
        arr.push(num);  // Aggiungi num all'array
    }
    console.log(arr);  
}

giveMeRandom(6);  
