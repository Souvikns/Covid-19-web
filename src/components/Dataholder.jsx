import React from 'react'

function Dataholder(props){
    return(
        <div className="section">
            <div className="card">
                <div className="section">
                <h1 className="title">{props.country}</h1>
                <h1 className="is-size-4">{props.province}</h1>
                <p>Last Update: {props.lastUpdate}</p>
                <p>Confirmed Cases: {props.confirmed}</p>
                <p>Deaths:{props.deaths}</p>
                <p>Recovered: {props.recovered}</p>
                </div>
            </div>
        </div>
    )
}

export default Dataholder