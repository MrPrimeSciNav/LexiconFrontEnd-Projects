function init() {
    let mapOptions = {
        center: new google.maps.LatLng(40.782710, -73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };

    // Map() ritar map i HTML
    let venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function loadScript() {
    let script = document.createElement('script');  // Skapar <script> element
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);  // Lägger till <script> element i <body>
}

window.onload = loadScript;  // Kör loadScript när sidan är laddad