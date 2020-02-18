import React from 'react'

class LatLong extends React.Component {

    constructor(){
        super()
        this.state={
            lat:null,
            long:null,
            name:null,
            add:null
        }
    }

    render(){
        return(
            <div>
                <h4 style={{textAlign:'center'}} > <b> Enter a Place on the Map: </b> </h4>
                <br/>
                <form id='lat-long'>
                    <label> <b> Latitude </b> </label>
                    <input type='text' name='lat' onChange={ (event) => {this.props.lat(event.target.value)} } />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label> <b> Longitude </b> </label>
                    <input type='text' name='long' onChange={ (event) => {this.props.long(event.target.value)} }  />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label> <b> Name </b> </label>
                    <input type='text' name='attr-name' onChange={ (event) => {this.props.attrAdd(event.target.value)} }  />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label> <b> Address </b> </label>
                    <input type='text' name='add' onChange={ (event) => {this.props.attrName(event.target.value)} }  />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={ (event) => { this.props.createPointGraphics(event) } } > <b> Submit </b> </button>
                </form>
            </div>
        )
    }
}
export default LatLong;