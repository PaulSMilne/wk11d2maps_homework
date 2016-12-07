var init = function(){
     var container = document.getElementById('main-map');
     var center = {lat: 55.99, lng: -2.52}
     var mainMap = new MapWrapper(container, center, 10);
     var newMarker = {lat:55.99, lng:-2.52};
     mainMap.addMarker(center);
     mainMap.addMarker(newMarker);
     mainMap.addClickEvent();
}

window.onload = init;