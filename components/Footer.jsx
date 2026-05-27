export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#B8860B] text-xs tracking-[0.3em] mb-2">SINCE 2000</p>
        <p className="text-[#B8860B] font-bold text-xl mb-2">TAIPEI FAST FOOD CENTER</p>
        <p className="text-gray-400 text-sm">Authentic Chinese & Asian Fast Food</p>
        <div className="mt-6 pt-6 border-t border-gray-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} Taipei Fast Food Center. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
