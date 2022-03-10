// const numero1 = 10
// const numero2 = 20

// let resultado = 0
// let resta=0
// let producto=0

// resultado = numero1 + numero2
// resta= numero1-numero2
// producto= numero1*numero2
//  console.log("Resultado: " + numero1 + "+" +numero2+"="+resultado)
//  console.log("Sumatoria", resultado)
//  console.log("Resta", resultado)
//  console.log("Producto", resultado)
//  console.error("Resta", resultado)
//  console.error("Producto", resultado)
//  console.error("Sumatoria", resultado)
//  console.warn("Sumatoria", resultado)
//  console.warn("Resta", resultado)
//  console.warn("Producto", resultado)

//  const valor1 = prompt("Ingrese un valor1")
//  const valor2 = prompt("Ingrese un valor2")
//  const operacion = prompt("Ingrese una operacion  ser +-*/")
//  let resultadoCalculadora = 0
 
//  if(operacion=== "+"){
//      resultadoCalculadora = +valor1 + +valor2;
//      console.log("Resultado: ", resultadoCalculadora)
//  }else if(operacion=== "-"){
//       resultadoCalculadora = +valor1 -  +valor2;
//       console.log("Resultado: ", resultadoCalculadora)
// }else if(operacion=== "*"){
//     resultadoCalculadora = +valor1 *  +valor2;
//     console.log("Resultado: ", resultadoCalculadora)
// }else if(operacion=== "/"){
//     if(+valor===!0){
//     resultadoCalculadora = +valor1 /  +valor2;
//     console.log("Resultado: ", resultadoCalculadora)
//     } else {
//         console.warm("El divisor debe ser diferente de 0")
//     }
    
// } else{
//     console.error("Opcion no valida")
const valor1 = +prompt("Ingrese un numero1")
const valor2 = +prompt("Ingrese un numero2")
const valor3 = +prompt("Ingrese un numero3")

let res="El mayor es: " + valor3

if(valor1>=valor2&&valor1>=valor3){
    res ="El mayor es: " + valor1
}else if(valor2>=valor1&&valor2>=valor3){
        res="El mayor es: " + valor2
}
    console.log(res)


