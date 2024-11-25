import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, MapPin } from 'lucide-react';

export function TimeCard() {
  const currentTime = new Date();
  
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {format(currentTime, 'HH:mm:ss')}
        </h2>
        <p className="text-gray-600 mt-1">
          {format(currentTime, "EEEE, d 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
        <span className="text-gray-600">São Paulo, SP</span>
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
        <Clock className="h-5 w-5 mr-2" />
        Registrar Ponto
      </button>
      
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Registros de Hoje</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Entrada</span>
            <span className="font-medium">08:00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Saída Almoço</span>
            <span className="font-medium">12:00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Retorno Almoço</span>
            <span className="font-medium">13:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}