import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './GalleryPreview.module.css'
import Images from './Images'

const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_KEY
});

export default function GalleryPreview(){
    let [resp, setResp] = useState([])

    useEffect(()=>{
        const getContenfulStuff = async () => {
            const response = await client.getEntries()
            const parseData = client.parseEntries(response)
            const respArray = (await parseData).items
            const cleanArray = await respArray.map((value) =>{
                return (
                    [value.fields.image.fields.file.url]
                )
            })
            setResp(cleanArray)        
        }
        getContenfulStuff()

    }, [])
    return (

        <div className={styles.container_wrap}>
            <div className={styles.img_container}>
                {
                resp.map((value) => {
                    return(
                        <div className={styles.img_wrap}>
                            <img src={value[0]}></img>
                        </div>
                    )
                })
                }
            </div>
          <Link href="./gallery">
            <a>View full gallery&gt;</a>
          </Link>
        </div>
        
    )
    
}