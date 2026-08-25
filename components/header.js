export default function Header() {
 return (
  <header className="w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
   <div className="flex items-center gap-2">
    <h2 className="text-xl font-bold text-gray-800">Painel do CRM</h2>
   </div>
   <div className="flex items-center gap-4">
    <span className="text-sm text-gray-500">Usuário Teste</span>
    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">U</div>
   </div>
  </header>
 )
}
