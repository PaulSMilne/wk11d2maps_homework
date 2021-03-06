var MapWrapper = function(container, center, zoom){
     this.googleMap = new google.maps.Map(container, {
          center: center,
          zoom: zoom
     });
}

MapWrapper.prototype = {

     addMarker: function(coords){
          
          var marker = new google.maps.Marker({
               position: coords,
               map: this.googleMap
          })
     },

     // addWindow: function(info){
     //      var newWindow = new google.maps.InfoWindo({
     //           content = info
     //      });
     //      newWindow.addListener('click', function({
     //           newWindow.open(this.map, marker)
     //      }))
     // },

     addClickEvent: function(){

          google.maps.event.addListener(this.googleMap, 'click', function(event){

               this.addMarker(event.latLng);

          }.bind(this))
     }
}
