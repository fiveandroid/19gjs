/* 
// Usando .filter

let aNewArr = [10,20,30,41]

let soloPares =  aNewArr.filter( (currenValue, index, copiaArrOriginal ) =>{ 

    if( currenValue%2 === 0){
        return currenValue
    }
})

console.log( soloPares ) 

*/

/* Escribir una funcion que filtre solo las ciudades */
/*

// Solucion con filter

let arrMultiple = [ 1,23,4, 'México', 'Peru', 'España', 3]

let soloCiudades =  arrMultiple.filter( (currenValue, index, copiaArrOriginal ) =>{ 

    if( !(currenValue < 0 || currenValue > 0) ){
        return currenValue
    }
})

console.log( soloCiudades ) 
*/

// Solucion con forEach
/*
let arrMultiple = [ 1,23,4, 'México', 'Peru', 'España', 3]

let soloCiudades =  ( arrItems ) => {

    let arr = []

    arrItems.forEach( (item, index, array ) =>{ 

        if( !( item < 0 || item > 0) ){
           arr.push( item )
           
        }

       

    })

   return  arr  
}

console.log ( soloCiudades( arrMultiple ) )

*/

// Ejercicio
/*
let filtrado = nombres

    .filter( (  nombre, index, arr) =>{
        if( nombre.charAt(0) === 'a' || nombre.charAt(0) === 'e' || 
            nombre.charAt(0) === 'i' || nombre.charAt(0) === 'o' || 
            nombre.charAt(0) === 'u'){
            return nombre
        }
    })
    .map( (nameFiltered) => {
        let firsLetter = nameFiltered.charAt(0).toUpperCase()
        let rest = nameFiltered.substr(1)

        return firsLetter + rest
    })

*/



const additionMultiArr = ( arreglodeArreglos ) =>{

    let counter=0

    arreglodeArreglos.forEach( (arreglo) =>{
        arreglo.forEach( (numero )=>{
            counter += numero
        })
    })

    return counter

}

console.log ( additionMultiArr( [ [1,2,3], [1,3,2], [3,2,1] ] ) )