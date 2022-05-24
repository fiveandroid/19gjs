/*
for( inicio, fin, aumento/decremento ){

}

while(){
    // sentencias
}


do{

    //sentencias

}while()

*/
/*
let str = "Hola Koders!"

let fin = str.length - 1 
*/
/*
for( let i=0; i<fin; i++ ){

    if( str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u' ){

        console.log('Imprimo la letra: ', str[i] )
    }
}
*/

/*
for( let i=0; i<fin; i++ ){

    if( ! (str[i] == 'a' || str[i] === 'e' || str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u') ){

        console.log('Imprimo la letra: ', str[i] )
    }
}

while(){
    // sentencias
}
*/

/* let counter =1 //
while( counter <= 10){
    //console.log(counter)

    console.log( `5 x ${counter} = ${5*counter} ` )
    counter++
}
 */

/*
let str = 'Hola Koders'
let fin = str.length
let counter = 0

while( counter < fin){
    console.log( str[counter ])

    counter++
}
*/

/**
 * Imprimir string invertido
 */


/**
 * Imprimir solo vocales
 */


/**
 * Imprimir solo consonantes
 */

/*
let counter = 1

do {
    console.log( counter )
    counter++
} while( counter <= 10 )


let str = 'Hola Koders'
let fin = str.length - 1
let contador = 0

do{

    console.log( str[contador] )

    contador++

}while( contador <= fin )

*/



let contador = 0;
 let cadena = 'Hola Koder';
 
 let len = cadena.length -1;
 while(contador <= len){
     console.log(cadena[len - contador]);
     contador++;
 }
 


/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 * 
 */ 
 let count = 0;
 let cadena2 = 'Hola koder';
 let size = cadena2.length -1;
 while(count <= size){
     if( cadena2[count] === 'a' || cadena2[count] === 'e' || cadena2[count] === 'i' || cadena2[count] === 'o' || cadena2[count] === 'u'  ){
     console.log(cadena2[count]);
     }
     count++;
 
    }
/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 * 
 */ 


 count = 0;
 cadena2 = 'Hola koder';
 size = cadena2.length -1;
 while(count <= size){
     if( !(cadena2[count] === 'a' || cadena2[count] === 'e' || cadena2[count] === 'i' || cadena2[count] === 'o' || cadena2[count] === 'u')  ){
     console.log(cadena2[count]);
     }
     count++;
 
    }