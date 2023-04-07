import React from 'react'
import { FiSearch } from "react-icons/fi"

function Filter({ setSearch ,setRegion }) {

    const searching = (e) => {
        setSearch(e.target.value)
    }
    const selectRegion = (e) => {
        setRegion(e.target.value)
    }
    return (
        <div className='d-flex justify-content-between gap-3 py-5 px-sm-4 px-5 flex-column flex-md-row '>

            <div id='SearchBar' className='border gap-2 py-2 px-3 d-flex align-items-center bg-white '>
                <FiSearch />
                <input id='Search' onInput={searching} placeholder='Search for a country...' type="text" className='p-1 border-0' />

            </div>


            <select id='Regions' onChange={selectRegion} className='p-2 border '>
                <option >All</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
                <option>Polar</option>
            </select>

        </div>
    )
}

export default Filter