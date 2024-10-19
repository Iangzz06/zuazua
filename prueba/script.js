/* document.getElementById('servicioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const selectedService = document.getElementById('servicioSelect').value;
    const servicioInfo = document.getElementById('servicioInfo');

    let info = '';

    switch (selectedService) {
        case 'licencias':
            info = `<h3>Licencias y Permisos</h3>
                    <p>Aquí encontrarás información sobre los tipos de licencias y permisos que puedes obtener, como licencia de construcción, permiso de uso de suelo y licencia de funcionamiento.</p>`;
            break;
        case 'tramites':
            info = `<h3>Trámites de Nacimiento</h3>
                    <p>Información sobre los trámites de nacimiento que puedes realizar. Para más detalles, visita la oficina municipal.</p>`;
            break;
        case 'consulta':
            info = `<h3>Consulta de Servicios</h3>
                    <p>Aquí podrás consultar todos los servicios disponibles en el municipio, así como sus requisitos.</p>`;
            break;
        case 'eventos':
            info = `<h3>Eventos Culturales</h3>
                    <p>Información sobre los próximos eventos culturales en Zuazua. ¡No te los pierdas!</p>`;
            break;
        default:
            info = '<p>Selecciona un servicio para ver la información.</p>';
    }

    servicioInfo.innerHTML = info; // Muestra la información seleccionada
}); */
document.getElementById('servicioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const selectedService = document.getElementById('servicioSelect').value;
    const servicioInfo = document.getElementById('servicioInfo');

    let info = '';

    switch (selectedService) {
        case 'licencias':
            info = `<h3>Licencias y Permisos</h3>
                    <p>Aquí encontrarás información sobre los tipos de licencias y permisos que puedes obtener.</p>`;
            break;
        case 'tramites':
            info = `<h3>Trámites de Nacimiento</h3>
                    <p>Información sobre los trámites de nacimiento que puedes realizar.</p>`;
            break;
        case 'consulta':
            info = `<h3>Consulta de Servicios</h3>
                    <p>Aquí podrás consultar todos los servicios disponibles.</p>`;
            break;
        case 'eventos':
            info = `<h3>Eventos Culturales</h3>
                    <p>Información sobre los próximos eventos culturales en Zuazua.</p>`;
            break;
        default:
            info = '<p>Selecciona un servicio para ver la información.</p>';
    }

    servicioInfo.innerHTML = info; // Muestra la información seleccionada
    servicioInfo.style.display = 'block'; // Muestra el div de información
});

