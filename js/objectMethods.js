

// object.assing()
// Object.create()

/*

console.log("create")

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();



console.log("assing")
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);


// Initialize an object

console.log("Keys")
// Object.keys
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);


console.log("Values")
// Object.values
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);

console.log("Entries")
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);


console.log("Freeze")
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

console.log("seal")
// Initialize an object
const userx = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUserx = Object.seal(userx);

newUserx.password = '*******';
newUserx.active = true;

console.log(newUserx);



*/



// equipo 2

/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */
// solución con .entries()

let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}

const makePairs = (object) => Object.entries( object )

console.log ( makePairs( salarios ) )



// solución con .map()
const makePairsMap = (object) => {

     let arrKeys =  Object.keys( object ) 
   

     return arrKeys.map( ( item, index ) => [ item, object[item] ] )

    
}


console.log( makePairsMap( salarios ) )

/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */
/*
 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}
marca_de_verificación_blanca
ojos
manos_levantadas
*/













