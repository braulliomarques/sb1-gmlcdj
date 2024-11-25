import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

type LoginProps = {
  onLogin: (role: 'provider' | 'accountant' | 'admin' | 'employee') => void;
};

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Provider (You)
    if (email === 'provider@sistema.com' && password === 'provider123') {
      setError('');
      onLogin('provider');
      return;
    }

    // Accountant
    if (email === 'contador@empresa.com' && password === 'contador123') {
      setError('');
      onLogin('accountant');
      return;
    }

    // Client Admin
    if (email === 'admin@empresa.com' && password === 'admin123') {
      setError('');
      onLogin('admin');
      return;
    }

    // Employee
    if (email === 'colaborador@empresa.com' && password === 'colaborador123') {
      setError('');
      onLogin('employee');
      return;
    }

    setError('Email ou senha inválidos');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Ponto Eletrônico</h2>
          <p className="text-gray-600 mt-2">Sistema Multi-tenant</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Entrar
          </button>

          <div className="text-center text-sm text-gray-600">
            <p>Credenciais de demonstração:</p>
            <p>Fornecedor: provider@sistema.com / provider123</p>
            <p>Contador: contador@empresa.com / contador123</p>
            <p>Admin: admin@empresa.com / admin123</p>
            <p>Colaborador: colaborador@empresa.com / colaborador123</p>
          </div>
        </form>
      </div>
    </div>
  );
}