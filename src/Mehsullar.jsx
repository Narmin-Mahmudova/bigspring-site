import React, { useContext, useEffect, useState } from 'react'
import { getData } from './Servives/Api'
import { BasketContext } from './components/context/BasketContext'

function Mehsullar() {
    const [mehsul, setMehsul] = useState([])
    const [searchTerm, setSearchTerm] = useState('') 
    
    useEffect(() => {
        getData().then(res => setMehsul(res))
    }, [])
    
    const { addBasket } = useContext(BasketContext)
    const filteredMehsul = mehsul.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-center p-6 pb-0">
                <input type="text" placeholder="Məhsul axtar..." value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0AA8A7]" />
            </div>

            
            <div className="flex flex-wrap gap-6 justify-center p-6">
                {filteredMehsul.map(item => (
                    <div key={item.id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-white">
                        <img src={item.image} alt={item.title} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.category}</span>
                            <h2 className="text-xl font-semibold tracking-wide">{item.title}</h2>
                        </div>
                        <p className="dark:text-gray-800">${item.price.toFixed(2)}</p>
                        <button 
                            onClick={() => addBasket(item.id, item.title, item.price, item.image)} 
                            className="px-4 py-2 mt-4 text-sm font-semibold tracking-wider text-white uppercase bg-[#0AA8A7] rounded hover:bg-[#088988] focus:outline-none focus:ring focus:ring-violet-300"
                        >
                            Səbətə at
                        </button>
                    </div>
                ))}
            </div>

            
            {filteredMehsul.length === 0 && (
                <p className="text-center text-gray-500 pb-6">Məhsul tapılmadı</p>
            )}
        </div>
    )
}

export default Mehsullar