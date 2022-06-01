/*
let koder = {
    name:'Victor',
    generation:'19',
    bootcamp:'Js',
    horario:['7-10', '12-4'],
    gender: 'M',
    isActive: false,
    modules: {
        js: true,
        maquetado: true,
        backend: false,
        react: false
    }
}


console.log( koder )

let generation = koder.generation
let backendPassed = koder.modules.backend

console.log( `
    Hola soy ${koder.name}, de la generacion ${ koder.generation}
    del bootcamp ${koder.bootcamp} con un horario de ${koder.horario[0]}, actualmente cursando el modulo 
    ${ koder.modules.js? "js":""} y registrado como ${koder.isActive? "Activo": "Inactivo"}
`)

let car = {}
console.log( car )

car.model = "Jetta"

console.log( car)

*/

/*
// dot notation
let koder = {}

koder.name = 'Victor'
koder.generation = '19'
koder.bootcamp ='Js'
koder.horario = ['7-10', '12-4']
koder.gender =  'M'
koder.isActive = false
koder.modules =  {
    js: true,
    maquetado: true,
    backend: false,
    react: false }

console.log ( koder)
 
*/

/*
//bracket notation
let koder = {}

koder['name'] = 'Victor'
koder['generation'] = '19'
koder['bootcamp'] ='Js'
koder['horario'] = ['7-10', '12-4']
koder['gender'] =  'M'
koder['isActive'] = false
koder['modules'] =  {}
koder['modules'] ['js'] = true,
koder['modules'] ['maquetado']   = true,
koder['modules'] ['backend']    = false,
koder['modules'] ['react']   = false 

console.log ( koder)

*/

//Iterando Objetos
let salarios = {
    'Jorge': '20000',
    'Lenny': '30000',
    'Kike' : '30000',
    'Ernesto': '20000'

}

/*

for( key in salarios ){

    let propiedad =  key
    let valor =  salarios[key]

    console.log( propiedad, valor )
}
*/

/*
    Calcular el total de salarios
    --> 95000
*/

/*
    ejercicio 2 
    pasar el ejercicio 1 a funcion flecha
    --> 95000
*/

const totalSalario = (objSalarios) =>{
    let sumaSalario = 0
    
    for (elemento in objSalarios) {
        let val = parseInt(objSalarios[elemento])
        sumaSalario += val
        
    
    }
    return sumaSalario
    
}

console.log(totalSalario(salarios))

/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( '
 * 
 * 
 * 
 * */


// CRUD 
/*
    Create
    Read
        console.log( objectCar.model )
    Update
        objectCar.color = 'Verde'
    Delete
        delete object.cilindraje
*/

let objectCar = {
    model: 'jetta',
    puertas: 4,
    year : 2022,
    cilindraje: 2,
    color: 'rojo',

}
/*
 Crear / actualizar un objeto
 Leer propiedades del objeto
 Como iterar propiedades del objetos
 Eliminar propiedades del objetos
 */
