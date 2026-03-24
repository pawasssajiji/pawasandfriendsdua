import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  const stats = [
    { icon: Code2, value: '1+', label: 'Projects Selesai' },
    { icon: Video, value: '10h/day', label: 'Waktu Gaming' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO / ICON */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="relative">
    <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card relative">

      {/* BACKLIGHT GOLD */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/40 to-yellow-600/30 blur-3xl"></div>

      {/* FOTO LO */}
      <img
        src="/public/gambar2.jpg"
        alt="Foto Saya"
        className="relative w-full h-full object-cover rounded-2xl shadow-lg"
      />

    </div>

    <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
      <p className="font-display font-bold text-2xl text-gradient">Pemula</p>
      <p className="text-sm text-muted-foreground">Pengalaman</p>
    </div>
  </div>
</motion.div>


          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* ACCORDION PROFIL */}
            <div className="space-y-4">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full p-4 glass rounded-xl hover:shadow-card transition"
              >
                <span className="font-display text-lg font-semibold">
                  Profil Pribadi
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: open ? 'auto' : 0,
                  opacity: open ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground leading-relaxed p-4">
                  Anak di samping ini adalah saya, yg lahir pada tanggal 24 bulan desember tahun 2009, Saya sekarang adalah siswa kelas 10-2 di MAN Model dan tinggal di Banda Aceh tepatnya di Lampriet. Saya termasuk orang yang aktif, mudah bergaul, dan suka berteman dengan siapa saja. Saya juga senang mencoba hal-hal baru

                  <br /><br />

                  Saat ini saya sedang mulai belajar coding dan ingin terus berkembang. Walaupun masih pemula, saya punya semangat untuk terus belajar setiap hari.

                  <br /><br />

                  Ke depannya, saya ingin menjadi orang yang sukses dan bisa memberikan manfaat bagi banyak orang.
                </p>
              </motion.div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
