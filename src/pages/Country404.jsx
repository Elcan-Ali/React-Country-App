import React from 'react'
import { useNavigate } from 'react-router-dom'

function Country404() {
    const navigate = useNavigate()
    
    return (
        <div className='d-flex align-items-center rounded justify-content-between bg-light p-5 mx-3 my-5 '>
            <div className='d-flex align-items-center gap-4'>

                <button onClick={()=>{navigate("/country")}} className='btn btn-dark d-flex align-items-center gap-2 '>
                    <span>Go Home</span>
                </button>

                <p className='mb-0'>This Country is not found</p>
                
            </div>
            <img src="https://i.pinimg.com/originals/fd/7e/e5/fd7ee52e87cfc86b89371f0749e817d9.gif" style={{ width: "200px" }} alt="" />
        </div>
    )
}

export default Country404