import React from 'react';
import './App.css';
// import ArcGISMap from 'esri/Map';
// import MapView from 'esri/views/MapView';
import Header from './Components/Header.js'
import LatLong from './Components/LatLong.js'
import { loadModules } from 'esri-loader';


class App extends React.Component {
  constructor(){
    super()
    this.mapRef = React.createRef();
    this.state={
      lat:null,
      long:null,
      attrName:null,
      attrAdd:null,
      createGraphic:false
    }
  }

  updateLat = (lat) => {
    // console.log(lat)
    this.setState({ lat:lat })
  }
  updateLong = (long) => {
    // console.log(long)
    this.setState({ long:long })
  }
  updateName = (name) => {
    // console.log(name)
    this.setState({ name:name })
  }
  updateAdd = (add) => {
    // console.log(add)
    this.setState({ address:add })
  }

// return a set of graphics to plot a point onto the map
  createPointGraphics = (event) => { 
    event.preventDefault()
    loadModules([ 'esri/Graphic' ], {css:true})
    .then(( [Graphic] ) => {
        //creating the geography
        var pointGeo = {
            type:"point",
            longitude:this.state.lat,
            latitude:this.state.long
        }
        //creating the symbol
        var pointSymbol = {
            type:'simple-marker',
            color:"#102A44",
            width: 4
        }
        //creating the attributes
        var pointAttr = {
            Name: this.state.attrName,
            Address: this.state.attrAdd
        }
        let graphic = new Graphic({
            geometry:pointGeo,
            symbol:pointSymbol,
            attributes:pointAttr
        })
        // console.log(event)
        console.log(graphic)
        this.addGraphics(this.state.view, graphic)
    });
  }

  // return a set of graphics to plot a point onto the map
  createPipelineGraphics = () => {
    // event.preventDefault()
    loadModules([ 'esri/Graphic' ], {css:true})
    .then(([Graphic]) => {
      //creating the geography
      var polylineGeo = {
          type: "polyline", // autocasts as new Polyline()
          paths: [[-111.3, 52.68], [-98, 49.5]]
      }
      //creating the symbol
      var lineSymbol = {
          type: "simple-line", // autocasts as new SimpleLineSymbol()
          color: [226, 119, 40], // RGB color values as an array
          width: 4
      }
      //creating the attributes
      var lineAttr = {
          Name: "Keystone Pipeline", // The name of the pipeline
          Owner: "TransCanada", // The owner of the pipeline
          Length: "3,456 km" // The length of the pipeline
      }
      var polylineGraphic = new Graphic({
          geometry: polylineGeo, // Add the geometry created in step 4
          symbol: lineSymbol, // Add the symbol created in step 5
          attributes: lineAttr // Add the attributes created in step 6
      })
      console.log(polylineGraphic)
      this.addGraphics(this.state.view, polylineGraphic)
    });
  }


  componentDidMount(){
    //lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map','esri/views/MapView','esri/Graphic'], { css: true })
    .then(([ArcGISMap, MapView, Graphic]) => {
    const map = new ArcGISMap({
        // basemap: 'topo-vector'
        basemap: 'streets'
    });

    this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-95, 37],
        zoom: 5
        });
        
        // this.createPipelineGraphics()
        this.setState({map:map}) //setting state of map
        this.setState({ view: this.view })
        // console.log(map)
    });
  }

  // add graphic to view
  addGraphics = (view,graphic) => {
    // this.setState({ graphic:graphic })
    view.graphics.add(graphic)
  }

  // update the latitude and longitude
  updateCoords = (lat,long,name=null,address=null) => {
    this.setState({ lat:lat, long:long, attrName:name, attrAdd:address })
  }

  componentWillUnmount(){
    if (this.view) {
        // destroy the map view
        this.view.container = null;
    }
  }


  render(){
    return(
      <div>
        <Header/>
        
        <div className="webmap" ref={this.mapRef}> 

        </div>

        <LatLong lat={ this.updateLat } long={ this.updateLong }
        attrName={ this.updateName } attrAdd={ this.updateAdd } createPointGraphics={this.createPointGraphics} />

        {console.log('view')}

        {/* {console.log(this.state.lat)}
        {console.log(this.state.long)} */}


      </div>
    )
  }
}
export default App;
