import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border border-[#E3EAD8] rounded-xl p-6 shadow-sm min-h-[450px] min-w-[450px]">
        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#8F9F6A]">
          Login
        </h1>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-[#8F9F6A]"
            >
              {' '}
              Email:{' '}
            </label>
            <div>
              <input
                className="block w-full rounded-md bg-[#F5F9F0] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#B7C79A] sm:text-sm/6"
                type="email"
                placeholder="Digite seu email "
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-[#8F9F6A]"
              >
                Senha
              </label>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#8F9F6A] hover:text-indigo-300"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div className="mt-2">
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="block w-full rounded-md bg-[#F5F9F0] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#B7C79A] sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-10 flex w-full justify-center rounded-md bg-[#8F9F6A] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#7A8C58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
