
import React from 'react';
import { DollarSign } from 'lucide-react';

const FloatingSymbols = () => {
  const symbols = [
    { id: 1, content: '💰', size: 'text-2xl', position: 'top-[10%] left-[5%]' },
    { id: 2, content: '💵', size: 'text-3xl', position: 'top-[25%] right-[8%]' },
    { id: 3, content: '💲', size: 'text-4xl', position: 'top-[60%] left-[12%]' },
    { id: 4, content: '💸', size: 'text-3xl', position: 'top-[40%] right-[15%]' },
    { id: 5, content: <DollarSign className="text-green-500" />, size: 'text-2xl', position: 'top-[75%] left-[20%]' },
    { id: 6, content: 'G', size: 'text-3xl font-bold text-blue-500', position: 'top-[15%] left-[80%]' },
    { id: 7, content: 'o', size: 'text-3xl font-bold text-red-500', position: 'top-[80%] right-[10%]' },
    { id: 8, content: 'o', size: 'text-3xl font-bold text-yellow-500', position: 'top-[30%] left-[30%]' },
    { id: 9, content: 'g', size: 'text-3xl font-bold text-blue-500', position: 'top-[50%] right-[30%]' },
    { id: 10, content: 'l', size: 'text-3xl font-bold text-green-500', position: 'top-[70%] right-[25%]' },
    { id: 11, content: 'e', size: 'text-3xl font-bold text-red-500', position: 'top-[20%] right-[40%]' },
    { id: 12, content: '⭐', size: 'text-2xl', position: 'top-[35%] left-[18%]' },
    { id: 13, content: '⭐⭐⭐⭐⭐', size: 'text-xl', position: 'top-[85%] left-[40%]' },
    { id: 14, content: '🔍', size: 'text-2xl', position: 'top-[45%] left-[65%]' },
    { id: 15, content: '📝', size: 'text-2xl', position: 'top-[65%] left-[5%]' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 opacity-50">
      {symbols.map(symbol => (
        <div
          key={symbol.id}
          className={`absolute ${symbol.size} ${symbol.position} animate-float`}
          style={{
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {symbol.content}
        </div>
      ))}
    </div>
  );
};

export default FloatingSymbols;
