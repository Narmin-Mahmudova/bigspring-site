import React from 'react';

function Contact() {
  return (
    <>
      <div className='max-w-6xl mx-auto px-4 mt-20 mb-20 font-sans text-[#2e3e4e]'>
        <h1 className='text-center text-5xl font-bold mb-16 text-[#1e293b]'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          <div className='flex flex-col gap-4'>
            <input type="text" placeholder='Name' className='w-full border border-gray-200 rounded px-4 py-3 outline-none focus:border-[#00a3a4] transition-colors placeholder-gray-400'/>
            <input type="email" placeholder='Your email' className='w-full border border-gray-200 rounded px-4 py-3 outline-none focus:border-[#00a3a4] transition-colors placeholder-gray-400'/>
            <input 
              type="text" placeholder='Subject'className='w-full border border-gray-200 rounded px-4 py-3 outline-none focus:border-[#00a3a4] transition-colors placeholder-gray-400'/>
            <textarea placeholder='Your message' rows="6" className='w-full border border-gray-200 rounded px-4 py-3 outline-none focus:border-[#00a3a4] transition-colors placeholder-gray-400 resize-y'></textarea>
            
            <div className='mt-2'>
              <button className='bg-[#00a3a4] text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#008b8c] transition-colors shadow-sm'>Send Now </button>
            </div>
          </div>

          <div className='flex flex-col gap-5 pl-0 md:pl-6'>
            <h5 className='text-2xl font-bold text-[#1e293b] leading-tight'>Why you should contact us!</h5>
            <p className='text-gray-600 leading-relaxed text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.</p>
            
            <ul className='flex flex-col gap-4 text-[15px] font-medium text-gray-800'>
              <li className='flex items-center gap-3 before:content-["•"] before:text-[#00a3a4] before:text-2xl before:leading-none'>
                <span><b className='font-semibold'>phone:</b> +88 125 256 452</span>
              </li>
              <li className='flex items-center gap-3 before:content-["•"] before:text-[#00a3a4] before:text-2xl before:leading-none'>
                <span><b className='font-semibold'>Mail:</b> info@bigspring.com</span>
              </li>
              <li className='flex items-center gap-3 before:content-["•"] before:text-[#00a3a4] before:text-2xl before:leading-none'>
                <span><b className='font-semibold'>Address:</b> 360 Main rd, Rio, Brazil</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;