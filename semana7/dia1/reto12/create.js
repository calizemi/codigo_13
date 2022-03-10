const btnCrear=document.querySelector("#btn-crear");
const inputs=document.querySelectorAll("input");
const selectGender=document.querySelector("#select-gender");
const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";

let valueGender="";

selectGender.onchange = function (event) {
    valueGender = event.target.value;
  };

btnCrear.onclick=async function(event){
    event.preventDefault();
    selectGender.style.border = "1px solid #ccc";
    const values={};

    let validacioninputs=true;

    inputs.forEach((input)=>{
      input.style.border = "1px solid #ccc";

     if (input.value === "") {
      validacioninputs = false;
      input.style.border = "1px solid #f01";
    }
        values[input.name]=input.value;

        

    });

    if (valueGender === "") {
      selectGender.style.border = "1px solid #f01";
      validacionInputs = false;
    }
  
    if (!validacioninputs) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe completar los campos",
      });
      return;
    }
  
    console.log("validacion", validacioninputs);
    const movie={
        name:values.movie_name,
        director:values.movie_director,
        wallpapper:values.movie_photo,
        gender:valueGender,
        video_link: values.movie_video,
    }

     // Ahora vamos a ejecutar una peticion con el motodo POST porque vamos a crear algo
  // Sabemos que por default el fetch es de metodo GET
  // ahora para cambiarlos a un POST necesitamos pasarle un objeto indicando su METODO
  // al decirle que method ahora es POST automaticamente podremos pasarle un body
  // body: Es el objeto que vamos a enviar al servidor para que pueda ser creado
  // body solo recibe strings
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    await response.json();

    // Falta limpiar los input

    const limpiarInputs=()
    
    document.querySelector("form").reset();

    Swal.fire({
      icon: "success",
      title: "",
      text: "Se crear la pelicula",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

