// if ()
// Ternarios
// switch

/* 

    switch( expresion){
        case value:
            break
        case value:
            break
        default
        break
    }

*/

let age = parseInt( prompt("Indique su edad", 17) )

switch( age ){

    case 17:
        console.log("Eres menor de edad")
        break
    case 18:
        console.log("Eres menor de edad")
        break
    
    default:
        console.log("No es una edad valida")
        break
}