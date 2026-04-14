export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <img src="/logo-pbf.png" alt="Plant Based Foods S.A." className="h-10 brightness-0 invert opacity-70" />
        <div className="text-center sm:text-right text-sm text-gray-500 space-y-1">
          <p className="text-gray-300 font-medium">Plant Based Foods S.A.</p>
          <p>Medave SRL — Matheu 4837, San Martín, PBA</p>
          <a
            href="https://vegabundancia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4CAF50] hover:underline"
          >
            vegabundancia.com
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
        © 2026 Plant Based Foods S.A. — Todos los derechos reservados.
      </div>
    </footer>
  )
}
