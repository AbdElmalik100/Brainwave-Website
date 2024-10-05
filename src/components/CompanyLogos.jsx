import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({className}) => {
    return (
        <div className={className}>
            <h5 className='tagline text-center mb-6 text-n-1/50'>Heloping people create beautiful content at</h5>
            <ul className='flex'>
                {
                    companyLogos.map((logo, index) => (
                        <li key={index} className='flex justify-center items-center flex-1 h-[8.5rem]'>
                            <img src={logo} width={134} height={28} alt={logo} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CompanyLogos