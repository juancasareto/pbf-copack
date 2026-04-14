import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const marcas = [
  {
    name: 'Veg Abundancia',
    tagline: 'Falafel, bocaditos, milanesas de berenjena y medallones.',
    color: '#2E7D32',
    textColor: '#fff',
    url: 'https://vegabundancia.com',
    urlDisplay: 'vegabundancia.com',
    logo: null,
  },
  {
    name: 'Via Veg',
    tagline: 'Medallones y milanesas de legumbres y soja.',
    color: '#1B5E20',
    textColor: '#fff',
    url: 'https://viaveg.com.ar',
    urlDisplay: 'viaveg.com.ar',
    logo: '/logo-viaveg.png',
  },
  {
    name: 'Wanna V Burger',
    tagline: 'Hamburguesas, milanesas, empanadas y albóndigas.',
    color: '#4CAF50',
    textColor: '#fff',
    url: null,
    urlDisplay: null,
    logo: null,
  },
]

export default function MarcasPropias() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="marcas" className="py-24 bg-[#F5F5F0]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase">Marcas propias</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B5E20] mt-3 leading-tight">
            ¿Ya conocés nuestros productos?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Elaboramos nuestras propias marcas en la misma planta. Podés conocerlas y encontrarlas en el mercado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {marcas.map((marca, i) => (
            <motion.div
              key={marca.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: marca.color }}
            >
              <div className="p-8 flex flex-col h-full min-h-[240px]">
                {/* Logo or name */}
                {marca.logo ? (
                  <div className="mb-6 h-12 flex items-center">
                    <img
                      src={marca.logo}
                      alt={marca.name}
                      className="h-12 object-contain"
                    />
                  </div>
                ) : (
                  <h3 className="font-black text-white text-2xl mb-6 leading-tight">{marca.name}</h3>
                )}

                <p className="text-white/80 text-sm leading-relaxed flex-1">{marca.tagline}</p>

                {marca.url && (
                  <motion.a
                    href={marca.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-1.5 mt-6 text-white font-bold text-sm border-b border-white/40 hover:border-white pb-0.5 transition-colors w-fit"
                  >
                    {marca.urlDisplay}
                    <ArrowUpRight size={14} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
