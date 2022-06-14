

let idPost = window.location.search.substring(8)

console.log( idPost )

const loadPost = (objPost) => {

    document.getElementById('title').value = objPost.title
    document.getElementById('body').value = objPost.body
    document.getElementById('datepost').value = objPost.date


}

document.addEventListener('DOMContentLoaded', () => {
    // obtener el id del post
    if(idPost !== '') {
        ajaxXHR(loadPost, `/posts/${idPost}.json`, 'GET')
    }
})

// https://koders19gjs-default-rtdb.firebaseio.com/posts/-N4CF0V9tFb0Z6GXEXMq.json


const postActualizado = (response) => {
    console.log(response)
    
    if( response.title ) {
        // mostrando alert
        document.getElementById('wrap__alert').classList.remove('d-none')
        // ocultando alert
        setTimeout( ()=> {
            document.getElementById('wrap__alert').classList.add('d-none')
        }, 4000 )
    }
}

let btnActualizar = document.querySelector('#update__post')
btnActualizar.addEventListener('click',  () => {
    
    let title = document.querySelector('#title').value
    let body = document.querySelector('#body').value
    let datepost = document.querySelector('#datepost').value

    if( title !== '' && body !== '' && datepost !== '' ){

        let newPost = {
            title: title,
            body: body,
            date: datepost
        }

        ajaxXHR(postActualizado, `/posts/${idPost}.json`, 'PATCH', newPost)

    } else {
        alert('Algunos datos estan vacios')
    }
})



const postEliminado = (response) => {
    console.log(response)
    
   
        // mostrando alert
        document.getElementById('del__alert').classList.remove('d-none')
        // ocultando alert
        setTimeout( ()=> {
            document.getElementById('del__alert').classList.add('d-none')
            window.location = "index.html"
        }, 4000 )
    
    
}

let btnEliminar = document.querySelector('#delete__post')

btnEliminar.addEventListener('click',  () => {
    
    console.log("Eliminar")

    console.log(idPost )

    ajaxXHR(postEliminado, `/posts/${idPost}.json`, 'DELETE')

   
})





