import React from 'react'
import './about.css'

const Company = ({title,description,image}) =>{
    return(
        <>
            <div className="card">
                <img src={image} alt={title} className="company-image"/>
                    <div className='details'>
                        <h4 className='title'>{title}</h4>
                        <p>
                            {description}
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Company