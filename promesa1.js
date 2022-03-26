
//La función anónima de tona un procesao
//Declarando a la funcion principal 
function  principal(usuario, password){

    //UN OBJETO DE TIPO PROMISE 
    let promesa = new Promise(function(resolve, reject){

    //Proceso f(x) principal
    setTimeout(function(){

        if(usuario=="james123" && password=="admin123"){
            resolve("Bienvenido")
        }
        else{
            reject("Revisar por favor")
        }
    }, 5000)

    })

    return(promesa)

}


//Llamar a la función 
principal('juanes128', 'login123')
.then(function(respuestaResolve){
    console.log(respuestaResolve)
})
.catch(function(respuestaReject){
    console.log(respuestaReject)
})