

let idPost = window.location.search.substring(8)

console.log( idPost )

const loadPost = (objPost) => {

    document.getElementById('title').innerHTML = objPost.title
    document.getElementById('body').innerHTML = objPost.body
    document.getElementById('datepost').innerHTML = objPost.date


}

document.addEventListener('DOMContentLoaded', () => {
    // obtener el id del post
    if(idPost !== '') {
        ajaxXHR(loadPost, `/posts/${idPost}.json`, 'GET')
    }
})

// https://koders19gjs-default-rtdb.firebaseio.com/posts/-N4CF0V9tFb0Z6GXEXMq.json













