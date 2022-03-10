// cuantos datos contiene una variable?
// una varuable contiene 1 dato a la vez

// ** Un arreglo es un conjunto de datos
// ** la forma en que declaramos un arreglo es parecida la de una variable
// ** sin embargo debemos colocar [] despues del igual, ejemplo

// !! esto es un arreglo vacio, para poder llenanorlo yo debe colocar los datos separado por comas

//!! :eye: siempre empezar a contar los indices desde el 0
let alumnos = ["Erick", "Karina", "Patricia", "kjaris", "Bruno"];
console.log("alumnos", alumnos);

//** Pueda contener datos de distintos tipos */
const variosTipo = [100, "Juana", true, 100.5];

const productos = ["Table", "Laptop", "Smartphone", "TV", "Radio"];

// ** como acceder a un dato en especifico
console.log(alumnos[2]);
console.log(alumnos[4]);

// ** Se podra alterar un dato del array?
// ! voy a reasignar el valor del indice 0
alumnos[0] = "Pepe";
console.log("alumno reasignado", alumnos);

// ! asi como se puede reasignar un dato en especifico, tambien podemos crear datos
// ** alumnos[4] es el ultimo dato del array

alumnos[5] = "Erick";
console.log("Creando un nuevo elemento", alumnos);
// 

alumnos[6] = "Joel";
console.log("Creando un nuevo elemento", alumnos);

// ** como puede saber cuantos elementos contiene un array?
// ** los array tienen una funcion llamada length la cual nos permite saber cuantos elementos tiene el array
console.log("Cantidad de elementos", alumnos.length);

//! quiero agregar un elemento en la ultima posicion del array

// esto en que posicion añade a juan?
alumnos[alumnos.length] = "Juan";
console.log("Creando un nuevo elemento", alumnos);

//** Y si quiero obtener el ultimo elemento de mi array? */
// .length retorna un number 
console.log("ultimo elemento", alumnos[alumnos.length - 1]);
// TODO: Function de expresion
// !Es tener una funcion dentro de una variable
// !Es conocido function anonima
const resta = function (numero1, numero2) {
    const calcResta = +numero1 - +numero2;
  
    return isNaN(calcResta) ? "Error: no se puede restar" : calcResta;
  };
  
  console.log("Resta:", resta(10, 20));
  
  // Ejemplo2
  const multiplicacion = function (numero1, numero2) {
    const calcMultiplicacion = +numero1 * +numero2;
  
    return isNaN(calcMultiplicacion)
      ? "Error: no se puede multiplicar"
      : calcMultiplicacion;
  };
  
  //* arrow function => funciones flecha
  //* Es una function parecida a la funciona anonima o de expresion, sim embargo no
  //* hace falta usar la palabra function para declarar esta.
  //* Otro punto importante es que una funcion flecha no puede usar `this`
  //* Esto es la diferencia entre una funcion y un arrow function
  //? como declaramos un arrow function?
  const division = (numero1, numero2) => {
    if (+numero2 === 0) {
      // termina la ejeccion de la funcion y retorn ese string
      return "Error: no se puede dividir por 0";
    }
  
    const calcDivision = +numero1 / +numero2;
    return isNaN(calcDivision) ? "Error: no se puede dividir" : calcDivision;
  };
  
  console.log(division(10, "0"));
  console.log("Division:", division(10, 2));
  
  //? Cas1 cuando nuestro arrow function solo recibe un parametro no hace falta poner parentesis
  const saludar = (nombre, apellido) => {
    // como imprimir de una forma mas elegante
    // return "Hola mi nombre es " + nombre + " y mi apellido es " + apellido;
    return `Hola mi nombre es ${nombre} y mi apellid es ${apellido}`;
  };
  
  console.log(saludar("Juan", "Perez"));
  
  //? Ahora cuando un arrow no recibe parametros no hace falta poner parentesis
  const funcionSinParametros = _ => {
    return "Hola Mundo";
  };
  
  //? VAMOS a ver un arrow function inline
  //? Este tipo de funcion solo funcion cuando quiero ejecutar una linea de codigo
  //? Cuando usamos este tipo de funcion el return esta implicito
  const hello = () => "Hola Mundo in one line";
