import React from 'react'
import { Link } from 'react-router-dom'

function Card({ name, cca2, capital, region, population, flags }) {
    return (
        <div className='col-xl-3 col-lg-4 col-sm-6 col-12 p-sm-4 p-5'>
            <Link to={`/country/${cca2}`} >
                <div className="Card card text-start">
                    <img className="card-img-top" src={flags.png} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title mb-4">{name.common}</h4>
                        <p className="card-text mb-1">Population: {population}</p>
                        <p className="card-text mb-1">Region: {region}</p>
                        <p className="card-text mb-1">Capital: {capital} </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card