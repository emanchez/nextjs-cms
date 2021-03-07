import React, { useEffect, useState } from 'react'
import ImageLayout from "./ImageLayout"
import { getContenfulStuff } from '../Utilities/contentfulCalls'

export default function Images() {
    let [resp, setResp] = useState([])

    useEffect(()=>{
        getContenfulStuff().then( data => { setResp(data) })

    }, [])


    return (
        <>
            {resp.map((value) =>{
                return (
                    <ImageLayout>
                        <p className="title">{value.title}</p>
                        <img src={value.url} alt="" />
                        <p className="description">{value.description}</p>
                    </ImageLayout>
                )
            })}
        </>
    )
}