import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi"
import DetailCard from '../components/UI/DetailCard'
import { useNavigate } from 'react-router-dom'

function Country() {
    const navigate = useNavigate()
    return (
        <div className='py-5 px-sm-3 rounded px-5'>
            <button className='btn btn-dark px-3 d-flex align-items-center gap-2 py-2' onClick={() => navigate(-1)} >
                <HiArrowNarrowLeft size={20} />
                <span> Back </span>
            </button>
            <DetailCard />
        </div>
    )
}

export default Country