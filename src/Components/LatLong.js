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
                <br/>

                <form id='lat-long'>
                    <label> Latitude </label>
                    <input type='text' name='lat' onChange={ (event) => {this.props.lat(event.target.value)} } />
                    <label> Longitude </label>
                    <input type='text' name='long' onChange={ (event) => {this.props.long(event.target.value)} }  />
                    <label> Name </label>
                    <input type='text' name='attr-name' onChange={ (event) => {this.props.attrAdd(event)} }  />
                    <label> Address </label>
                    <input type='text' name='add' onChange={ (event) => {this.props.attrName(event)} }  />
                    <button onClick={ (event) => { this.props.createPointGraphics(event) } } > Submit </button>
                </form>
            </div>
        )
    }
}
export default LatLong;