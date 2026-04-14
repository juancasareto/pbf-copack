import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(27,94,32,0)', 'rgba(27,94,32,0.97)'])
  const shadow = useTransform(scrollY, [0, 80], ['0 0 0 rgba(0,0,0,0)', '0 4px 24px rgba(0,0,0,0.3)'])

  return (
    <motion.header
      style={{ backgroundColor: bg, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo-pbf.png" alt="Plant Based Foods S.A." className="h-14 brightness-0 invert" />
        </motion.a>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 hidden sm:block"
        >
          Hablemos →
        </motion.a>
      </div>
    </motion.header>
  )
}
