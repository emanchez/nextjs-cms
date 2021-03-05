import React, { useEffect, useState } from 'react'
import ImageLayout from "./ImageLayout"

const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_KEY
});

export default function Images() {
    let [resp, setResp] = useState([])

    useEffect(()=>{
        const getContenfulStuff = async () => {
            const response = await client.getEntries()
            const parseData = client.parseEntries(response)
            const respArray = (await parseData).items
            const cleanArray = await respArray.map((value) =>{
                return (
                    [value.fields.title, 
                    value.fields.image.fields.file.url,
                    value.fields.description]
                )
            })
            setResp(cleanArray)        
        }
        getContenfulStuff()

    }, [])


    return (
        <>
            {resp.map((value) =>{
                return (
                    <ImageLayout>
                        <p className="title">{value[0]}</p>
                        <img src={value[1]} alt="" />
                        <p className="description">{value[2]}</p>
                    </ImageLayout>
                )
            })}
        </>
    )
}