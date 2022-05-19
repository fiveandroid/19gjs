
console.log('Inicio')

let numero01 = prompt('Indica un numero', 1)
let numero02 = prompt('Indica un segundo numero', 2)
let numero03 = prompt('Indica un tercer numero', 3)

let valor01 = parseInt(numero01)
let valor02 = parseInt(numero02)
let valor03 = parseInt(numero03)


if ( valor01 > valor02 && valor01 > valor03 ){

   

        console.log('El primer numero es el mayor' +  valor01 ) 
    

} 
else if ( valor02 > valor01 && valor02 > valor03 ){

    console.log('El segundo numero es el mayor' +  valor02 ) 

}
else if ( valor03 > valor01 && valor03 > valor02 ){   

        console.log('El tercer numero es el mayor' +  valor03 ) 

}
else{
        console.log('Son iguales'  ) 
 }
