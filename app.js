// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let amigos = [];
    let asignados = {};
// Valida que ingrese un nombre y que ese nombre ya no este en la lista
    function agregarAmigo() {
        let nombre = document.getElementById('amigo').value.trim();
        let mensaje = document.getElementById('mensaje');

        if (!nombre) {
            asignarTextoElemento('p', 'Debe ingresar un nombre');
            return;
        }
        if (amigos.includes(nombre)) {
            asignarTextoElemento('p', 'Nombre ya existe');
            return;
        }
// Agrega nombre a la lista
        amigos.push(nombre);
        mensaje.textContent = "";
        document.getElementById('amigo').value = "";
        mostrarLista();
    }
// muestra los nombres ingresados
    function mostrarLista() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        amigos.forEach(nombre => {
            let li = document.createElement('li');
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }
// Revisa y selecciona un nombre
    function sortearAmigo() {
        let mensaje = document.getElementById('mensaje');
        let nombre = document.getElementById('amigo').value.trim();
        let posibles = amigos.filter(a => a !== nombre && !Object.values(asignados).includes(a));
        
        // Valida que el arreglo no este vacio
        if (posibles.length === 0) {
            mensaje.textContent = "No hay amigos disponibles para sortear.";
            return;
        }

        let amigoSecreto = posibles[Math.floor(Math.random() * posibles.length)];
        asignados[nombre] = amigoSecreto;
        asignarTextoElemento('p', '');
        let resultados = document.getElementById('resultado');
        let lista2 = document.getElementById('listaAmigos');
        lista2.innerHTML = "";
        resultados.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}!`;
        document.getElementById('amigo').value = "";
    }
// muestra mensaje de validacion
function asignarTextoElemento(elemento, texto) {
    let elemntoHtml = document.querySelector(elemento);
    elemntoHtml.innerHTML = texto;
    return;
}

