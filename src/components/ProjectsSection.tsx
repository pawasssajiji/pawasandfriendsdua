import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'ChatGPT',
    description: 'AI dari OpenAI saya gunakan agar mempermudah dalam belajar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  },
  {
    title: 'Gemini',
    description: 'AI dari Google yang saya gunakan ketika cht gpt tidak memuaskan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
  },
  {
    title: 'Google',
    description: 'Search engine terbesar di dunia untuk mencari berbagai informasi.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
];

export default function AICarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // 🔥 AUTO PLAY 4 DETIK
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          AI yang digunakan
        </h2>

        <div className="relative overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) next();
                if (info.offset.x > 50) prev();
              }}
              className="group relative p-6 glass rounded-2xl shadow-xl hover:scale-[1.02] transition"
            >

              {/* ✨ GOLD BACKLIGHT */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 blur-2xl rounded-2xl transition-opacity duration-300 group-hover:opacity-20" />

              <div className="relative z-10">

                {/* IMAGE */}
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center bg-black">
                  <img
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="h-20 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {projects[index].title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-muted-foreground">
                  {projects[index].description}
                </p>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* ⬅️ NAV */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          {/* ➡️ NAV */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight className="text-white" />
          </button>

        </div>
      </div>
    </section>
  );
}
