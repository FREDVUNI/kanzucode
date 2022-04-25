import React from 'react'
import Company from './Company'
import { data } from "../../data"

const About = () => {
    return (
            <>
                {data.map(item=>(
                    <Company key={item.id} title={item.title} description={item.description} image={item.image}/>
                ))}
            </>
    )
}

export default About
