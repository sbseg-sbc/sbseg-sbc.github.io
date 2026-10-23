function initialize() {
	// Exibir mapa;
	var centre = new google.maps.LatLng(-22.963793, -43.178163);
	var fleetLatLng =  new google.maps.LatLng(-22.963793, -43.178163);
	var mapOptions = {
		zoom: 18,
		scrollwheel: false,
		center: centre,
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	} 
	// Exibir o mapa na div #mapa;
	var map = new google.maps.Map(document.getElementById("mapaG"), mapOptions);
	google.maps.event.addListener(map, 'zoom_changed', function() {
		if (map.getZoom() < 13){map.setZoom(13);}			
	});
	var image = {
		url: '',
		// definindo tamanho da imagem
		size: new google.maps.Size(70, 83),
		// Setando a origem da imagem (X,Y)
		origin: new google.maps.Point(0,0),
		// Setando o ponto de ancora da imagem (X,Y)
		anchor: new google.maps.Point(25, 80)
	}

	var marker = new google.maps.Marker({
		icon: marker,
		position: centre,
		map: map,
	});
};
// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBMSq3UR_zN0AmGS-0imyfFlVNF1YtefeA&sensor=false&callback=initialize";
  document.body.appendChild(script);
};
window.onload = loadScript;