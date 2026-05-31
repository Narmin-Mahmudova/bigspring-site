import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation, Pagination } from 'swiper/modules';

import logoImg from '../../assets/blog-4.jpg';
import logoImg2 from '../../assets/blog-3.jpg';
import logoImg3 from '../../assets/blog-2.jpg';

function About() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-20 px-4 font-sans text-[#2e3e4e]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Latest news</h2>
        </div>

        <Swiper 
          navigation={true} 
          pagination={{ clickable: true }} 
          modules={[Navigation, Pagination]} 
          className="mySwiper !pb-12"
        >
          
          <SwiperSlide>
            {/* Üst tərəf: Böyük Şəkil və Mətn Bloqu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-18 mb-12">
              <div className="flex justify-center w-full">
                <img src={logoImg} alt="logo" className="w-full h-auto rounded-2xl object-cover" />
              </div>
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1e293b] leading-tight">
                  Adversus is a web-based dialer and practical CRM solution
                </h2>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                  ##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He
                </p>
                <button className="bg-[#00a3a4] hover:bg-[#008b8c] text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-sm mt-2">
                  Read more
                </button>
              </div>
            </div> {/* <-- grid-cols-2 burada bağlandı! */}

            {/* Alt tərəf: Sərbəst 3-lü Kartlar Qrupu (İndi tam eni tutacaq) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col gap-3">
                <img src={logoImg} alt="logo" className="w-full h-48 object-cover rounded-2xl" />
                <h4 className="text-xl font-bold text-[#1e293b] hover:text-[#00a3a4] cursor-pointer">
                  How to make toys from old Olarpaper
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                <img src={logoImg2} alt="logo" className="w-full h-48 object-cover rounded-2xl" />
                <h4 className="text-xl font-bold text-[#1e293b] hover:text-[#00a3a4] cursor-pointer">
                  What you need to know about Photography
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                <img src={logoImg3} alt="logo" className="w-full h-48 object-cover rounded-2xl" />
                <h4 className="text-xl font-bold text-[#1e293b] hover:text-[#00a3a4] cursor-pointer">
                  How to make toys from old Olarpaper
                </h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-18">
              <div className="flex justify-center w-full">
                <img src={logoImg2} alt="logo" className="w-full h-auto rounded-2xl object-cover" />
              </div>
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1e293b] leading-tight">
                  What you need to know about Photography
                </h2>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                  ##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He
                </p>
                <button className="bg-[#00a3a4] hover:bg-[#008b8c] text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-sm mt-2">
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}

export default About;