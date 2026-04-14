import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '20 tn', label: 'capacidad mensual' },
  { value: '100%', label: 'plant-based & sin TACC' },
  { value: 'BPM', label: 'operarios calificados' },
  { value: 'RNPA', label: 'gestión regulatoria' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1B5E20]">

      {/* Parallax background image */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/60 via-[#1B5E20]/70 to-[#1B5E20]" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#4CAF50 1px, transparent 1px), linear-gradient(90deg, #4CAF50 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top accent bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-[#4CAF50] z-10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Logo — grande */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo-pbf.png`}
            alt="Plant Based Foods S.A."
            className="h-32 md:h-40 brightness-0 invert"
          />
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#4CAF50]/20 border border-[#4CAF50]/40 text-[#A5D6A7] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Producción a fasón · Plant-Based · Sin TACC
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight max-w-4xl"
        >
          Tu producto,{' '}
          <motion.span
            className="text-[#4CAF50]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            nuestra planta.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-[#A5D6A7] max-w-2xl leading-relaxed"
        >
          Fabricación a fasón de productos plant-based y libres de gluten.
          Capacidad operativa de{' '}
          <strong className="text-white">20 toneladas mensuales</strong>{' '}
          en planta habilitada en San Martín, PBA.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-12 flex flex-wrap gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-3xl md:text-4xl font-black text-[#4CAF50]">{stat.value}</span>
              <span className="text-xs text-[#A5D6A7] uppercase tracking-widest mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03, backgroundColor: '#43A047' }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#4CAF50] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-block"
          >
            Hablemos de tu proyecto →
          </motion.a>
          <motion.a
            href="#servicios"
            whileHover={{ borderColor: '#4CAF50', color: '#fff' }}
            className="border border-[#4CAF50]/50 text-[#A5D6A7] font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-block"
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A5D6A7]/60 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#4CAF50] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
