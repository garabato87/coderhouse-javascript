let nombre, altura, peso, genero, mensaje

function datosUsuario  ()  {
    nombre = prompt("Por favor ingrese su nombre y apellido")
    altura = (parseFloat(prompt(nombre + " ingrese su altura en metros")))
    peso = (parseFloat(prompt(nombre + " ingrese su peso en kg")))
    do {
        genero = prompt("Ingrese una 'M' para masculino, 'F' para femenino").toLowerCase();
    } while (genero !== 'm' && genero !== 'f');
    switch (genero){
        case "m" :
            mensaje = "Bienvenido " + nombre + "!"
            break;
        case "f" :
            mensaje = "Bienvenida " + nombre + "!"
            break;
        default :
            alert("No ha introducido un genero valido, en la proxima ocasion vuelva a intentarlo.")
            return
    }
    alert(mensaje)
    return peso / (altura*altura)
}

const planesDeEntrenamiento = [
    {
        nombre: 'Fuerza',
        descripcion: 'Plan enfocado en aumentar la fuerza muscular a través de ejercicios de alta intensidad con pesos pesados\n' ,
        ejercicios: [
            "\n 1. Calentamiento 10-15 minutos",
            "\n Caminata rápida o trote suave: 5 minutos",
            "\n Movilidad articular: Rango de movimiento para hombros, caderas y rodillas.",
            "\n 2. Ejercicios Principales (4-5 series de 4-6 repeticiones)",
            "\n Sentadilla con barra (Back Squat): 4 series de 4-6 repeticiones",
            "\n Press de Banca (Bench Press): 4 series de 4-6 repeticiones",
            "\n Peso Muerto (Deadlift): 4 series de 4-6 repeticiones",
            "\n Dominadas (Pull-Ups): 4 series de 4-6 repeticiones (o hasta el fallo si no puedes completar 6 repeticiones)",
            "\n Press Militar con Barra (Overhead Press): 3 series de 4-6 repeticiones",
            "\n 3. Ejercicios Complementarios (3 series de 8-10 repeticiones)",
            "\n Remo con Barra (Barbell Row): 3 series de 8-10 repeticiones",
            "\n Elevaciones de Talones (Calf Raises): 3 series de 10-12 repeticiones",
            "\n Fondos en Paralelas (Dips): 3 series de 8-10 repeticiones (puedes usar peso adicional si es necesario)",  
        ]
    },
    {
        nombre: 'Resistencia',
        descripcion: 'Plan diseñado para mejorar la resistencia cardiovascular y muscular con ejercicios prolongados y de menor intensidad.'
    },
    {
        nombre: 'Hipertrofia',
        descripcion: 'Plan orientado a incrementar el tamaño muscular mediante ejercicios con repeticiones moderadas y pesos controlados.'
    }
];

const seleccionarPlan = () => {
    // Construir el mensaje para el prompt
    let mensaje = "Seleccione un plan de entrenamiento:\n";
    for (let i=0; i<planesDeEntrenamiento.length; i++){
        mensaje += `${i + 1}. ${planesDeEntrenamiento[i].nombre}\n`
        //mensaje += (index + 1) + ". " + planDeEntrenamiento[i].nombre + "\n"; === otra forma de escribirlo
    }
    /*planesDeEntrenamiento.forEach((plan, index) => {
        mensaje += `${index + 1}. ${plan.nombre}\n`;
    });*/

    // Solicitar al usuario la selección del plan
    
let eleccion
    // Validar la elección y mostrar la información
    do{
        // Solicitar al usuario la selección del plan
        eleccion = parseInt(prompt(mensaje));
        if (!isNaN(eleccion) && eleccion > 0 && eleccion <= planesDeEntrenamiento.length) {
            // Ajustar el índice para acceder al array
            const planSeleccionado = planesDeEntrenamiento[eleccion - 1];
            alert(`Has seleccionado el plan de ${planSeleccionado.nombre}. \nDescripción: ${planSeleccionado.descripcion}. \nEjercicios: ${planSeleccionado.ejercicios}`);
        } else {
            alert("Selección no válida. Por favor, elija un número válido.");
        }
    }while (isNaN(eleccion) || eleccion <=0 || eleccion > planesDeEntrenamiento.length ) 
};

let confirmacion
do{
    datosUsuario()
    let imc = datosUsuario().toFixed(2) //.toFixed(2) sirve para mostrar solo dos decimales
    alert("Su imc actual es: " + imc)
    // Llamar a la función para que el usuario elija un plan
    seleccionarPlan()
    confirmacion = confirm("¿Desea reiniciar el programa?")
}while(confirmacion)







    
