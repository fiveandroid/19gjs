
// url 
// http://127.0.0.1:5500/interior.html?koderkey=-N4TJNibKM9OvZbWSB_R


// window.location.search
// "?koderkey=-N4TJNibKM9OvZbWSB_R"
//  

let idKoder = window.location.search.substring(10)


// Hacer una peticion al server

const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( method, `https://koders19gjs-default-rtdb.firebaseio.com${url}`, true)
    xhttp.onload = function(data) {
        if(data.target.status >= 200 && data.target.status <= 399){
            let response = JSON.parse(data.target.response)
            callback(response)
        }
    }
    if(method === 'GET' || method === 'DELETE'){
        xhttp.send()
    } else {
      xhttp.send( JSON.stringify(obj) )
    }
  }
// cuando el response este listo
// pintar la informacion del koder en un card


console.log( idKoder )

const loadKoder = (objKoder) => {

    //destructuracion
    let {name, age, biography, bootcamp } = objKoder

    document.getElementById('name').innerHTML = name 
    document.getElementById('biography').innerHTML = biography
    document.getElementById('age').innerHTML = age
    document.getElementById('bootcamp').innerHTML = bootcamp


}

document.addEventListener('DOMContentLoaded', () => {
    // obtener el id del post
    if(idKoder !== '') {
        ajaxXHR(loadKoder, `/koders/${idKoder}.json`, 'GET')
    }
}) 