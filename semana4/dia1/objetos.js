// // ? Un objeto es una entidad inndependiente ahora, este tienepropiedades y atributos
// // *Atributos de un carro
// // ! numero de puertas
// // ! color
// // ! placa
// // ! motor
// // ! cilindro
// // ! HP

// // ? Un objete esta compuesto `por un key(llave) y un vlue(valor)
// // ? creamos el objeto carro

// const carro={
//     color: "azul",
//     motor: 1.2,
//     modelo: "GTR",
//     marca: "Nissan",
//     nuevo: true,

// };

// // ?Objeto Persona
// const Persona={
//     nombre:"Pepito",
//     edad: 18,
//     sexo:"Masculino",
//     talla:1.75,
//     estadoCivil:"soltero",
//     mayorDeEdad: true,
//     donanteDeOrganos: true,
//     dni:"45678934",
//     tatuajes: false,
//     nacionalidad: "Peruano",
// }

// // ? como creen que puedo acceder al atributo nombre
// console.log("nombre: ",Persona.nombre);
// console.log("DNI: ",Persona.dni)

// // ?Esto es una forma de agregar un objeto
// Persona.celular ="98989888";
// console.log(Persona)

// // !2da Forma de agregar un elemento
// // ? quiero agregar la profesion de una persona
// Persona["profesion"]="Ingeniero";
// console.log("PERSONA CON PROFESION", Persona);

// // ?? Creando objetos de forma antigua
// // ?Instanciando a la clase object
// // ? La clase Object en JS es una clase la cual permite decir que esta variable sera un objeto

// const casa = new Object ();
// casa["color"]="rosa",
// casa.pintura="Negro"
// console.log("Casa: ",casa)

// // ! 3ra forma de crear un objeto

// const laptop=new Object();
//     modelo="DELL INSPIRON",
//     peso=2.5,
//     color="color",
//     ram="16gb",
//     memoria=512;

// laptop[color]="azul";
// console.log("laptop",laptop)

// const celular={
//     model = "Xiaomi POCO X3",
//     memoria="128MB", 
//     precio="$ 700"
// }

// const mostrarDetalleCelular=(celularObjeto)=>{
//     return `El modelo es ${celularObjeto.modelo}tiene ${celularObjeto.memoria} de almacenamiento y cuesta ${celularObjeto.precio}`
// }
// console.log("Objeto celular", mostrarDetalleCelular(celular))

// const mostrarDetalleCelular2=(celularObjeto)=>{
//     const{modelo,memoria,precio} = celularObjeto
//     return `El modelo es ${modelo}tiene ${memoria} de almacenamiento y cuesta ${precio}`
// }
// Creemos el objeto usuario

const usuario={
    nickname:"loquilloProgramador",
    email: "lp@gmail.com",
    password: "********",
    carnetVacunacion: true,
    location:"Peru",
    level:"pro",
    edad: 18,

}

const EsPeruano = (usuarioObject)=>{
    const{location,nickname,level}=usuarioObject;
    return location==="Peru"? `${nickname} tu nivel es ${level}`:`Oye${nickname} no eres peruano`;
}

console.log(EsPeruano(usuario))
usuario.location= "Chile";
console.log(EsPeruano(usuario))

