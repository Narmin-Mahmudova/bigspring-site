import React from 'react'

function Card() {
  const userdata = [
    {
      "id": 1,
      "title": "Clean Code",
      "desc": "We write easily readable, maintainable, and highly optimized code to ensure your platform runs flawlessly."
    },
    {
      "id": 2,
      "title": "Object Oriented",
      "desc": "Built on solid object-oriented programming principles for scalable, modular, and future-proof software development."
    },
    {
      "id": 3,
      "title": "24h Service",
      "desc": "Our dedicated support team is available around the clock to assist you with any technical needs or emergencies."
    },
    {
      "id": 4,
      "title": "Value for Money",
      "desc": "High-quality premium solutions tailored to your budget, delivering maximum ROI and efficiency for your business."
    },
    {
      "id": 5,
      "title": "Faster Response",
      "desc": "Optimized performance and lightning-fast loading speeds to keep your users engaged without any delays."
    },
    {
      "id": 6,
      "title": "Cloud Support",
      "desc": "Seamless cloud integration ensuring your data is secure, highly accessible, and easily backed up at all times."
    }
  ];

  return (
    <div className="bg-[#f1f5f9] py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] text-center mb-12">Something You Need To Know</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userdata.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">{item.title}</h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Card;