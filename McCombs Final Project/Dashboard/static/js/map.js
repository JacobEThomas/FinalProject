
  // initialize the map
  var map = L.map('map').setView([30.288490, -97.7431], 11);

  // load a tile layer
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoianRob216IiwiYSI6ImNrMHBxYXBtcDAwaHMzY25iZmpyZjhoZjYifQ.NcHSW7GHtHJjK-iduz1HBg'
        }).addTo(map);

    // New Marker

    var AHSMarker = L.marker([30.2736, -97.7667]).addTo(map);

    var AHSCircle = L.circle([30.2736, -97.7667], 831).addTo(map);

    // Binding a pop-up to our marker
    AHSMarker.bindPopup("Austin High School");

    // New Marker

    var AnHSMarker = L.marker([30.3757, -97.7528]).addTo(map);

    var AnHSCircle = L.circle([30.3757, -97.7528], 831).addTo(map);

    // Binding a pop-up to our marker
    AnHSMarker.bindPopup("Anderson High School");

    // New Marker

    var CrHSMarker = L.marker([30.213140, -97.796455]).addTo(map);

    var CrHSCircle = L.circle([30.213140, -97.796455], 831).addTo(map);

    // Binding a pop-up to our marker
    CrHSMarker.bindPopup("Crockett High School");      
 
    // New Marker

    var GzHSMarker = L.marker([30.288490, -97.721016]).addTo(map);

    var GzHSCircle = L.circle([30.288490, -97.721016], 831).addTo(map);

    // Binding a pop-up to our marker
    GzHSMarker.bindPopup("Garza High School");    

    // New Marker

    var LBJMarker = L.marker([30.313743, -97.656849]).addTo(map);

    var LBJSCircle = L.circle([30.313743, -97.656849], 831).addTo(map);

    // Binding a pop-up to our marker
    LBJMarker.bindPopup("LBJ High School");

    // New Marker

    var LHSMarker = L.marker([30.360507, -97.708013]).addTo(map);

    var LHSSCircle = L.circle([30.360507, -97.708013], 831).addTo(map);
    

    // Binding a pop-up to our marker
    LHSMarker.bindPopup("Lanier High School");    

    // New Marker

    var McHSMarker = L.marker([30.325566, -97.7730405]).addTo(map);

    var McHSCircle = L.circle([30.325566, -97.7730405], 831).addTo(map);

    // Binding a pop-up to our marker
    McHSMarker.bindPopup("McCallum High School");        

    // New Marker

    var RHSMarker = L.marker([30.322385, -97.689868]).addTo(map);

    var RHSCircle = L.circle([30.322385, -97.689868], 831).addTo(map);

    // Binding a pop-up to our marker
    RHSMarker.bindPopup("Reagan High School");        
    
    // New Marker

    var THSMarker = L.marker([30.233602, -97.743701]).addTo(map);

    var THSCircle = L.circle([30.233602, -97.743701], 831).addTo(map);

    // Binding a pop-up to our marker
    THSMarker.bindPopup("Travis High School");            

    var orangeIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // New Marker

    var BMidMarker = L.marker([30.195088, -97.787304], {icon: orangeIcon}).addTo(map);

    var BMidHSCircle = L.circle([30.195088, -97.787304], 831).addTo(map);

    // Binding a pop-up to our marker
    BMidMarker.bindPopup("Bedichek Middle School"); 

    // New Marker

    var BuMidMarker = L.marker([30.364734, -97.725551], {icon: orangeIcon}).addTo(map);

    var BuMidCircle = L.circle([30.364734, -97.725551], 831).addTo(map);

    // Binding a pop-up to our marker
    BuMidMarker.bindPopup("Burnet Middle School");     
   
    // New Marker

    var CVMidMarker = L.marker([30.212575, -97.834172], {icon: orangeIcon}).addTo(map);

    var CVMidCircle = L.circle([30.212575, -97.834172], 831).addTo(map);

    // Binding a pop-up to our marker
    CVMidMarker.bindPopup("Covington Middle School");      
   
    // New Marker

    var DbMidMarker = L.marker([30.354355, -97.679398], {icon: orangeIcon}).addTo(map);

    var DbMidCircle = L.circle([30.354355, -97.679398], 831).addTo(map);

    // Binding a pop-up to our marker
    DbMidMarker.bindPopup("Dobie Middle School");   

    // New Marker

    var FlMidMarker = L.marker([30.244060, -97.750684], {icon: orangeIcon}).addTo(map);

    var FlMidCircle = L.circle([30.244060, -97.750684], 831).addTo(map);

    // Binding a pop-up to our marker
    FlMidMarker.bindPopup("Fulmore Middle School"); 

    // New Marker

    var LaMidMarker = L.marker([30.337704, -97.740716], {icon: orangeIcon}).addTo(map);

    var LaMidCircle = L.circle([30.337704, -97.740716], 831).addTo(map);

    // Binding a pop-up to our marker
    LaMidMarker.bindPopup("Lamar Middle School");     

    // New Marker

    var MarMidMarker = L.marker([30.253267, -97.730546], {icon: orangeIcon}).addTo(map);

    var MarMidCircle = L.circle([30.253267, -97.730546], 831).addTo(map);

    // Binding a pop-up to our marker
    MarMidMarker.bindPopup("Martin Middle School");


    // New Marker

    var MenMidMarker = L.marker([30.188610, -97.743140], {icon: orangeIcon}).addTo(map);

    var MenMidCircle = L.circle([30.188610, -97.743140], 831).addTo(map);
    
    // Binding a pop-up to our marker
    MenMidMarker.bindPopup("Mendez Middle School");  
    
    // New Marker

    var MuMidMarker = L.marker([30.354004, -97.758510], {icon: orangeIcon}).addTo(map);

    var MuMidCircle = L.circle([30.354004, -97.758510], 831).addTo(map);
    
    // Binding a pop-up to our marker
    MuMidMarker.bindPopup("Murchison Middle School");  

    // New Marker

    var OHMidMarker = L.marker([30.285400, -97.774261], {icon: orangeIcon}).addTo(map);

    var OHMidCircle = L.circle([30.285400, -97.774261], 831).addTo(map);
    
    // Binding a pop-up to our marker
    OHMidMarker.bindPopup("O. Henry Middle School");  

    // New Marker

    var SmMidMarker = L.marker([30.233758, -97.841895], {icon: orangeIcon}).addTo(map);

    var SmMidCircle = L.circle([30.233758, -97.841895], 831).addTo(map);
    
    // Binding a pop-up to our marker
    SmMidMarker.bindPopup("Small Middle School");
    
    // New Marker

    var WbMidMarker = L.marker([30.333209, -97.707005], {icon: orangeIcon}).addTo(map);

    var WbMidCircle = L.circle([30.333209, -97.707005], 831).addTo(map);
    
    // Binding a pop-up to our marker
    WbMidMarker.bindPopup("Webb Middle School");         