import { motion } from 'framer-motion'

const clientes = [
  'VIVET',
  'FRANCH',
  'AMARANTA',
  'ONGO',
  'OTRO VIAJE',
  'BIO MICELIO',
  'VEG ABUNDANCIA',
  'VIA VEG',
  'WANNA V BURGER',
]

// Duplicate for seamless loop
const tickerItems = [...clientes, ...clientes, ...clientes]

export default function ClientesTicker() {
  return (
    <section className="bg-[#1A1A1A] py-10 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-500">
          Confían en nosotros
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-0 whitespace-nowrap"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {tickerItems.map((cliente, i) => (
            <span key={`${cliente}-${i}`} className="inline-flex items-center">
              <span className="text-sm font-black tracking-widest text-gray-400 hover:text-white transition-colors duration-200 px-8 cursor-default">
                {cliente}
              </span>
              <span className="text-[#4CAF50]/40 text-lg">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
