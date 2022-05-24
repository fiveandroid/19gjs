/**
 * Cuantas Vocales existen
 */
let cadena = "Hola Koders"

 resultado = cadena.match(/[aeiou]/gi).length

 
console.log( cadena )
console.log( "Numero de vocales ", resultado )

/**
 *  "Hola Koders"
 * Cuantas caracteres son
 */

console.log( "Numero de caracteres ", cadena.length )

/**
 *  "Hola Koders"
 * Cortar el string en 2 strings
 */

console.log( "string en 2 secciones ",  cadena.split(" "))

/**
 *  "Hola Koders"
 * reemplazar todas las vocales x asteriscos *
 */

 console.log( "string en 2 secciones ",  cadena.replace(  /[aeiou]/gi, "*" ) )