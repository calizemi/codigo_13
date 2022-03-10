// * Un bucle es una tarea repetitiva
// for(let i=0;i<20;i++){
//     console.log("Iterador",i);
// }
// const alumnos =["Pepe","Juana","Stephanie","Carlos","Luis"];
// for(i=0;i<alumnos.length;i++){
//     console.log(alumnos[i]);
// }

// array de objetoa de alumnos

// const  alumnos=[
//     {nombre: "Pepe",
//     edad:21,
//     },
//     {nombre: "Juan",
//     edad:30,
//     },
//     {nombre: "Lucho",
//     edad:22,
//     },

// ]
// for(let i =0;i<alumnos.length;i++){
//     alumnos[i]["edad"]<30? console.log(alumnos[i]["nombre"]):"";
// }
// const contarVocales = (frase)=>{
//     const fraseMayuscula=frase.toUpperCase();
//     let contador=0;
// for(let i=0;i<fraseMayuscula.length;i++){
//     const letra=fraseMayuscula[i];
    
//     if (letra==="A"){contador++;contadorA++;}
//     else if (letra==="E"){contador++;contadorA++;}
//     else if (letra==="I"){contador++;contadorA++;} 
//     else if (letra==="O"){contador++;contadorA++;} 
//     else if (letra==="U"){contador++;contadorA++;}
//     else {contador++;contadorA++;}
// }
// return `La frase tiene ${contador} vocales`;
// };
const hallarDivisoresComunes=(num1,num2)=>{
    let numMayor=num1;
    let numMenor=num2;
    let divisoresComunes=[];
    if(num2>num1){numMayor=num2;numMenor=num1;};
    const divisoresNumMenor=hallarDivisores(numMenor)
    for(let k=0;k<=divisoresNumMenor.length;k++){
        if(numMayor%divisoresNumMenor[k]===0){
            divisoresComunes.push(divisoresNumMenor[k]);
        }
    }
        return divisoresComunes
    
}

const hallarDivisores=numero=>{
    let divisores =[];
    for(let j=1;j<=numero;j++){
      if(numero%j===0){
          divisores.push(j);
      }
    }
    return divisores
}

console.log(hallarDivisoresComunes(30,75))