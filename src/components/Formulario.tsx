import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Formulario() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [servicio, setServicio] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-24 bg-[#1B5E20]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#A5D6A7] text-sm font-bold tracking-widest uppercase">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
              Contanos<br />
              <span className="text-[#4CAF50]">tu proyecto.</span>
            </h2>
            <p className="mt-6 text-[#A5D6A7] leading-relaxed text-lg">
              Completá el formulario con los datos básicos de tu proyecto.
              Sin compromiso — el primer paso es una charla.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: 'Planta habilitada', value: 'Matheu 4837, San Martín, PBA' },
                { label: 'Web', value: 'vegabundancia.com' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#4CAF50]">{item.label}</span>
                  <span className="text-white mt-1">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="bg-white/10 border border-[#4CAF50]/30 rounded-2xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-[#4CAF50]/30 flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-3xl text-[#4CAF50]">✓</span>
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3">¡Mensaje recibido!</h3>
                <p className="text-[#A5D6A7]">Nos ponemos en contacto a la brevedad.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 space-y-5 shadow-2xl"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wide uppercase text-gray-500">Nombre</label>
                    <input
                      required
                      type="text"
                      placeholder="Juan García"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wide uppercase text-gray-500">Empresa</label>
                    <input
                      required
                      type="text"
                      placeholder="Mi Marca S.A."
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wide uppercase text-gray-500">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="juan@mimarca.com"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wide uppercase text-gray-500">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="+54 11 1234-5678"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    />
                  </div>
                </div>

                {/* Servicio toggle */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-wide uppercase text-gray-500">Servicio de interés</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Tu Producto, Nuestra Planta', 'Desarrollo Llave en Mano'].map((s) => (
                      <motion.button
                        key={s}
                        type="button"
                        onClick={() => setServicio(s)}
                        whileTap={{ scale: 0.97 }}
                        className={`
                          text-sm font-semibold px-4 py-3 rounded-lg border transition-all duration-200 text-left
                          ${servicio === s
                            ? 'bg-[#1B5E20] text-white border-[#1B5E20]'
                            : 'border-gray-200 text-gray-600 hover:border-[#4CAF50]'
                          }
                        `}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wide uppercase text-gray-500">
                    Descripción del proyecto
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Contanos brevemente qué producto querés producir..."
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4CAF50] transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wide uppercase text-gray-500">
                    Volumen estimado <span className="normal-case font-normal text-gray-400">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: 500 kg/mes"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: '#2E7D32' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1B5E20] text-white font-bold py-4 rounded-lg text-base transition-colors duration-200"
                >
                  Enviar proyecto →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
