const eventos = [
    {
        imagen: "imagen/DSC_9960.jpg",
        lugar: "Restaurante Bote Salvavidas",
        nombre: "MEET and DRINK Versión VALPARAISO",
        fecha: "22 Nov 2024",
        hora: "18:00 hrs"
    },
    {
        imagen: "imagen/DSC_9960.jpg",
        lugar: "Muelle Barón",
        nombre: "Circo Tony Caluga",
        detalles: "Funciones Disponibles"
    },
    {
        imagen: "imagen/DSC_9960.jpg",
        lugar: "Esquina Retornable",
        nombre: "GET OUT",
        fecha: "22 Nov 2024",
        hora: "18:00 hrs"
    }
];

// Función para renderizar eventos
const renderizarEventos = () => {
    const section = document.querySelector(".section");
    section.innerHTML = ""; // Limpiamos el contenido de la sección

    eventos.forEach(evento => {
        const eventoHTML = `
            <div class="evento">
                <img src="${evento.imagen}" alt="${evento.nombre}" class="evento-img">
                <div class="evento-info">
                    <h4>${evento.lugar}</h4>
                    <h3>${evento.nombre}</h3>
                    ${evento.detalles ? `<p>${evento.detalles}</p>` : ""}
                    ${evento.fecha && evento.hora ? `<p>${evento.fecha} | ${evento.hora}</p>` : ""}
                </div>
            </div>
        `;
        section.innerHTML += eventoHTML;
    });
};

// Ejecutar la función una vez que el DOM esté cargado
document.addEventListener("DOMContentLoaded", renderizarEventos);
