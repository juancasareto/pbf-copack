import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pasos = [
  {
    n: '01',
    title: 'Formulario inicial',
    desc: 'Completás el RG CP 01 con los datos de tu proyecto. Sin compromiso.',
  },
  {
    n: '02',
    title: 'Reunión de evaluación',
    desc: 'Análisis de factibilidad conjunto. Revisamos tu producto, volumen y plazos.',
  },
  {
    n: '03',
    title: 'Prueba piloto',
    desc: 'Producción en planta Medave SRL. Costo según tamaño de batch.',
  },
  {
    n: '04',
    title: 'Validación de fórmula',
    desc: 'Análisis de laboratorio y ajustes del producto hasta dar con el estándar.',
  },
  {
    n: '05',
    title: 'Gestión regulatoria',
    desc: 'Cartas cruzadas y registro RNPA ante DIPA. Nosotros lo manejamos.',
  },
  {
    n: '06',
    title: 'Primera producción',
    desc: 'Coordinación con 21 días hábiles de anticipación. Sin sorpresas.',
  },
  {
    n: '07',
    title: 'Despacho',
    desc: 'Entrega con remito al transportista del cliente. Máximo 48hs.',
  },
]

export default function Proceso() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proceso" className="py-24 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase">Proceso de trabajo</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
            Un proceso claro,<br />
            <span className="text-[#4CAF50]">de principio a fin.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl">
            Sabés exactamente en qué etapa está tu proyecto en todo momento.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#4CAF50] via-[#4CAF50]/30 to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            style={{ originY: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
          />

          <div className="space-y-4">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.n}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-6 group"
              >
                <motion.div
                  className="shrink-0 w-14 h-14 rounded-full border border-[#4CAF50]/40 bg-[#4CAF50]/10 flex items-center justify-center"
                  whileHover={{ borderColor: '#4CAF50', backgroundColor: 'rgba(76,175,80,0.25)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#4CAF50] font-black text-sm">{paso.n}</span>
                </motion.div>

                <motion.div
                  className="flex-1 bg-white/5 border border-white/5 rounded-xl px-6 py-4"
                  whileHover={{ borderColor: 'rgba(76,175,80,0.3)', backgroundColor: 'rgba(255,255,255,0.07)' }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-bold text-white text-base">{paso.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{paso.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
