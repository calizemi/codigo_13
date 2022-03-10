const promesa=new Promise((resole,reject)=>{
    // vamos a simular un tiempo de espera
    setTimeout(()=>{
        resole("Todo esta bien");
    },3000);
});

async function getDataFromPromesa(){
    const respuesta= await promesa;
    console.log(respuesta);

}

getDataFromPromesa();

promesa.then((respuesta)=>{
    console.log("then", respuesta);
})

