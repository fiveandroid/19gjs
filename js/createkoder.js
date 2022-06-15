

  

    const objCreated = ( response ) => {
        console.log( response )
    }
  
    // Create Koder
    console.log('SU codigo para crear un koder aquí')

    let btnEnviar = document.getElementById('sendKoder')

    btnEnviar.addEventListener('click', () => { 

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

                let newKoder = {
                    name: name,
                    age: age,
                    biography: biografia,
                    bootcamp: bootcamp
                }

            
                ajaxXHR(objCreated, `/koders/.json`, 'POST', newKoder)       

        }
    } )