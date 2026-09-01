import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

export default function Home() {
 return (
  <div className="flex min-h-screen bg-slate-100">
   {/* Menu Lateral */}
   <Sidebar />

   {/* Conteúdo Principal */}
   <div className="flex-1 flex flex-col">
    {/* Cabeçalho */}
    <Header />

    {/* Área onde ficará o Kanban no futuro */}
    <main className="p-6">
     <div className="bg-white p-6 shadow-md rounded-lg flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao CRM Kanban V1.0 2026</h1>
      <p className="text-slate-600 ">Ainda estamos em construção. Aguarde...</p>
     </div>
    </main>
   </div>
  </div>
 )
}
