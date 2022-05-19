//Pedir al usuario los grados celcius en su localidad
// convertir C to f
// celsius * 9/5 + 32
// calcular los F



let grados = window.prompt('Indica los grados celcius de tu localidad', 1)

let resultado  = 0;

resultado = parseInt( grados) * (9/5) + 32

let messageToShow= "Los grados F son: " + resultado  

alert( messageToShow )



