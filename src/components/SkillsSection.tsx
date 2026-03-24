import { motion } from 'framer-motion';
import { Globe, User, Heart } from 'lucide-react';

const skills = {
  Sosial: [
    { name: 'Emotion', level: 75 },
    { name: 'Friendly', level: 99 },
    { name: 'Impact', level: 90 },
  ],
  Personality: [
    { name: 'Wise', level: 90 },
    { name: 'Manage money', level: 85 },
    { name: 'Kindness', level: 50 },
  ],
  Love: [
    { name: 'Games', level: 95 },
    { name: 'Learn', level: 80 },
    { name: 'Her', level: 100 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_12px_rgba(255,215,0,0.8)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-medium mb-2 block">Kemampuan</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills &amp; Hobbies
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">

          {/* CARD TEMPLATE */}
          {[ 
            { title: 'Sosial', icon: Globe, data: skills.Sosial },
            { title: 'Personality', icon: User, data: skills.Personality },
            { title: 'Love', icon: Heart, data: skills.Love },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 glass rounded-2xl shadow-card hover:shadow-xl transition-all h-full flex flex-col justify-between border border-yellow-400/10"
            >

              {/* 🔥 GOLD GLOW BACKLIGHT */}
              <motion.div
                className="absolute inset-0 bg-yellow-400 opacity-10 blur-2xl rounded-2xl"
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* CONTENT */}
              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-yellow-400/10">
                    <section.icon className="h-6 w-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-yellow-400">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {section.data.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={index * 0.1}
                    />
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
