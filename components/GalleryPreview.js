import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './GalleryPreview.module.css'
import Images from './Images'
import { getContenfulStuff } from '../Utilities/contentfulCalls'

export default function GalleryPreview(){
    let [resp, setResp] = useState([])

    useEffect(()=>{
        getContenfulStuff().then( data => { setResp(data) })
    }, [])
    return (

        <div className={styles.container_wrap}>
            <div className={styles.img_container}>
                {
                resp.map((value) => {
                    return(
                        <div className={styles.img_wrap}>
                            <img src={value.url}></img>
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