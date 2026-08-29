export default function Sidebar() {
 return (
  <aside className="w-64 bg-linear-to-r from-purple-600 to-purple-700 text-white min-h-screen p-4 flex flex-col justify-between">
   <div>
    <div className="text-2xl font-bold text-neutral-50 mb-8 px-2">CRM Kanban</div>
    <nav className="flex flex-col gap-2">
     <a href="#" className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition">
      📊 Quadro Kanban
     </a>
     <a href="#" className="px-4 py-2 rounded-lg text-neutral-100 hover:bg-gray-800 hover:text-white transition">
      👥 Clientes
     </a>
     <a href="#" className="px-4 py-2 rounded-lg text-neutral-100 hover:bg-gray-800 hover:text-white transition">
      ⚙️ Configurações
     </a>
    </nav>
   </div>
   <div className="text-xs text-neutral-200 px-2">v1.0 - Projeto 2026</div>
  </aside>
 )
}
