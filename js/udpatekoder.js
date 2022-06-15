// url 
// http://127.0.0.1:5500/interior.html?koderkey=-N4TJNibKM9OvZbWSB_R


// window.location.search
// "?koderkey=-N4TJNibKM9OvZbWSB_R"
//  

let idKoder = window.location.search.substring(10)


// cuando el response este listo
// pintar la informacion del koder en un card


console.log( idKoder )

const loadKoder = (objKoder) => {

    console.log( objKoder )
    //destructuracion
    let {name, age, biography, bootcamp } = objKoder

    document.getElementById('nombre').value = name 
    document.getElementById('biografia').value = biography
    document.getElementById('edad').value = age
    document.getElementById('bootcamp').value = bootcamp


}

document.addEventListener('DOMContentLoaded', () => {
    // obtener el id del post
    if(idKoder !== '') {
        ajaxXHR(loadKoder, `/koders/${idKoder}.json`, 'GET')
    }
}) 


const objUpdated = ( response ) => {
    console.log( response )
}

let btnUpdate = document.getElementById('sendKoderUpdate')

btnUpdate.addEventListener('click', () => { 

        let name = document.getElementById('nombre').value
        let age = document.getElementById('edad').value
        let biografia = document.getElementById('biografia').value
        let bootcamp = document.getElementById('bootcamp').value

        console.log(name, age, biografia, bootcamp)

        if( name === '' || 
            edad === '' || 
            biografia === '' || 
            bootcamp === '' ){
                alert('Campos vacios')
        } 
        else{

                let updateKoder = {
                    name: name,
                    age: age,
                    biography: biografia,
                    bootcamp: bootcamp
                }

            
                ajaxXHR(objUpdated, `/koders/${idKoder}.json`, 'PATCH', updateKoder)       

        }
    } )