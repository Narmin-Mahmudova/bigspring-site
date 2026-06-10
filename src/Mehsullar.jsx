import React, { useEffect, useState } from 'react'
import { getData } from './Servives/Api'

function Mehsullar() {
    const [mehsul, setMehsul] = useState([])
    useEffect(() => {
        getData().then(res => setMehsul(res))
    }, [])

    return (
        <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 min-h-screen">
            {mehsul.map(item => (
                <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900" key={item.id}>
                    <img src={item.image} alt={item.title} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.category}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{item.title}</h2>
                    </div>
                    <p className="dark:text-gray-800">${item.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}
export default Mehsullar;