/*
    DOM Document Object Model
    Manipilar el documento html

        document.querySelector('item')
        element.classList.add('clasenueva')
        element.innerHTML = 'nuevohtml'
        element.addAttribute('propiedad', 'valor')
        element.addAttribute('propiedad')
        document.getElementsByTagName('h2')[1]
        document.createElement('div')
        document.getElementById(iddelinput).value

        callback es una funcion pasada como parametro

        element.addEventListener('click', callback )
        element.addEventListener('click', () => { ... } )  -> Funcion anonima

        100vw = 1680px
        10vw = 168 px
        1vw = 16.8

    BOM Browser Object Model
    Comunicarse con el navegador

    window
    window.innerWidt;
    window.innerHeight;
    window.screen; // propiedades de la pantalla

    window.navigator // Propiedades dek navegador
    window.history.back()  // hacia la pagina anterior
    windows.history.forward() // hacia la siguiente pagina abierta

    window.location 

    letscripts certificados


    Ajax Asyncronic JavaScript and XML
    Que es
    Diferentes formas de implementarlo

    XMLHttpRequest 

    0 request not initializade
    1
    2
    3
    4

    formar el request 
    esperar respuesta
    recibir response
    procesar el response

    const xhttp = new XMLHttpRequest();

    console.log( xhttp )

    JSON
     .parse text -Object 
     .stringfy Object - Text
*/

const primeraPeticion = new XMLHttpRequest();

console.log( primeraPeticion.readyState )

let users = []

primeraPeticion.onload = ( data ) => {

    console.log( data )

    if( data.target.status >= 200 && data.target.status <= 299 ){
        console.log( data.target.responseText )
        console.log( typeof data.target.responseText )

        console.log( data.target.responseText.slice( 0, 100))

        let responseJSON = JSON.parse( data.target.responseText)

        console.log( typeof responseJSON )
        console.log( responseJSON )
         users = responseJSON
         console.log( users )
         printUsers( users )
    } else {
        console.log ( "Ocurrio un error")
    }

}

//primeraPeticion.open( 'GET', "/js/example.json")

primeraPeticion.open( 'GET', 'https://jsonplaceholder.typicode.com/posts')
console.log( primeraPeticion )

primeraPeticion.send( )

console.log( primeraPeticion)


const printUsers = ( arrObjs ) => {

    let template = arrObjs.reduce( (acc, user) =>{
        return acc+= `<li>${user.id}: ${user.title}
                        <p>${user.body}</p>
                    </li>
        
        `
    }, '')

    document.querySelector('#lista__users').innerHTML = template
}

