import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'; 

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     // setcategories( ['Spiderman', ...categories] );
    //     setcategories( cats => [...cats, 'Spiderman'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                {
                    categories.map( category => {

                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    )
}