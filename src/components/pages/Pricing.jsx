import React from 'react'
import logoImg from '../../assets/cta.svg';


function Pricing() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-20 px-4 font-sans text-[#2e3e4e]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-between min-h-[500px]">
            <div>
              <h4 className="text-2xl font-bold text-[#1e293b] mb-4">Basic Plan</h4>
              <div className="text-5xl font-bold mb-2">
                $49<span className="text-lg font-normal text-gray-400">/Month</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">Best For Small Individuals</p>
              
              <ul className="text-gray-600 space-y-4 text-[15px] mb-8">
                <li>Express Service</li>
                <li>Customs Clearance</li>
                <li>Time-Critical Services</li>
              </ul>
            </div>
            <button className="w-full border-2 border-[#00a3a4] text-[#00a3a4] hover:bg-[#00a3a4] hover:text-white font-medium py-3 rounded-full transition-colors">Get started for free</button>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-between min-h-[540px] transform lg:scale-105">
            <div>
              <h4 className="text-2xl font-bold mb-4">Professional Plan</h4>
              <div className="text-5xl font-bold mb-2  ">
                $69<span className="text-lg font-normal text-gray-400">/Month</span>
              </div>
              <p className="text-sm mb-8">Best value for growing businesses</p>
              
              <ul className="space-y-4 text-[15px] mb-8">
                <li>Express Service</li>
                <li>Customs Clearance</li>
                <li>Time-Critical Services</li>
                <li>Cloud Service </li>
                <li>Best Dashboard </li>
              </ul>
            </div>
            <button className="w-full border-2 bg-[#00a3a4] text-white   font-medium py-3 rounded-full transition-colors">Get started</button>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-between min-h-[500px]">
            <div>
              <h4 className="text-2xl font-bold text-[#1e293b] mb-4">Business Plan</h4>
              <div className="text-5xl font-bold  mb-2">
                $99<span className="text-lg font-normal text-gray-400">/Month</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">Best For Large Individuals</p>
              
              <ul className="text-gray-600 space-y-4 text-[15px] mb-8">
                <li>Express Service</li>
                <li>Customs Clearance</li>
                <li>Time-Critical Services</li>
              </ul>
            </div>
            <button className="w-full border-2 border-[#00a3a4] text-[#00a3a4] hover:bg-[#00a3a4] hover:text-white font-medium py-3 rounded-full transition-colors">Get started</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-18">
            <div className="flex justify-center w-full">
                <img src={logoImg}  alt="logo" />
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1e293b] leading-tight">Need a larger plan?</h2>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</p>
                <button className="bg-[#00a3a4] hover:bg-[#008b8c] text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-sm mt-2">Contact us</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Pricing