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

    {/* Área de Conteúdo do Kanban*/}
    <main className="p-6 flex flex-col gap-6">
     {/* Caixa de chamada/infos*/}
     <div className="bg-white p-6 shadow-md rounded-lg flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao CRM Kanban V1.0 2026</h1>
      <p className="text-slate-600 ">Preencha os campos abaixo conforme sua necessidade:</p>
     </div>
     {/* Quadros do Kanban*/}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto items-start">
      {/* Coluna 1: A Fazer */}
      <div className="bg-slate-200/60 p-4 border border-slate-600 rounded-lg flex flex-col gap-3">
       <h2 className="text-2xl font-bold text-purple-600">A fazer</h2>
       {/* CARD 1 (Estático) */}
       <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-center">
         <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Alta Prioridade</span>
         <span className="text-xs text-slate-400">10 Set</span>
        </div>
        <h3 className="font-semibold text-slate-800 text-sm">Criar tela de Login</h3>
        <p className="text-xs text-slate-500 line-clamp-2">Montar os inputs de e-mail e senha utilizando flexbox e componentes responsivos.</p>
       </div>
      </div>
      {/* Coluna 2: Em Andamento */}
      <div className="bg-slate-200/60 p-4 border border-slate-600 rounded-lg flex flex-col gap-3">
       <h2 className="text-2xl font-bold text-purple-600">Em andamento</h2>
       {/* CARD 2 (Estático) */}
       <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-center">
         <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Em Progresso</span>
         <span className="text-xs text-slate-400">12 Set</span>
        </div>
        <h3 className="font-semibold text-slate-800 text-sm">Desenhar Quadro Kanban</h3>
        <p className="text-xs text-slate-500 line-clamp-2">Estruturar colunas flexíveis e cards estáticos com Tailwind CSS.</p>
       </div>
      </div>
      {/* Coluna 3: Concluído */}
      <div className="bg-slate-200/60 p-4 border border-slate-600 rounded-lg flex flex-col gap-3">
       <h2 className="text-2xl font-bold text-purple-600">Concluído</h2>
       {/* CARD 3 (Estático) */}
       <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-all cursor-pointer">
        <div className="flex justify-between items-center">
         <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Concluído</span>
         <span className="text-xs text-slate-400">05 Set</span>
        </div>
        <h3 className="font-semibold text-slate-800 text-sm">Configuração Inicial do Next.js</h3>
        <p className="text-xs text-slate-500 line-clamp-2">Instalação e limpeza dos arquivos padrão do framework.</p>
       </div>
      </div>
     </div>
    </main>
   </div>
  </div>
 )
}
