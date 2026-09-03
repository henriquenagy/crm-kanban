export default function Header() {
 return (
  <header className="w-full bg-white border-b border-slate-300 shadow-sm py-4 px-6 flex items-center justify-between">
   <p className="text-xl font-bold text-slate-800">Painel do CRM</p>
   <div className="flex items-center gap-4">
    <p className="text-sm text-slate-800">Usuário Teste</p>
    <p className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer">U</p>
   </div>
  </header>
 )
}
