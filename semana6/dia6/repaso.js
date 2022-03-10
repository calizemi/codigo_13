const productos=["Celular","TV","Mouse","Monitor","Teclado"];

productos.map(async (producto)=>{
    console.log(producto)
});

productos.forEach(async (producto)=>{
    console.log(producto)
});

const buscador=productos.find(async(producto)=>(await producto)==>(await producto)==="TV");

const buscarIndice =productos.findIndex(async(producto)=>(await producto));

