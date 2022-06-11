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

const createUser =  ( objUser ) => {
    console.log(JSON.stringify(objUser))
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST",  "https://mi-app-b40fd.firebaseio.com/users/.json", true)
    xhttp.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
  }





let user = {

    name: 'Edith',
    lastName: 'Martinez',
    age: 45
}

//createUser( user)

// el metodo PUT reemplaza todo el objecto
// PATCH solo actualiza lo que se manda

const updateUser =  ( userUpdated ) => {
    
    const updatexhr = new XMLHttpRequest()
    updatexhr.open( "PATCH",  "https://mi-app-b40fd.firebaseio.com/users/-N4ANczntulYq3bsga97.json", true)
    updatexhr.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    updatexhr.send( JSON.stringify(userUpdated) )
  }

  /*
updateUser( {

                name: 'Edith',
                lastName: 'Martinez Morales',
                age: 46
            }
)
*/


const deleteUser =  ( idUser ) => {
    
    const deletexhr = new XMLHttpRequest()
    // deletexhr.open( "DELETE",  `https://mi-app-b40fd.firebaseio.com/users/${idUser}.json`, true)
    deletexhr.open( "DELETE",  `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, true)
    deletexhr.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    deletexhr.send( )
  }

  //deleteUser('-N4AGbFnFcz9Jl5YLNVJ')
  //deleteUser( '-N4ANczntulYq3bsga97' ) 


  const getUsers =  ( callback  ) => {
    
    const getxhr = new XMLHttpRequest()
    // deletexhr.open( "DELETE",  `https://mi-app-b40fd.firebaseio.com/users/${idUser}.json`, true)
    getxhr.open( "GET",  `https://koders19gjs-default-rtdb.firebaseio.com/users/.json`, true)
    getxhr.onload = function(response) {
      console.log(response)
        if(response.target.status >= 200 && response.target.status <= 399){
            console.log(response.target.response)

            let users = JSON.parse(response.target.response)

            console.log(users)


        }
    }
    getxhr.send( )
  }


  const printUsers = ( users) => {
      for( user in users){
          console.log( user[user].name )
      }
  }

  getUsers( printUsers )
