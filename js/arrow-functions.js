// functions 

/*

 Declaracion e invocacion de funciones 
 funciones con parametros 
 funciones con parametros opcionales o valores por defecto
 funciones de retorno 

*/
/*
function retorno( a, b){

}


function suma( a, b ){
    // sentencias
}

// Arrow functions


const suma = ( a, b) =>{
    // sentencias 
}

const suma = ( a ) =>{
    // sentencias 
}

const suma = (  ) =>{
    // sentencias 
}


*/

const reversedStr = ( str )=>{

    let strUser = str.toLowerCase(); //  prompt('Dame una palabra', 'str').toLowerCase()

    let strReversed = ''


    for (let i = strUser.length - 1; i >= 0; i--) {
        
        console.log(strReversed)

        strReversed += strUser[i]
    }

    return strReversed
}


console.log( reversedStr('Hola'))
