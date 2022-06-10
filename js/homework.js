
const primeraPeticion = new XMLHttpRequest();

console.log( primeraPeticion.readyState )

let users = []

primeraPeticion.onload = ( data ) => {

    console.log( data )

    if( data.target.status >= 200 && data.target.status <= 299 ){
        /*console.log( data.target.responseText )
        console.log( typeof data.target.responseText )

        console.log( data.target.responseText.slice( 0, 100))
        */

        let responseJSON = JSON.parse( data.target.responseText)

        //console.log( typeof responseJSON )
        //console.log( responseJSON )

         users = responseJSON
        // console.log( users )
         loadUsers(users )
    } else {
        console.log ( "Ocurrio un error")
    }

}

//primeraPeticion.open( 'GET', "/js/example.json")

primeraPeticion.open( 'GET', 'https://jsonplaceholder.typicode.com/users')
console.log( primeraPeticion )

primeraPeticion.send( )

console.log( primeraPeticion)




  

  const loadUsers = ( arr ) => {
    let template = arr.reduce((acc, cv) => {
      return acc += `
        <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${cv.name} </h5>
                <small>${cv.id}</small>
            </div>
            <p class="mb-1">${cv.username}</p>
            
            <small>${cv.email}</small>
        </a>
        
      `
    }, '')
    
    document.querySelector('.list-group').innerHTML = template
  } 


  
  const filterUsers = ( strToFilter ) => {

    console.log(strToFilter)
    return users.filter( ( user ) => {
        return user.name.toLowerCase().includes(strToFilter.toLowerCase()  ) || 
                user.username.toLowerCase().includes(strToFilter.toLowerCase()  ) || 
                user.email.toLowerCase().includes(strToFilter.toLowerCase()  )
    })
  }

 // let botonSearch = document.getElementById('btnSearch')
  let strSearch = document.getElementById('txtSearch')

  /*
    botonSearch.addEventListener('click', (  ) => {
              console.log( strSearch.value )
              let filtrados = filterUsers(strSearch.value)
              loadUsers( filtrados )
         })
  */
    strSearch.addEventListener('keyup', (  ) => {
            
            let filtrados = filterUsers(strSearch.value)
            loadUsers( filtrados )
       })

 //document.addEventListener('DOMContentLoaded', loadUsers(users ) )
  // filterUsers('brad')