// ** Una funcion es un conjunto de soluciones para poder
// ** realizar tareas

function nombreDeLaFuncion(){

// Una vez declarada mi funcion todo el codigo que haga
//  dentro de esta solo se va a ejecutar cuando llame a la funcion

//! Esto no se va a ejecutar
     console.log("Mi primera funcion");
}

//* para poder llamar a una funcion solo necesito escribir su nombre junto a los parentesis
//** Una vez que llame a la funcion esta va a ejecutar el codigo que tiene dentro

nombreDeLaFuncion();

//? Una funcion es creas para poder reutilizar codigo
//? Una de las misiones de una funcion es que hacer un trabajo repetitivo
//?al estar este trabajo en una funcion solo necesito escribir el codigo una vez
//? y luego llamar a la funcion para que la necesite

// TODO: Una funcion puede ecibir parametros ( son variables que se le psan a la funcion)
// TODO: y estos parametros van dentro de los parentesis de la funcion

function sumar(numero1,numero2){
    // * numero 1, numero2 son paametros de la funcion sumar.
    // * con los parametros yo puedo hacer lo que quiera
    const suma=numero1+numero2;
    console.log("Suma: ", suma)

}

function sumar2(num1,num2){
    const suma2=+num1+ +num2;
    if(isNaN(suma2)){
        console.error("Error: numeros invalidos")
        // Return es una palabra en la funcion la cual se encarga de retornar un valor
        // Tambien se usa para finalizar la funcion
        return
    }
    console.log("La suma es: ", suma2)
}

// ! Cuando yo llame a sumar debo pasarle numero 1 y numero 2
// ! el orden en el, que pase los parametro s sera el orden en que los reciba

sumar(50,20);
sumar(10,50);
sumar(100,200);
sumar(31.5,40.4);
sumar2(50,20);
sumar2(10,50);
sumar2(100,200);
sumar2(31.5,40.4);

