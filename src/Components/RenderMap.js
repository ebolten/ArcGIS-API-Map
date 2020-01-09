import React from 'react'

class RenderMap extends React.Component {

    constructor(){
        super()
        this.mapRef = React.createRef();
    }

    render(){
        return(
            <div className="webmap" ref={this.mapRef} >
                This is a Map
            </div>
        )
    }
}
export default RenderMap;


/*
var graphics = places.map(function (place) {
    return new Graphic({
    attributes: {
            ObjectId: place.id,
            address: place.address
    },
    geometry: {
            longitude: place.longitude,
            latitude: place.latitude
    }
  });
});
*/
/*
var polyline = {
    type: "polyline", // autocasts as new Polyline()
    paths: [[-111.3, 52.68], [-98, 49.5], [-93.94, 29.89]]
};

var lineSymbol = {
    type: "simple-line", // autocasts as new SimpleLineSymbol()
    color: [226, 119, 40], // RGB color values as an array
    width: 4
};

var lineAtt = {
    Name: "Keystone Pipeline", // The name of the pipeline
    Owner: "TransCanada", // The owner of the pipeline
    Length: "3,456 km" // The length of the pipeline
  };

var polylineGraphic = new Graphic({
    geometry: polyline, // Add the geometry created in step 4
    symbol: lineSymbol, // Add the symbol created in step 5
    attributes: lineAtt // Add the attributes created in step 6
});
this.addGraphics(this.view,graphic)

this.setState({ graphic:polylineGraphic })
this.addGraphics(this.view,polylineGraphic)
*/