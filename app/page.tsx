'use client' // Diretiva do Next.js (App Router): obrigatória para componentes que usam Hooks e interações do lado do cliente

import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import { useState } from 'react'

export default function Home() {
 // =========================================================================
 // 1. ESTADO DA APLICAÇÃO (ARRAY DE OBJETOS SIMULANDO O BANCO DE DADOS)
 // Guarda a lista de tarefas. Na Semana 3 e 4, novas tarefas serão adicionadas
 // e alteradas dentro deste estado através da função setTarefas.
 // =========================================================================
 const [tarefas, setTarefas] = useState([
  {
   id: 1,
   titulo: 'Criar tela de Login',
   status: 'A fazer',
   prioridade: 'Alta prioridade',
   bgColor: 'bg-amber-100',
   txtColor: 'text-amber-700'
  },
  {
   id: 2,
   titulo: 'Desenhar Quadro Kanban',
   status: 'Em andamento',
   prioridade: 'Em Progresso',
   bgColor: 'bg-blue-100',
   txtColor: 'text-blue-700'
  },
  {
   id: 3,
   titulo: 'Configuração Inicial do Next.js',
   status: 'Concluído',
   prioridade: 'Completo',
   bgColor: 'bg-emerald-100',
   txtColor: 'text-emerald-700'
  }
 ])

 return (
  // =========================================================================
  // 2. ESTRUTURA PRINCIPAL DO LAYOUT (CONTAINER PAI TELA CHEIA)
  // - min-h-screen: Força a div a ter no mínimo 100% da altura da tela.
  // - flex: Alinha o Sidebar (esquerda) e a Área Principal (direita) lado a lado.
  // =========================================================================
  <div className="flex min-h-screen bg-slate-100">
   {/* ---------------------------------------------------------------------
          [BLOCO 1]: MENU LATERAL (SIDEBAR)
          Componente isolado da barra lateral com recolhimento responsivo.
         --------------------------------------------------------------------- */}
   <Sidebar />

   {/* ---------------------------------------------------------------------
          [BLOCO 2]: ÁREA DIREITA DA TELA (HEADER + CONTEÚDO PRINCIPAL)
          - flex-1: Faz este bloco ocupar todo o espaço restante de largura.
          - flex flex-col: Empilha o Header no topo e o Main logo abaixo.
         --------------------------------------------------------------------- */}
   <div className="flex-1 flex flex-col">
    {/* CABEÇALHO SUPERIOR (HEADER) */}
    <Header />

    {/* -------------------------------------------------------------------
            [BLOCO 3]: CONTEÚDO PRINCIPAL DA PÁGINA (MAIN)
            Espaço onde as informações do Dashboard/Kanban são exibidas.
           ------------------------------------------------------------------- */}
    <main className="p-6 flex flex-col gap-6">
     {/* CAIXA DE MENSAGEM / BOAS-VINDAS */}
     <div className="bg-white p-6 shadow-md rounded-lg flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao CRM Kanban V1.0 2026</h1>
      <p className="text-slate-600">Preencha os campos abaixo conforme sua necessidade:</p>
     </div>

     {/* -----------------------------------------------------------------
              [BLOCO 4]: QUADROS DO KANBAN (CONTAINER DAS COLUNAS EM GRID)
              - grid-cols-1: Exibe 1 coluna em telas mobile.
              - md:grid-cols-3: Exibe 3 colunas lado a lado a partir do tamanho médio (768px).
             ----------------------------------------------------------------- */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto items-stretch">
      {/* 
                ==============================================================
                MÉTODO .MAP(): RENDEREIZAÇÃO DINÂMICA
                Percorre cada item do array 'tarefas' no useState e constrói a
                interface do card correspondente automaticamente.
                ==============================================================
            */}
      {tarefas.map(tarefa => (
       <div
        key={tarefa.id} // Propriedade obrigatória do React para identificação única de cada item na lista
        className="bg-slate-200/60 p-4 border border-slate-600 rounded-lg flex flex-col gap-3"
       >
        {/* TÍTULO DO STATUS DA COLUNA (Puxado do objeto: tarefa.status) */}
        <h2 className="text-2xl font-bold text-purple-600">{tarefa.status}</h2>

        {/* CORPO DO CARD DE TAREFA */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-all cursor-pointer">
         {/* LINHA SUPERIOR DO CARD: ETAPAS DE PRIORIDADE E DATA */}
         <div className="flex justify-between items-center">
          {/* 
                        INTERPOLAÇÃO DE CLASSES TAILWIND VIA INTERPOLAÇÃO DE STRINGS:
                        Usa `${tarefa.bgColor}` e `${tarefa.txtColor}` para aplicar
                        as cores dinamica e individualmente para cada card.
                    */}
          <span className={`${tarefa.bgColor} ${tarefa.txtColor} text-xs font-medium px-2.5 py-0.5 rounded-full`}>{tarefa.prioridade}</span>
          <span className="text-xs text-slate-400">10 Set</span>
         </div>

         {/* TÍTULO DA TAREFA (Puxado do objeto: tarefa.titulo) */}
         <h3 className="font-semibold text-slate-800 text-sm">{tarefa.titulo}</h3>

         {/* DESCRIÇÃO FICA FIXA POR ENQUANTO */}
         <p className="text-xs text-slate-500 line-clamp-2">Montar os inputs de e-mail e senha utilizando flexbox e componentes responsivos.</p>
        </div>
       </div>
      ))}
     </div>
    </main>
   </div>
  </div>
 )
}
