// Funciones que retornan a otras funciones

function prueba(){
    return function(){
        return "Hola mundo"
    }
}

console.log(prueba()())

function saludar(saludo){
    return function(nombre){
        return saludo + " " + nombre
    }
}

let saludarFinal = saludar("Hola")
console.log(saludarFinal("Marcos"))