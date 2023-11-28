Number.prototype.formatMoney = function(c, d, t){
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = n < 0 ? "-" : "",
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

new Vue({
	el: '#app',
	data: {
		productos: [
			{
				'producto': 1,
				'descripcion': 'Mario Cookies',
				'precio': '36'
			},
			{
				'producto': 2,
				'descripcion': 'Luky Cookies',
				'precio': '26'
			},
			{
				'producto': 3,
				'descripcion': 'Strawberry Macarons',
				'precio': '60'
			},
			{
				'producto': 4,
				'descripcion': 'Cake Full sheet',
				'precio': '70'
			},
			{
				'producto': 5,
				'descripcion': 'Basic Cupcake',
				'precio': '20'
			},
			{
				'producto': 6,
				'descripcion': 'Pull-apart cake',
				'precio': '2'
			},
			{
				'producto': 7,
				'descripcion': '1/4sheet buttercream',
				'precio': '35'
			}
		],
		facturacion: {
			productoSeleccionado: {
				producto: '',
				cantidad: 1
			},
			productosAgregados: []
		}
	},
	methods: {
		agregarLinea: function(){
			var productoSeleccionado = this.facturacion.productoSeleccionado,
			existe = this.facturacion.productosAgregados.find(function(el){
				return el.producto == productoSeleccionado.producto;
			});

			if(!existe){
				this.facturacion.productosAgregados.push({
					producto: productoSeleccionado.producto,
					descripcion: productoSeleccionado.descripcion,
					precio: productoSeleccionado.precio,
					cantidad: productoSeleccionado.cantidad
				});
			}else{
				var lineaFactura = this.facturacion.productosAgregados.find(function(el){
					if(el.producto == productoSeleccionado.producto){
						return el.cantidad;
					}
				});

				lineaFactura.cantidad = parseInt(lineaFactura.cantidad) +
					parseInt(productoSeleccionado.cantidad);
			}
		},
		infoProductoSeleccionado: function(){
			var producto = this.facturacion.productoSeleccionado.producto;

			if(producto){
				info = this.productos.find(function(linea){
					if(linea.producto == producto){
						return linea;
					}
				});

				this.facturacion.productoSeleccionado.descripcion = info.descripcion;
				this.facturacion.productoSeleccionado.precio = info.precio;
			}
		},
		eliminarLinea: function(indice){
			this.facturacion.productosAgregados.splice(indice, 1);

		}
	},
	computed: {
		totalLineas: function(){
			var total = 0;

			this.facturacion.productosAgregados.forEach(function(el){
				total += el.cantidad * el.precio;
			});

			return (total).formatMoney(2, '.', ',');
		}
	}
});

var userLatLng;
var marker;
var map;
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		userLatLng = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		
		// Llamar a la función para mostrar el mapa con la ubicación actual
		showMapWithUserLocation(userLatLng);
		//getNearbyPlaces(userLatLng);
	});
}
function showMapWithUserLocation(userLatLng) {
    map = new google.maps.Map(document.getElementById("gmp-map"), {
        zoom: 14,
        center: userLatLng
    });

    // Agregar marcador en el lugar deseado (cambiar las coordenadas)
    marker=new google.maps.Marker({
        position: { lat: 41.87825012207031, lng: -93.09736633300781 }, // Coordenadas del lugar deseado
        map: map,
        title: "Anthonys COOKIES & CAKES"
    });
	
}
 /*calcula la distacia mas cercana*/
function calculateDistance(userLatLng, placeLatLng) {
    return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(userLatLng.lat, userLatLng.lng),
        new google.maps.LatLng(placeLatLng.lat, placeLatLng.lng)
    );
}
/*lugares cercanos a donde me encuentro*/
function getNearbyPlaces(position) {
	let request = {
	  location: position,
	  rankBy: google.maps.places.RankBy.DISTANCE,
	  keyword: 'Anthonys COOKIES & CAKES'
	};

	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, nearbyCallback);
  } 

  function calcularRuta() {
    if (!userLatLng) {
        console.error("Ubicación actual no disponible.");
        return;
    }

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const solicitud = {
        origin: userLatLng, // Tu ubicación actual
        destination: marker.position, // Posición del marcador en el mapa
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(solicitud, (respuesta, estado) => {
        if (estado === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(respuesta);
        }
    });
}


    
      function initMap() {
        const myLatLng = {
          lat: 41.87825012207031,
          lng: -93.09736633300781
        };
		/* crea el mapa en el div gmp-map */
        const map = new google.maps.Map(document.getElementById("gmp-map"), {
          zoom: 14,/*nivel de zoom del mapa*/
          center: myLatLng,/*Ubicacion central del mapa */
          fullscreenControl: false, /**Desactiva el control de pantalla completa */
          zoomControl: true, /*habilita el control de zoom*/
          streetViewControl: false /*desactiva vista de calle*/
        });
		/*agrega el marcador a la ubicacion deseada*/
        new google.maps.Marker({
          position: myLatLng,/*ubicacion donde se aplica el marcador*/
          map,/*mapa en el que se aplica*/
          title: "Anthonys COOKIES & CAKES"/*titulo de mi marcador*/
        });
      }

	  


   