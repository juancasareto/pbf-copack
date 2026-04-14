import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lock, TrendingUp, FlaskConical, Truck, ClipboardCheck, Users } from 'lucide-react'

const items = [
  {
    icon: Lock,
    title: 'Confidencialidad garantizada',
    desc: 'Tu fórmula es tuya. Firmamos acuerdos de confidencialidad antes de cualquier conversación técnica.',
  },
  {
    icon: TrendingUp,
    title: 'Mínimos de producción bajos',
    desc: 'Ideal para marcas medianas y chicas que necesitan escalar sin comprometer capital.',
  },
  {
    icon: FlaskConical,
    title: 'Equipo propio de I+D',
    desc: 'Formulamos, ajustamos y validamos en laboratorio. Sin tercerizar el conocimiento.',
  },
  {
    icon: ClipboardCheck,
    title: 'Gestión regulatoria completa',
    desc: 'Cartas cruzadas y registro RNPA ante DIPA. Te acompañamos en todo el proceso.',
  },
  {
    icon: Users,
    title: 'Especialización exclusiva',
    desc: '100% plant-based y sin TACC. No fabricamos otra cosa — eso elimina contaminación cruzada.',
  },
  {
    icon: Truck,
    title: '20 tn/mes de capacidad',
    desc: 'Planta operativa en San Martín, PBA. Despacho con remito en 48hs máximo.',
  },
]

export default function Diferenciales() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="diferenciales" className="py-24 bg-[#F5F5F0]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase">Por qué nosotros</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B5E20] mt-3 leading-tight">
            Especialización exclusiva.<br />
            <span className="text-[#1A1A1A]">Sin contaminación cruzada. Sin vueltas.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group hover:border-[#4CAF50]/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4 group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                  <Icon size={20} className="text-[#2E7D32]" />
                </div>
                <h3 className="font-bold text-[#1B5E20] text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
