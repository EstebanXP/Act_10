const lista1 = document.getElementById('lista');
var personasChidas= ['Esteban Xelhuantzi','Cuco','cuc90'];

const addPersona=()=>{
    var nombre=document.getElementById('texto');
    lista1.innerHTML= '';
    personasChidas.push(nombre.value);
    
    mostrarPersonas();
    nombre.value= "";
}


const mostrarPersonas= () =>{
    personasChidas.map(n =>{
        var li=document.createElement('li');
        li.innerHTML = n;
        lista1.appendChild(li);
    })
}

const deletePersona=()=>{
    lista1.innerHTML= '';
    personasChidas= [];
}
