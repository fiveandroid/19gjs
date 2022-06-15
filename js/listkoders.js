
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
  
  /* Estructura de cada koder
    {
      name: 'jorge',
      age: 30,
      bootcamp: 'js',
      biography: 'lorem ipsum dolot sit amet'
    }
  */
  
  // uso de la funcion 
  // GET , DELETE
  // ajaxXHR(nombreDeFuncionAllamar, `/koders/.json`, 'GET')
  // ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'DELETE')
  
  // POST, PUT, PATCH
  // ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'POST', obj)
  // ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PUT', obj)
  // ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PATCH', obj)
  
  
  
  
  // Listar todos los koders
  console.log('SU codigo para ver todos los koders')
  
  
  // crear conexion
  const xhttp = new XMLHttpRequest()
  xhttp.open( 'GET', `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`, true)
  xhttp.onload = function(data) {
      if(data.target.status >= 200 && data.target.status <= 399){
        let koders = JSON.parse(data.target.response)
        let template = ''
        for(key in koders) {
          console.log( koders[key] ) 
          let { bootcamp, name, age, biography } = koders[key]
  
          // console.log(name, age, biography, bootcamp)
          template += `
            <div class="col-12 col-sm-6">
                <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${name} ${age} años</h5>
                      <p class="card-text">${biography.slice(0, 20)}...</p>
                      <p class="card-text">${bootcamp}</p>
                      <a href="/viewkoder.html?koderkey=${key}" class="btn btn-link">ver koder</a>
                      <a href="/updatekoder.html?koderkey=${key}" class="btn btn-link">actualiza koder</a>
                  </div>
                </div>
            </div>
          `
        }
  
        document.querySelector('.all__posts').innerHTML = template
      }
  }
  xhttp.send()
  
  
  
  
  
  
  
  
  
  let obj = {
    prop1:'val1',
    prop2:'val1'
  }
  
  
  obj.prop1 = 'fake'
  