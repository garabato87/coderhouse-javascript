let nombre, altura, peso, genero, mensaje

function datosUsuario  ()  {
    nombre = prompt("Por favor ingrese su nombre y apellido")

    do {
        altura = (parseFloat(prompt(nombre + " ingrese su altura en metros")))
    }while (isNaN(altura))

    do{
        peso = (parseFloat(prompt(nombre + " ingrese su peso en kg")))
    }while(isNaN(peso))

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
        descripcion: 'Plan diseñado para mejorar la resistencia cardiovascular y muscular con ejercicios prolongados y de menor intensidad.',
        ejercicios : [
            "\n Caminata rápida o trote suave: 5-10 minutos.",
            "\n Movilidad articular: rango de movimiento para hombros, caderas y rodillas.",
            "\n Ejercicios Principales (3-4 series de 12-15 repeticiones)",
            "\n Sentadilla con barra (Back Squat): 4 series de 12-15 repeticiones",
            "\n Press de banca (Bench Press): 4 series de 12-15 repeticiones",
            "\n Peso muerto (Deadlift): 4 series de 12-15 repeticiones",
            "\n Dominadas asistidas (Pull-Ups con bandas o máquina): 4 series de 10-12 repeticiones",
            "\n Press militar con barra (Overhead Press): 3 series de 12-15 repeticiones",
            "\n Ejercicios Complementarios (3 series de 15-20 repeticiones)",
            "\n Remo con barra (Barbell Row): 3 series de 15-20 repeticiones",
            "\n Elevaciones de talones (Calf Raises): 3 series de 15-20 repeticiones ",
            "\n Fondos en paralelas (Dips): 3 series de 12-15 repeticiones",
        ]
    },
    {
        nombre: 'Hipertrofia',
        descripcion: 'Plan orientado a incrementar el tamaño muscular mediante ejercicios con repeticiones moderadas y pesos controlados.',
        ejercicios:[
            "\n Calentamiento: 10-15 minutos",
            "\n Caminata rápida o trote suave: 5-10 minutos.",
            "\n Movilidad articular: rango de movimiento para hombros, caderas y rodillas.",
            "\n Ejercicios Principales (4 series de 8-12 repeticiones)",
            "\n Sentadilla con barra (Back Squat): 4 series de 8-12 repeticiones",
            "\n Press de banca con barra (Bench Press): 4 series de 8-12 repeticiones",
            "\n Peso muerto (Deadlift): 4 series de 8-10 repeticiones",
            "\n Dominadas (Pull-Ups con peso adicional o libres): 4 series de 8-10 repeticiones",
            "\n Press militar con barra (Overhead Press): 3 series de 8-12 repeticiones",
            "\n Ejercicios Complementarios (3 series de 10-15 repeticiones)",
            "\n Remo con barra (Barbell Row): 3 series de 10-12 repeticiones",
            "\n Elevaciones laterales con mancuernas (Lateral Raises): 3 series de 12-15 repeticiones",
            "\n Fondos en paralelas (Dips): 3 series de 10-12 repeticiones",
            "\n Curl de bíceps con barra: 3 series de 12-15 repeticiones",
            "\n Extensión de tríceps en polea: 3 series de 12-15 repeticiones"
        ]
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
    let imc = datosUsuario().toFixed(2)
    //.toFixed(2) sirve para mostrar solo dos decimales
    alert("Su imc actual es: " + imc)
    // Llamar a la función para que el usuario elija un plan
    seleccionarPlan()
    confirmacion = confirm("¿Desea reiniciar el programa?")
}while(confirmacion)








    
