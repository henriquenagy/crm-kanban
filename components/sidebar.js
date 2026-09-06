'use client'
import { useState } from 'react'

export default function Sidebar() {
 const [isOpen, setIsOpen] = useState(true)

 return (
  <aside className={`${isOpen ? 'w-50 md:w-64' : 'w-20'} bg-linear-to-r from-purple-600 to-purple-700 text-white min-h-screen p-4 flex flex-col justify-between transition-all duration-300 relative`}>
   <div>
    {/* Cabeçalho da Sidebar + Botão com a Seta */}
    <div className="flex items-center justify-between mb-8 px-2">
     {isOpen && <p className="text-xl font-bold text-white whitespace-nowrap">CRM Kanban</p>}

     <button onClick={() => setIsOpen(!isOpen)} className="px-2 py-1 rounded-lg bg-slate-800/60 hover:bg-slate-600/80 text-white transition cursor-pointer" title={isOpen ? 'Recolher Menu' : 'Expandir Menu'}>
      {/* Ícone simples em texto/seta que funciona no mobile e desktop */}
      {isOpen ? '<' : '>'}
     </button>
    </div>

    {/* Navegação */}
    <nav className="flex flex-col gap-2">
     <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-900/40 text-white font-medium hover:bg-slate-900/60 transition">
      <span>📊</span>
      {isOpen && <span className="whitespace-nowrap">Quadro Kanban</span>}
     </a>

     <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-purple-100 hover:bg-purple-800/50 hover:text-white transition">
      <span>👥</span>
      {isOpen && <span className="whitespace-nowrap">Clientes</span>}
     </a>

     <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-purple-100 hover:bg-purple-800/50 hover:text-white transition">
      <span>⚙️</span>
      {isOpen && <span className="whitespace-nowrap">Configurações</span>}
     </a>
    </nav>
   </div>

   {/* Rodapé da Sidebar */}
   <div className="px-2">{isOpen ? <p className="text-xs text-purple-200">v1.0 - Projeto 2026</p> : <p className="text-xs text-purple-200 text-center">v1.0</p>}</div>
  </aside>
 )
}
