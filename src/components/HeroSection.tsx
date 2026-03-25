import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white py-20 lg:py-0">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT: PHOTO WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Glow belakang */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/50 via-yellow-400/50 to-white/30 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            {/* Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-300 via-white/50 to-yellow-200 opacity-50"
            ></motion.div>

            {/* Photo Circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 shadow-2xl">
              <img
                src="/FAWAS.jpg"
                alt="fawwaz"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-700 transform hover:scale-105"
              />
            </div>

            {/* Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-[#1a1a1a] p-4 rounded-2xl border border-white/10 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَ
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: TEXT */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            Muhammad Fawwaz Azizi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-200"></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            "Kerja keras tidak pernah membunuhmu, tapi malas akan perlahan menghancurkan mimpimu."
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-bold transition-all shadow-lg shadow-yellow-400/25 active:scale-95"
            >
              Hasil Kerja
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all active:scale-95"
            >
              Hubungi Saya
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-6"
          >
            {[ 
              { Icon: Github, link: "https://github.com/pawasssajiji" },
              { Icon: Instagram, link: "https://www.instagram.com/fwwazz_/?hl=id" },
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-400 transition-all transform hover:scale-110"
              >
                <item.Icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-500 hover:text-yellow-400 transition-colors"
        onClick={() => scrollToSection('#about')}
      >
        <ArrowDown size={28} />
      </motion.div>
    </section>
  );
}
