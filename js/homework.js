

function reversedStr(){

    let strUser = prompt('Dame una palabra', 'str').toLowerCase()

    let strReversed = ''


    for (let i = strUser.length - 1; i >= 0; i--) {
        
        console.log(strReversed)

        strReversed += strUser[i]
    }

    alert(strReversed) 
}





function pedirNumero(){
    return parseInt(prompt("Indique un numero", 1))
}


function sumarNumeros( v1, v2, v3 = 3 ){

    return v1 + v2 + v3

}

    let a = pedirNumero()
    let b = pedirNumero()
    let c = pedirNumero()

    if ( (a < 0 || b < 0 ) ||  (a < 0 && b < 0 ) ) {

        console.log("Faltan Datos" )
    }
    else{

        console.log("La suma es: ", sumarNumeros( a, b, c ) )
    }

    


    function tablaMultiplicar(){

        for( let i = 1; i < 11; i++){


            for( let y = 1; y < 11; y++){

            console.log( `${i} x ${y} = ${ i*y} ` )

            }


        }
    }


    function addNumberLimit(){

        let endPoint = parseInt(prompt('Ingrese un número entre 1 y 100'))
        let suma = 0

        
        for (let i = 0; i <= endPoint; i++) {
            suma= suma + i
        }

        alert("La suma es:" + suma )
    }