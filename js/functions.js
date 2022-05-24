// funciones

/* let strUser = prompt('Dame una palabra', 'str').toLowerCase()

let strReversed = ''


for (let i = strUser.length - 1; i >= 0; i--) {
    
    console.log(strReversed)

    strReversed += strUser[i]
}

console.log(strReversed) */

/*
function reversed(){

    console.log( 'Mi primera funcion JS')
}


/*     for (let i = 0; i < acomulator; i++) {   
        for (let i = 0; i < acomulator; i++) {   
        if( strMin[i]==='a'){
            containerA += 1 
        }else if( strMin[i]==='e'){
            containerE += 1
        }else{
            console.error ('no contiene letras A ni E')
        }
    } 
*/


function reversedStr(){

    let strUser = prompt('Dame una palabra', 'str').toLowerCase()

    let strReversed = ''


    for (let i = strUser.length - 1; i >= 0; i--) {
        
        console.log(strReversed)

        strReversed += strUser[i]
    }

    console.log(strReversed) 
}



function contarLetrasAE(){

    let str = prompt('Ingrese una oración', 'Hola E')
    
    let acomulator = str.length
    let containerA = 0
    let containerE = 0
    let containerBlank = 0
    let counter = 0
    let strMin = str.toLowerCase()


    do {
        if( strMin[counter]==='a'){
            containerA += 1 
        }else if( strMin[counter]==='e'){
            containerE += 1
        
        }else if( strMin[counter]===' '){
            containerBlank += 1
        }
        counter++
    } while(counter<acomulator)

    console.log("Letras A", containerA)
    console.log("Letras E", containerE)
    console.log("Espacios", containerBlank )

}


function getNumber(){

    return 3
}

function suma( v1, v2 ){

    return v1 + v2 
}



function pedirNumero(){
    return parseInt(prompt("Indique un numero", 1))
}


function sumarNumeros( v1, v2, v3 ){

    return v1 + v2 + v3

}

    let a = pedirNumero()
    let b = pedirNumero()
    let c = pedirNumero()

    console.log("La suma es: ", sumarNumeros( a, b, c ) )