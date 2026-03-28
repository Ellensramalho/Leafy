import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border border-[#E3EAD8] rounded-xl p-6 shadow-sm min-h-[450px] min-w-[450px]">
        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#8F9F6A]">
          Cadastro
        </h1>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#8F9F6A]"
              >
                Nome:
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-[#F5F9F0] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#B7C79A] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#8F9F6A]"
              >
                Email:
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-[#F5F9F0] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#B7C79A] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#8F9F6A]"
              >
                Senha:
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  required
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full rounded-md bg-[#F5F9F0] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#B7C79A] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-6 flex w-full justify-center rounded-md bg-[#8F9F6A] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#7A8C58]"
              >
                Cadastrar
              </button>
            </div>

            <div className="text-sm text-center mt-4">
              <span className="text-gray-600">Já possui cadastro? </span>
              <Link
                to="/login"
                className="font-semibold text-[#8F9F6A] hover:underline"
              >
                Fazer login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;