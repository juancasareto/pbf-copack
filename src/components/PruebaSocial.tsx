import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const clientes = ['VIVET', 'FRANCH', 'AMARANTA', 'ONGO', 'OTRO VIAJE', 'BIO MICELIO']

const marcasPropias = [
  {
    name: 'Veg Abundancia',
    productos: 'Falafel, bocaditos, milanesas de berenjena, medallones',
  },
  {
    name: 'Via Veg',
    productos: 'Medallones y milanesas de legumbres y soja',
  },
  {
    name: 'Wanna V Burger',
    productos: 'Hamburguesas, carne picada, milanesas, empanadas, albóndigas',
  },
]

export default function PruebaSocial() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clientes" className="py-24 bg-[#F5F5F0]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase">Prueba social</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B5E20] mt-3 leading-tight">
            Ya confían en nosotros.
          </h2>
        </motion.div>

        {/* Clientes actuales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">Clientes actuales</p>
          <div className="flex flex-wrap gap-3">
            {clientes.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="bg-white border border-gray-200 text-[#1B5E20] font-bold text-sm px-5 py-2.5 rounded-full shadow-sm"
              >
                {c}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + clientes.length * 0.07 }}
              className="bg-white border border-dashed border-gray-300 text-gray-400 text-sm px-5 py-2.5 rounded-full"
            >
              entre otros
            </motion.span>
          </div>
        </motion.div>

        {/* Marcas propias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">
            Marcas propias elaboradas en planta
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {marcasPropias.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-black text-[#1B5E20] text-lg mb-2">{m.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.productos}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
