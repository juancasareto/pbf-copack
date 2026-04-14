import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, Lightbulb, CheckCircle } from 'lucide-react'

const tracks = [
  {
    id: 'tu-producto',
    icon: Package,
    tag: 'Track A',
    title: 'Tu Producto,\nNuestra Planta',
    description: 'Ya tenés tu fórmula. Nosotros la producimos, envasamos y despachamos.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    items: [
      'Transformación de materias primas en producto terminado',
      'Envasado primario y secundario',
      'Expedición desde planta con remito',
      'Trazabilidad e informes de rendimientos/mermas',
      'Cartas cruzadas para registro ante DIPA',
      'Opcional: desarrollo de proveedores y compra de MP',
    ],
    accent: '#4CAF50',
  },
  {
    id: 'llave-en-mano',
    icon: Lightbulb,
    tag: 'Track B',
    title: 'Desarrollo\nLlave en Mano',
    description: 'Tenés una idea, nosotros la formulamos, registramos y producimos.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    items: [
      'Formulación del producto',
      'Gestión de registros ante DIPA (RNPA)',
      'Desarrollo de proveedores',
      'Asesoramiento en diseño e industrial',
      'Producciones piloto y análisis de laboratorio',
      'Producción en planta propia',
    ],
    accent: '#2E7D32',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.18, ease: 'easeOut' as const },
  }),
}

export default function Servicios() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="py-24 bg-[#F5F5F0]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#4CAF50] text-sm font-bold tracking-widest uppercase">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B5E20] mt-3 leading-tight">
            ¿Ya tenés tu fórmula?<br />
            <span className="text-[#1A1A1A]">¿O estás empezando desde cero?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-lg">
            Elegí el que se adapta a tu momento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, i) => {
            const Icon = track.icon
            return (
              <motion.div
                key={track.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: track.accent + '30', border: `1px solid ${track.accent}50` }}
                    >
                      <Icon size={18} style={{ color: track.accent }} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">{track.tag}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#1B5E20] leading-tight whitespace-pre-line mb-2">
                    {track.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed text-sm">{track.description}</p>

                  <ul className="space-y-2.5">
                    {track.items.map((item) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: track.accent }} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 font-bold text-sm transition-colors duration-200 hover:gap-3"
                      style={{ color: track.accent }}
                    >
                      Me interesa este servicio →
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
