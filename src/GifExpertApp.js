import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Boku no Hero'] );
    //     // setCategories( categories => [...categories, 'Boku no Hero'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category =>
                        //key = IDs de bases de datos
                        //No puede ser el indice, debe ser único
                        <GifGrid
                            category={ category }
                            key={ category }
                        />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp
