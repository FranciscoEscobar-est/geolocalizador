var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function obtenerUbicacion() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const acc = position.coords.accuracy;

                //datos para el footer
                document.getElementById('lat').textContent = lat.toFixed(6);
                document.getElementById('lng').textContent = lng.toFixed(6);
                document.getElementById('acc').textContent = acc;

                // ubicacion y marcador
                map.setView([lat, lng], 13);
                L.marker([lat, lng]).addTo(map)
                  .bindPopup("¡Aquí estás!")
                  .openPopup();
            },
            function(error) {
                alert("No se pudo obtener la ubicación: " + error.message);
            });
    } else {
        alert("Tu navegador no soporta geolocalización");
    }
}
document.querySelector('#botones button').addEventListener('click', obtenerUbicacion);
