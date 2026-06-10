import React, { useState, useEffect } from 'react'

function Index() {
    const [data, setData] = useState(null);
    function showData() {
        useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=> res.json())
            .then(res => setData(res))
    }, [])
    }
    showData()
    return (
        <div>
            {data && data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
    )
}
export default Index;