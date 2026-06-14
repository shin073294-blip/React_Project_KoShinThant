import React from 'react';
import Button from '../button';

// 1. We define the structure of the incoming coffee item (Props)
interface CardProp {
  item: {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    isPopular: boolean;
    isAvailable: boolean;
  };
}

export default function Card({ item }: CardProp) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-slate-100 min-h-[220px]">
      
      {/* BADGES ROW */}
      <div className="flex gap-2 items-center mb-3">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded uppercase bg-orange-100 text-orange-700">
          {item.category}
        </span>
        {item.isPopular && (
          <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded ml-auto">
            Popular
          </span>
        )}
        {!item.isAvailable && (
          <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded ml-auto">
            Sold Out
          </span>
        )}
      </div>

      {/* CONTENT AREA */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">{item.name}</h3>
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">{item.description}</p>
      </div>

      {/* FOOTER ACTION ROW */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-bold text-slate-800">${item.price.toFixed(2)}</span>
        <Button 
          text="+ Add to Cart"
          disabled={!item.isAvailable}
          className={!item.isAvailable ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-orange-600 text-white'}
        />
      </div>

    </div>
  );
}