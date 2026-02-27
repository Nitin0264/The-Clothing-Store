import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap, ShieldCheck } from 'lucide-react';

const BentoPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Exclusive Collection 2026
        </h1>
        <p className="text-slate-400 mt-2">Precision engineered for the modern explorer.</p>
      </header>

      {/* Main Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
        
        {/* Large Featured Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 md:row-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold">Flagship</span>
              <h2 className="text-5xl font-black mt-4">NeoVibe <br/> Pro Max</h2>
            </div>
            <button className="flex items-center gap-2 bg-white text-black w-fit px-6 py-3 rounded-full font-bold hover:bg-indigo-400 hover:text-white transition-all">
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" 
            className="absolute top-0 right-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0"
            alt="Product"
          />
        </motion.div>

        {/* Medium Detail Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 flex flex-col justify-between"
        >
          <Zap className="text-yellow-300" size={40} fill="currentColor" />
          <div>
            <h3 className="text-2xl font-bold">Ultra-Fast Sync</h3>
            <p className="text-indigo-100 text-sm">Experience zero latency with our 2026 HyperLink chipset.</p>
          </div>
        </motion.div>

        {/* Small Stats Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
          <Star className="text-orange-400 mb-2" fill="currentColor" />
          <span className="text-3xl font-bold italic">4.9/5</span>
          <p className="text-slate-500 text-xs uppercase tracking-widest">User Rating</p>
        </div>

        {/* Feature List Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <ShieldCheck className="text-emerald-400" size={18} /> 2-Year Warranty
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <Zap className="text-indigo-400" size={18} /> Eco-Materials
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default BentoPage;