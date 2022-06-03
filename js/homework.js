/*
let salarios = {
   'Juan': 30000,
   'Alberto': 50000,
   'Jorge': 50000

}

const totalEmpleados = (objNomina) =>{
    let nEmpleados = 0
    let sumaSalario = 0
    
    for (elemento in objNomina) {

        
        sumaSalario += parseInt(objNomina[elemento])

        nEmpleados++
        
    
    }

    let objResultado = { 
            'Empleados': nEmpleados,
            'TotalPago': sumaSalario
                 }

    return objResultado

    
}


let obj = totalEmpleados(salarios)

console.log("Total empleados", obj.Empleados )
console.log("Total a pagar", obj.TotalPago )





let koder = { languajes : ['javascript', 'Phyton', 'Ruby'],
            isMentor: true,
            level: 3,
            avatar: "https://picsum.photos/200/300"            
}

console.log( koder )

koder['languajes'].push( 'GO' )

console.log( koder )

koder.level = 4

console.log( koder )

delete koder.avatar

console.log( koder )

koder.edad = 30

console.log( koder )


console.log( koder.languajes)

let objClon = koder

console.log("objeto clonado", objClon )


*/

/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

const arrManager = ( arrKoders ) => {

    for(i = 0; i< arrKoders.length ; i++){
        
        console.log(`
            ${arrKoders[i].name}  ${arrKoders[i].lastname} 
            tiene ${arrKoders[i].age} años y es 
            de la generacion ${arrKoders[i].generation}.
        `);
    }

    //solucion Jorge
    arrKoders.forEach((ObjCompleto, index, arrayObj)=>{

        console.log(`
            ${ObjCompleto.name} ${ObjCompleto.lastname} 
            tiene ${ObjCompleto.age} años y es 
            de la generacion ${ObjCompleto.generation}.`);

    })
}

arrManager( koders )

/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */

 const arrManagerSuma = ( arrKoders ) => {
    
    let sumaEdad = 0

    for(i = 0; i< arrKoders.length ; i++){
        
        sumaEdad += parseInt(arrKoders[i].age)
        
    }

    console.log(`la suma de las edades es ${sumaEdad}.`);

     //solucion Jorge
     sumaEdad = 0

     arrKoders.forEach((ObjCompleto, index, arrayObj)=>{

        sumaEdad += parseInt(ObjCompleto.age)
        

    })

    console.log(`la suma de las edades es ${sumaEdad}.`);
}

arrManagerSuma( koders )


/**
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
 let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


    const arrManagerLibrary = ( arrLibrary ) => {

        let sumaLibros =  arrLibrary.length  

        console.log(`los libros leidos son ${sumaLibros}.`);

        arrLibrary.forEach((ObjCompleto, index, arrayObj)=>{

            console.log(`Autor:  ${ObjCompleto.author} - Titulo:  ${ObjCompleto.title} .`);
          
        })


    }
    
    arrManagerLibrary( library )

    let totalReading = library.reduce(( total, libro) => {
        return libro.readingStatus ? total += 1: total
    }, 0)

    console.log( totalReading )
    

    let authors = library.map( (author)=>{
        return author.author
    })

    console.log( authors )

    let titles = library.map( (title)=>{
        return title.title
    })

    console.log( titles )