import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

export default function Home() {
 return (
  <div className="flex min-h-screen bg-gray-100">
   {/* Menu Lateral */}
   <Sidebar />

   {/* Conteúdo Principal */}
   <div className="flex-1 flex flex-col">
    {/* Cabeçalho */}
    <Header />

    {/* Área onde ficará o Kanban no futuro */}
    <main className="p-6">
     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao CRM</h1>
      <p className="text-gray-600 mt-2">Seu layout base está pronto. As colunas do Kanban serão construídas aqui!</p>
     </div>
    </main>
   </div>
  </div>
 )
}
