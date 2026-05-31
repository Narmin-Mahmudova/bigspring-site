import React from 'react';
import heroImg from '../../assets/banner-art.svg'; 

function Index() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-20 px-4 font-sans flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto mb-12 flex flex-col gap-5">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1e293b] leading-tight tracking-tight">
            Let us solve your critical website development challenges
          </h1>
          <p className="text-[#64748b] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
        </div>

        <div className="w-full max-w-4xl flex justify-center mt-6">
          <img src={heroImg} alt="Website development challenges illustration" className="w-full h-auto object-contain"/>
        </div>
      </div>
    </>
  );
}

export default Index;