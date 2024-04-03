// Test
console.log('Hello World!');

// Creo un array contenente i prodotti della lista
const shoppingList = ["pane", "pasta", "olio", "farina", "sale", "latte", "pomodoro"]; // array
console.log(shoppingList);

// Dichiaro una variabile di appoggio per individuare la classe <ul>
let listElem = document.querySelector(".shopping-list"); // object
console.log(listElem);

// Inizializzo una variabile contatore
let i = 0; // number

// Creo un ciclo while che generi gli elementi della lista finchè non è terminato l'array
while (i < shoppingList.length) {
    // Prendo l'elemento dell'array e lo memorizzo in una variabile di appoggio
    const curItem = shoppingList[i]; // string

    // Creo l'elemento (oggetto) <li> della lista e metto all'interno l'elemento dell'array
    const listItemElem = document.createElement("li"); // object
    listItemElem.innerHTML = curItem;
    console.log(listItemElem);

    // Aggiungo l'elemento (oggetto) <li> alla lista in modo da stamparlo in pagina
    listElem.append(listItemElem);

    // Incremento il contatore
    i++;
}