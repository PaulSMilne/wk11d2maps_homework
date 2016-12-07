var pittenweem = {lat: 56.21, lng: -2.73}

var init = function(){
     var container = document.getElementById('main-map');
     var mainMap = new MapWrapper(container, pittenweem, 11);
     // mainMap.addMarker(pittenweem);
     // mainMap.addClickEvent();
}

var marker = new google.maps.Marker({
     position: pittenweem,
})

var pittenweemInfo = "Pittenweem: a village in the East Neuk of Fife.";

var pittenweemWindow = new google.maps.InfoWindow({
     content: pittenweemInfo
});



window.onload = init;