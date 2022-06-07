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
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

/**
 * Ejercicio 3
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */



const tarea3 = () => {
    console.log('Ejecutando tarea 3')
    let tbody = document.querySelector('tbody')
    koders.forEach( (koder, index, arr) => {
    
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        tdName.textContent = koder.name
        tr.appendChild(tdName)
        let tdAge = document.createElement('td')
        tdAge.textContent = koder.age
        tr.appendChild(tdAge)
        let tdGen = document.createElement('td')
        tdGen.textContent = koder.generation
        tr.appendChild(tdGen)
        console.log(tr)
        tbody.appendChild(tr)
        
    })
}


<button onclick="tarea1()" > Ver ejercicio 1</button>
        <button onclick="tarea2()" > Ver ejercicio 2</button>
        <button onclick="tarea3()" > Ver ejercicio 3 </button>
21:41
<h1> Dom Events  </h1>

        <button onclick="tarea1()" > Ver ejercicio 1</button>
        <button onclick="tarea2()" > Ver ejercicio 2</button>
        <button onclick="tarea3()" > Ver ejercicio 3 </button>


        <table>
            <thead>
                <th>nombre</th>
                <th>edad</th>
                <th>generación</th>
            </thead>
            <tbody>

            </tbody>
        </table>


const tarea1 = () => {
    const body =  document.querySelector('body')
    const list = documente.createElement('ul')
    lista.setAttribute('id', 'lista')

    list.setAttribute('class', 'lista lista3')

    lista.classlist.add('lista2')
    lista.classlist.remove('lista2')
    let menus = ['Home', 'Products', 'About Us']


    menus.forEach( (menu) =>{
        let li = document.createElement('li')
        li.textContent = menu
        lista.appendChild(li)
    })

    menus.forEach( (menu) =>{
      listItems += 1
    })
}