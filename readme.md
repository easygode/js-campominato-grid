Esercizio di oggi: Griglia Campo Minato
nome repo: js-campominato-grid
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!
Buon lavoro!

---HTML---
1. creo una struttura base in HTML con header main e footer e un div container
2. Aggiungo 10 div per le caselle per un debug per creare la griglia di gioco
3. in CSS stilizzo la pagina
4. elimino i div creati per le caselle per poterli poi iniettare con JavaScript
--per il bonus--
5. Aggiungo un bottone select con i 3 livelli di diffocoltà

---CSS---
1. Centro e stilizzo la pagina come da bozza
2. Stilizzo la casella come da bozza
3. Aggiungo una classe "hide-grid" con "display: none" per nascondere la griglia di gioco
--per il bonus--
4. Aggiungo 3 classi (cell-100; cell-81; cell-49) per ottenere rispettivamente il numero delle caselle

---JAVASCRIPT---
1. Creo una funzione riutilizzabile per creare un elemento HTML
2. Creo una funzione per appendere l'elemento nell'HTML
3. Uso le funzioni per creare i div delle celle nell'HTML
4. Creo un alert che colora la cella di azzuro e  mostra il numero della cella al click
4. Aggiungo un eventListener al bottone "Play" che mi farà comparire o scomparire la griglia
--per il bonus--
5. Aggiungo un eventListener al bottone select dei 3 livelli di difficoltà per far comparire le rispettive caselle dei livelli di difficoltà




