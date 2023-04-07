import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import Filter from '../components/functional/Filter'
import Card from '../components/UI/Card'
import { useLoaderData } from 'react-router-dom'

function Home() {
    const data = useLoaderData()
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('All')
   
    const filter = data
        
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .filter(item => region === "All" ? item : item.region === region)
        .filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()))
        .map(item => <Card key={nanoid()}  {...item} />)

    return (
        <>
            <Filter setSearch={setSearch} setRegion={setRegion} />
            <div className='d-flex flex-wrap py-3 min-height-50'>
                {filter.length ? filter : <h2>There is no such country</h2>}
            </div>
        </>
    )
}

export default Home



export const countryLoaderData = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    // console.log(data);
    return data
}