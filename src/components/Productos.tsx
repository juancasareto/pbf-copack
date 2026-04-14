import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const productos = [
  {
    name: 'Milanesas rebozadas',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
    dev: false,
  },
  {
    name: 'Nuggets rebozados',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80',
    dev: false,
  },
  {
    name: 'Medallones 90–120 gr',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
    dev: false,
  },
  {
    name: 'Albóndigas y formados esféricos',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    dev: false,
  },
  {
    name: 'Embutidos',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92a03a05?w=600&q=80',
    dev: true,
  },
  {
    name: 'Nuevos rebozados manuales',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&q=80',
    dev: true,
  },
]

export default function Productos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <section id="productos" className="py-24 bg-[#1B5E20]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase">Línea de producción</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
            Fabricamos lo que el mercado<br />
            <span className="text-[#4CAF50]">plant-based más pide.</span>
          </h2>
          <p className="mt-4 text-lg text-[#A5D6A7] max-w-xl">
            Productos 100% plant-based y certificados sin TACC, elaborados en nuestra planta habilitada.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productos.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09, ease: 'easeOut' }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default"
            >
              {p.dev ? (
                /* Placeholder para productos en desarrollo */
                <div className="w-full h-full bg-[#1B5E20]/20 border-2 border-dashed border-[#4CAF50]/30 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#4CAF50]/40 flex items-center justify-center">
                    <span className="text-[#4CAF50]/60 text-xl">+</span>
                  </div>
                  <span className="text-[#4CAF50]/50 text-xs font-bold tracking-widest uppercase">Próximamente</span>
                </div>
              ) : (
                <>
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </>
              )}

              {/* Dev badge */}
              {p.dev && (
                <div className="absolute top-3 right-3 bg-[#4CAF50]/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  En desarrollo
                </div>
              )}

              {/* Name */}
              <div className={`absolute bottom-0 left-0 right-0 p-5 ${p.dev ? '' : ''}`}>
                <h3 className={`font-bold text-base leading-snug ${p.dev ? 'text-[#4CAF50]/70' : 'text-white'}`}>{p.name}</h3>
              </div>

              {/* Hover shine — solo en productos activos */}
              {!p.dev && (
                <motion.div
                  className="absolute inset-0 bg-[#4CAF50]/0 group-hover:bg-[#4CAF50]/10 transition-colors duration-300"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-white/5 border border-[#4CAF50]/30 rounded-3xl p-10 md:p-14 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
            ¿Tenés un producto diferente?
          </h3>
          <p className="mt-4 text-[#A5D6A7] text-lg max-w-xl mx-auto">
            Evaluamos cada proyecto de forma individual. Contanos qué querés producir y vemos cómo hacerlo.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04, backgroundColor: '#43A047' }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 bg-[#4CAF50] text-white font-black px-10 py-4 rounded-xl text-lg transition-colors duration-200"
          >
            Consultanos tu proyecto →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
