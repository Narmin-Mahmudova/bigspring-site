import React, { useContext } from 'react'
import { Link } from 'react-router'
import { BasketContext } from './components/context/BasketContext'

function Sebet() {
    const { 
        sebet, 
        removeFromBasket, 
        increaseQuantity, 
        decreaseQuantity, 
        totalPrice 
    } = useContext(BasketContext)

    if (sebet.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Səbətiniz boşdur</h2>
                <Link to="/" className="px-6 py-3 bg-[#0AA8A7] text-white rounded hover:bg-[#088988] transition">
                    Alış-verişə davam et
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                {/* ✅ Sadəcə "Səbət" yazıldı, say çıxarıldı */}
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Səbət</h1>
                
                <div className="space-y-4">
                    {sebet.map(item => (
                        <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-24 h-24 object-cover rounded"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-[#0AA8A7] font-bold">${item.price.toFixed(2)}</p>
                            </div>
                            
                            <div className="flex items-center gap-3 mx-4">
                                <button 
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-bold"
                                >
                                    −
                                </button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <button 
                                    onClick={() => increaseQuantity(item.id)}
                                    className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-bold"
                                >
                                    +
                                </button>
                            </div>
                            
                            <div className="text-right mr-6 min-w-[80px]">
                                <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            
                            <button 
                                onClick={() => removeFromBasket(item.id)}
                                className="text-red-500 hover:text-red-700 px-3 py-1 font-medium"
                            >
                                Sil
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Ümumi cəm:</h2>
                        <p className="text-2xl font-bold text-[#0AA8A7]">${totalPrice.toFixed(2)}</p>
                    </div>
                    <button className="w-full py-3 bg-[#0AA8A7] text-white font-semibold rounded hover:bg-[#088988] transition">
                        Sifarişi tamamla
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sebet