function validarSiEsNumero(numero, tipo) {
    return isNaN(numero) ? `Mensaje Error: no se puede ${tipo}` : numero;
  }
  
  function sumar2(numero1, numero2) {
    const suma = +numero1 + +numero2;
  
    return validarSiEsNumero(suma, "sumar");
  }
  
  function restar(numero1, numero2) {
    const calcResta = +numero1 - +numero2;
  
    return validarSiEsNumero(calcResta, "restar");
  }
  
  function multiplicar(numero1, numero2) {
    const calcMultiplicacion = +numero1 * +numero2;
  
    return validarSiEsNumero(calcMultiplicacion, "multiplicar");
  }
  
  function dividir(numero1, numero2) {
    if (+numero2 === 0) {
      // termina la ejeccion de la funcion y retorn ese string
      return "Error: no se puede dividir por 0";
    }
  
    const calcDivision = +numero1 / +numero2;
    return validarSiEsNumero(calcDivision, "dividir");
  }

  function CalculadoraHTML(operacion){
     
    const numero1=document.querySelector("#numero1").value;
    const numero2=document.querySelector("#numero2").value;
    const contenedor=document.querySelector("#resultado");
    if (operacion==="+"){
        sumar2()
    }
  }
