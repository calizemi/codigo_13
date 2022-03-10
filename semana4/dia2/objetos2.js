

const computadora={
    color:"azul",
    marca: "HP",
    nuevo: true,

}

console.log("color",this.color)

// ? Objetos con array
const alumno={
    nombre: "Carlitos",
    notas:[10,5,8,9],
    cursos:["HTML","CSS","JS","React"]
};

console.log("Notas", alumno.notas)

const alumnos=[
    {
        nombre:"Luciano",
        edad:18,
        promedio:15,
    },
    {
        nombre:"El Pepe",
        edad:21,
        promedio:14,
    }
]

const laptops=[
    {
    imagen:"https://static.bhphoto.com/images/multiple_images/images500x500/1634584429_IMG_1625012.jpg",
    nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
    shippingRestricion: "No shipping to PERU",
    Price: "$2699",
    inStock: true,
    availableOtherStyles: true,
    stars: 5,
    views:49,
    caracteristicas:
      {
        modelo: "Apple M1 Pro 10-Core Chip",
        capacidad:{
        memoriaRam: "16GB Unified RAM ",
        discoDuro: " 1TB SSD",
        },
        pantalla:{
        tamaño: "16.2 3456 x 2234 ",
        modelo:"Liquid Retina XDR Screen",
        GPU: "16-Core GPU | 16-Core Neural Engine",
        },
      },
    },
    {
        imagen:"https://static.bhphoto.com/images/multiple_images/images500x500/1634584429_IMG_1625012.jpg",
        nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Silver)",
        shippingRestricion: "No shipping to PERU",
        Price: "$2699",
        inStock: true,
        availableOtherStyles: true,
        stars: 5,
        views:49,
        caracteristicas:
          {
            modelo: "Apple M1 Pro 10-Core Chip",
            capacidad:{
            memoriaRam: "16GB Unified RAM ",
            discoDuro: " 512GB SSD",
            },
            pantalla:{
            tamaño: "16.2 3456 x 2234 ",
            modelo:"Liquid Retina XDR Screen",
            GPU: "16-Core GPU | 16-Core Neural Engine",
            },
          },
        },
        {
            imagen:"https://static.bhphoto.com/images/multiple_images/images500x500/1634584429_IMG_1625012.jpg",
            nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
            shippingRestricion: "No shipping to PERU",
            Price: "$2699",
            inStock: true,
            availableOtherStyles: true,
            stars: 5,
            views:49,
            caracteristicas:
              {
                modelo: "Apple M1 Pro 10-Core Chip",
                capacidad:{
                memoriaRam: "16GB Unified RAM ",
                discoDuro: " 1TB SSD",
                },
                pantalla:{
                tamaño: "16.2 3456 x 2234 ",
                modelo:"Liquid Retina XDR Screen",
                GPU: "16-Core GPU | 16-Core Neural Engine",
                },
              },
            },

]