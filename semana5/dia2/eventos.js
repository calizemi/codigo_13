function imprimir(){
    console.log("Hola Mundo");
}

function sumar(){
    const numero1=document.querySelector("#numero1").value;
    const numero2=document.querySelector("#numero2").value;
    const contenedor=document.querySelector("#resultado");
    
    const suma=+numero1 + +numero2;
    const p=document.createElement("p");
    const pValor=document.createTextNode(suma);
    p.appendChild(pValor);
    contenedor.appendChild(p);


}

