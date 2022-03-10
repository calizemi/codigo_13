const edades=[10,11,18,32,50,34]
const mayore30=edades.find((edad)=>edad>30);
console.log(mayore30)



const alumnos = [
    ["pepe","juan","Luis","Paco"],
    ["Leonardo","Armando"],
];
// console.log(alumnos)

// edades.foreach((alumnito)=>{

//   console.log("no existe");
// });
let cantidadAlumnos=0
alumnos.forEach((alumnito)=>{
   const alumnoEncontrado=alumnito.find((subalumno)=>subalumno==="Pepe");
  alumnoEncontrado===!undefined?cantidadAlumnos=1:console.log("alumno encontrado");
  });
  cantidadAlumnos===alumnos.length?console.log("alumno no encontrado"):"";

// // filtro===undefined ? console.log("no existe"):console.log("existe");

// alumnos.foreach((alumnito)=>{

//   console.log("no existe");
// });

// const productos = [
//   {
//     name: "Laptop",
//     price: 1500,
//   },
//   {
//     name: "Celular",
//     price: 2300,
//   },
//   {
//     name: "Monitor",
//     price: 1000,
//   },
// ];


// productos.forEach((producto) => console.log(producto.name));
// alumnos.forEach((alu) => console.log(alu));


const laptops = [
    {
      marca: "Lenovo",
      imagen: "https://logo.com",
      nombre: "Ide Centre AIO I3",
      vendedor: "Falabella",
      precioOferta: 1599,
      precioNormal: 3599,
      calificacion: 2,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "integrada",
        discoDuro: "1TB",
        discoDuroSolido: "no aplica",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i5",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer 2",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i7",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
  ];

//   const filtroLaptop=laptops.find((carcteristicas)=>caracteristicas===caracteristicas.find((items)=>items.procesador==="i3"));
