const mascotas=[
    {nombre:"Pulga",edad:12,},
    {nombre:"Pug",edad:13,},
    {nombre:"Boby",edad:5,},
    {nombre:"michi",edad:1,},
    {nombre:"cori",edad:8,},
    {nombre:"kalesi",edad:7,}

]
const mascotasEdadPar= mascotas.filter((mascota)=>mascota.edad%2===0);
 console.log("MacotasEdadPar",mascotasEdadPar)
 console.log(mascotas)
 const arregloCursos = [
    {
      nombre: "React JS",
      tec: "JS",
    },
    {
      nombre: "django",
      tec: "Python",
    },
    {
      nombre: "Angular",
      tec: "JS",
    },
    {
      nombre: "Flask",
      tec: "Python",
    },
    {
      nombre: "Laravel",
      tec: "PHP",
    },
  ];
  const cursosJS =arregloCursos.filter((curso)=>curso.tec==="JS");
  const cursosPython =arregloCursos.filter((curso)=>curso.tec==="Python");
  const cursosPHP =arregloCursos.filter((curso)=>curso.tec==="PHP");
   console.log(cursosJS);
   console.log(cursosPython);
   console.log(cursosPHP);
   