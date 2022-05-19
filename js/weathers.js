
let sOptClima = prompt('Indica como esta el clima a) Soleado, b) Lluvioso, c) Nevado, d) Nublado', 'a')
let nTemp = parseInt(prompt('Indica la temperatura aproximada en °C', 20 ))

let nCtoF = nTemp  * (9/5) + 32
let msgClima = ""
let msg = ""

switch( sOptClima ){

    case 'a':
        msgClima = " Soleado "
        msg = " El dia esta " + msgClima + " con una temperatura de " + nCtoF + "°F"
        break
    case 'b':
        msgClima = " Lluvioso "
        msg = " El dia esta " + msgClima + " con una temperatura de " + nCtoF + "°F"
        break
    case 'c':
        msgClima = " Nevado "
        msg = " El dia esta " + msgClima + " con una temperatura de " + nCtoF + "°F"
        break
    case 'd':
        msgClima = " Nublado "
        msg = " El dia esta " + msgClima + " con una temperatura de " + nCtoF + "°F"
        break
    default:
        msg = " Opcion invalida, Para el clima escriba a,b,c, o d "
}



console.log( msg )
