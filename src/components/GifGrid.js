import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:gifs, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='card animate__animated animate__flash'>Loading...</p> }

            <div className='card-container'>
                {
                    gifs.map( img => (
                        <GifGridItem
                            key = { img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
