export default function Sidebar() {
 return (
  <aside className="w-42.5 md:w-fit bg-linear-to-r from-purple-600 to-purple-700 text-white min-h-screen p-4 flex flex-col justify-between">
   <div>
    <p className="text-2xl font-bold text-white mb-8 px-2">CRM Kanban</p>
    <nav className="flex flex-col gap-2">
     <a href="#" className="px-4 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-600 transition">
      Quadro Kanban
     </a>
     <a href="#" className="px-4 py-2 rounded-lg text-neutral-100 hover:bg-slate-800 hover:text-white transition">
      Clientes
     </a>
     <a href="#" className="px-4 py-2 rounded-lg text-neutral-100 hover:bg-slate-800 hover:text-white transition">
      Configurações
     </a>
    </nav>
   </div>
   <p className="text-xs text-neutral-200 px-2">v1.0 - Projeto 2026</p>
  </aside>
 )
}
