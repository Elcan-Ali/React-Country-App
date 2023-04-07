import { nanoid } from 'nanoid';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function DetailCard() {

    const data = useLoaderData()
    const detailData = data[0]
    console.log(detailData);

    return (
        <div id='DetailCard' className=' d-flex bg-light flex-column rounded flex-lg-row  align-items-center py-5 my-5'>
            <div className='col-lg-6 mb-4 mb-lg-0 px-4'>
                <img src={detailData?.flags.png}
                    alt="" />
            </div>
            <div className='col-lg-6 col-12  px-4'>
                <h3 className='mb-3'>{detailData?.name.common}</h3>
                <div className='d-flex flex-column flex-md-row '>
                    <ul className='px-0 col-12 col-md-6'>
                        <li className='mb-1'><b>nativeName :</b> {detailData?.name?.common}</li>
                        <li className='mb-1'><b>Population :</b>  {detailData?.population}</li>
                        <li className='mb-1'><b>Region :</b>  {detailData?.region}</li>
                        <li className='mb-1'><b>Sub Region :</b>  {detailData?.subregion}</li>
                        <li className='mb-1'><b>Capital :</b>  {detailData?.capital}</li>
                    </ul>
                    <ul className='px-0 col-12 col-md-6'>
                        <li className='mb-1'><b>Top Level Domain :</b> {detailData?.tld[0]}</li>
                        <li className='mb-1'><b>Currencies :</b> {Object.values(detailData?.currencies)[0].name}</li>
                        <li className='mb-1'><b>Languages :</b>{Object.values(detailData?.languages)[0]}</li>
                    </ul>
                </div>
                <h4 className='mb-3'>Border Countries: </h4>
                <div className='d-flex flex-wrap gap-3'>

                    {detailData.borders?.map(item =>
                    
                        <Link key={nanoid()} to={`/country/${item}`}>
                            <button className='btn-dark btn'>{item}</button>
                        </Link>

                    ) ?? <h5>This country has no border countries</h5>}
                </div>
            </div>
        </div>
    )
}

export default DetailCard


export const useCountryDetailData = async ({ params }) => {


    const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.alphaCode}`)
    if (response.status >= 400 && response.status <= 499) {
        throw new Error("xeta var qaa")
    } else {
        const data = await response.json()
        return data
    }


}