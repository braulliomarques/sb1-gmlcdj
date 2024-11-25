import React from 'react';
import { Clock, User } from 'lucide-react';

type HeaderProps = {
  userRole?: 'admin' | 'employee' | null;
};

export function Header({ userRole }: HeaderProps) {
  const userName = userRole === 'admin' ? 'Administrador' : 'Maria Santos';

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Ponto Eletrônico</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Bem-vindo(a), {userName}</span>
            <User className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
}