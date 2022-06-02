
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