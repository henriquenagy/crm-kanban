import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

export default function Home() {
 return (
  <div className="flex min-h-screen bg-slate-100">
   {/* A div acima é o conteiner pai (Tela inteira) */}
   {/* Primeiro chama o sidebar abaixo, que é o Menu Lateral */}
   <Sidebar />

   {/* Conteúdo Principal, tudo que fica ao lado direito do sidebar (header e o conteúdo do meio).flex-1 meaning ocupar todo o espaço que sobrou na largura da tela */}
   <div className="flex-1 flex flex-col">
    {/* Cabeçalho. Não tem altura e nem largura definida, ele puxa da div pai acima a largura e a altura é tipo fit-content com padding somente */}
    <Header />

    {/* Bloco Inferior: Área de Conteúdo, onde ficará o Kanban no futuro */}
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
