import React from 'react'

const values = [
  {
    name: 'Quality first',
    desc: 'Every piece is reviewed for fabric, finish, and fit before it ever reaches your cart.',
  },
  {
    name: 'Inclusive sizing',
    desc: 'Style is for everyone. We offer a wide size range so you always find your perfect fit.',
  },
  {
    name: 'Easy returns',
    desc: 'Not right? No stress. Our return process is quick, fair, and hassle-free.',
  },
]

const team = [
  { initial: 'N', name: 'Nitin', role: 'Founder & Curator' },
  { initial: 'A', name: 'Aman', role: 'Head of Styling' },
  { initial: 'R', name: 'Rahul', role: 'Customer Experience' },
]

function About() {
  return (
    <div className="font-sans">

      {/* Hero */}
      <div className="grid grid-cols-2 border-b border-gray-200 min-h-[380px]">
        <div className="flex flex-col justify-center px-10 py-12">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            Est. 2024 · Crafted with care
          </p>
          <h1 className="font-serif text-5xl font-normal leading-tight mb-5">
            Wear what <em className="text-gray-400">feels</em><br />like you
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            We believe clothing is more than fabric — it's identity, expression, and confidence.
            Every piece is chosen to help you feel exactly like yourself, every single day.
          </p>
        </div>
        <div className="bg-gray-50 flex items-center justify-center">
          {/* Decorative clothing SVG */}
          <svg width="220" height="260" viewBox="0 0 220 260" fill="none">
            <rect x="60" y="0" width="100" height="140" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5"/>
            <path d="M60 20 Q30 30 10 60 L40 80 Q55 55 60 45" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5"/>
            <path d="M160 20 Q190 30 210 60 L180 80 Q165 55 160 45" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5"/>
            <rect x="55" y="140" width="110" height="100" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5"/>
            <line x1="110" y1="0" x2="110" y2="50" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4 3"/>
            <circle cx="110" cy="20" r="14" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-b border-gray-200">
        {[['500+', 'Styles available'], ['10k+', 'Happy customers'], ['100%', 'Quality checked']].map(([num, label], i) => (
          <div key={i} className={`px-10 py-8 ${i < 2 ? 'border-r border-gray-200' : ''}`}>
            <p className="font-serif text-4xl font-normal mb-1">{num}</p>
            <p className="text-sm text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-2 border-b border-gray-200">
        <div className="px-10 py-10 border-r border-gray-200 flex items-start gap-3">
          <span className="text-xs text-gray-300 font-serif mt-0.5">01</span>
          <span className="text-xs font-medium uppercase tracking-widest">Our story</span>
        </div>
        <div className="px-10 py-10 text-sm text-gray-500 leading-relaxed">
          We started with a simple idea — great clothing shouldn't be complicated to find. Born from a passion
          for style and simplicity, we curate pieces that balance trend with timelessness. From everyday casuals
          to standout statement pieces, everything we carry is something we'd wear ourselves.
        </div>
      </div>

      {/* Our Promise */}
      <div className="grid grid-cols-2 border-b border-gray-200">
        <div className="px-10 py-10 border-r border-gray-200 flex items-start gap-3">
          <span className="text-xs text-gray-300 font-serif mt-0.5">02</span>
          <span className="text-xs font-medium uppercase tracking-widest">Our promise</span>
        </div>
        <div className="px-10 py-10 text-sm text-gray-500 leading-relaxed">
          Every order matters to us. We're committed to fair pricing, thoughtful curation, and fast delivery —
          so you can spend less time shopping and more time living. When something doesn't fit, we make it easy to sort out.
        </div>
      </div>

      {/* Values */}
      <div className="px-10 py-12 border-b border-gray-200">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">What drives us</p>
        <div className="grid grid-cols-3">
          {values.map((v, i) => (
            <div key={i} className={`pr-8 ${i < 2 ? 'border-r border-gray-200 mr-8' : ''}`}>
              <p className="text-sm font-medium mb-2">{v.name}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="px-10 py-12 border-b border-gray-200">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="font-serif text-2xl font-normal">The people behind it</h2>
          <span className="text-sm text-gray-400">Small team, big heart</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {team.map((m, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-serif text-lg text-gray-600">
                {m.initial}
              </div>
              <div>
                <p className="text-sm font-medium">{m.name}</p>
                <p className="text-xs text-gray-400">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-10 py-10 flex items-center justify-between">
        <p className="font-serif text-2xl italic text-gray-400">"Dress for the life you want."</p>
        <button
          onClick={() => window.location.href = '/collection'}
          className="px-7 py-3 bg-black text-white text-xs tracking-widest uppercase rounded-md hover:opacity-75 transition-opacity"
        >
          Shop the collection
        </button>
      </div>

    </div>
  )
}

export default About