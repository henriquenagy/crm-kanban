export default function Login() {
 return (
  // CONTÊINER PAI: Ocupa 100% da altura da tela e centraliza o cartão no meio
  <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
   {/* CARTÃO DE LOGIN: Fundo branco, largura máxima controlada, cantos arredondados e sombra */}
   <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl flex flex-col gap-6">
    {/* CABEÇALHO DO FORMULÁRIO */}
    <div className="text-center">
     <h1 className="text-2xl font-bold text-slate-800">Acesse o CRM</h1>
     <p className="text-sm text-slate-500 mt-1">Insira suas credenciais para entrar</p>
    </div>

    {/* FORMULÁRIO */}
    <form className="flex flex-col gap-4">
     {/* CAMPO DE E-MAIL */}
     <div className="flex flex-col gap-1.5">
      <label htmlFor="email" className="text-sm font-medium text-slate-700">
       E-mail
      </label>
      <input type="email" id="email" placeholder="seuemail@empresa.com" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text.sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
     </div>

     {/* CAMPO DE SENHA */}
     <div className="flex flex-col gap-1.5">
      <label htmlFor="senha" className="text-sm font-medium text-slate-700">
       Senha
      </label>
      <input type="password" id="senha" placeholder="••••••••" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
     </div>

     {/* BOTÃO DE SUBMIT */}
     <button type="submit" className="mt-2 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-600/50">
      Entrar no Sistema
     </button>
    </form>
   </div>
  </div>
 )
}
