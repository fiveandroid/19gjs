

const primeraPeticion = new XMLHttpRequest();

console.log( primeraPeticion.readyState )

let posts = []

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

         posts = responseJSON
        // console.log( users )
         loadPosts( posts )
    } else {
        console.log ( "Ocurrio un error")
    }

}

//primeraPeticion.open( 'GET', "/js/example.json")

primeraPeticion.open( 'GET', 'https://jsonplaceholder.typicode.com/posts')
console.log( primeraPeticion )

primeraPeticion.send( )

console.log( primeraPeticion)


const loadPosts = ( arr ) => {
    let template = arr.reduce((acc, cv) => {
      return acc += `
        <div class="col">
            <div class="card ">
                <div class="card-header">${cv.title}</div>
                <div class="card-body h-100">
                    <h5 class="card-title bg-primary text-white"></h5>
                    <p class="card-text">${cv.body}</p>
                    <small>${cv.id}</small>
                   
                </div>
            </div>
        </div>        
      `
    }, '')
    
    document.querySelector('#card__group').innerHTML = template
  } 