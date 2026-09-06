'use client'
import { useState } from 'react'

export default function Login() {
 const [email, setEmail] = useState('')
 const [senha, setSenha] = useState('')
 const [erro, setErro] = useState('')

 const handleLogin = (e: React.SubmitEvent) => {
  e.preventDefault()

  if (!email || !senha) {
   setErro('Preencha todos os campos.')
   return
  }

  if (!email.includes('@')) {
   setErro('O e-mail digitado não é válido (falta o @).')
   return
  }

  const regexEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  if (senha.length < 8 || !regexEspecial.test(senha)) {
   setErro('A senha precisa ter no mínimo 8 caracteres e pelo menos um caractere especial.')
   return
  }

  setErro('')
  alert('Login realizado com sucesso!')
 }

 return (
  <div className="flex min-h-screen items-center justify-center bg-slate-100">
   <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl flex flex-col justify-start">
    <h1 className="text-2xl font-bold text-slate-800 text-center">Acesse o CRM</h1>
    <p className="text-sm text-slate-500 mt-1 text-center">Insira suas credenciais para entrar</p>

    {erro && <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm font-medium">{erro}</div>}

    <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8">
     <div className="flex flex-col gap-1.5">
      <label htmlFor="email" className="text-sm font-medium text-slate-700">
       E-mail
      </label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seuemail@empresa.com" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
     </div>

     <div className="flex flex-col gap-1.5">
      <label htmlFor="senha" className="text-sm font-medium text-slate-700">
       Senha
      </label>
      <input type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
     </div>

     <button type="submit" className="mt-2 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-600/50 cursor-pointer">
      Entrar no Sistema
     </button>
    </form>
   </div>
  </div>
 )
}
