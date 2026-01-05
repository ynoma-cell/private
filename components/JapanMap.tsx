
import React from 'react';
import { WagyuBrand } from '../types';

interface JapanMapProps {
  wagyuList: WagyuBrand[];
  collectedStamps: string[];
  onSelectWagyu: (id: string) => void;
}

const JapanMap: React.FC<JapanMapProps> = ({ wagyuList, collectedStamps, onSelectWagyu }) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
      {/* Accurate Japan Map SVG */}
      <svg
        viewBox="0 0 500 400"
        className="w-full h-full text-white fill-current drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hokkaido */}
        <path d="M380,20 L440,30 L450,50 L430,90 L390,100 L370,80 L360,50 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Tohoku */}
        <path d="M360,110 L390,120 L400,160 L390,200 L350,190 L340,140 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Kanto */}
        <path d="M350,200 L380,210 L385,250 L340,260 L320,230 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Chubu */}
        <path d="M340,140 L350,190 L320,230 L280,240 L260,200 L280,160 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Kansai */}
        <path d="M280,240 L310,250 L290,290 L260,295 L240,260 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Chugoku */}
        <path d="M240,260 L260,250 L180,260 L140,290 L180,300 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Shikoku */}
        <path d="M200,310 L250,305 L240,335 L190,340 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />
        
        {/* Kyushu */}
        <path d="M140,290 L160,300 L140,380 L80,370 L70,320 L110,285 Z" className="fill-slate-200 stroke-slate-300 stroke-[1]" />

        {/* Major Prefectural Outlines (Simplified) */}
        <g stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.6">
          <line x1="390" y1="140" x2="360" y2="150" /> {/* Iwate/Akita boundary */}
          <line x1="380" y1="210" x2="340" y2="210" /> {/* Kanto north boundary */}
          <line x1="280" y1="240" x2="280" y2="280" /> {/* Kansai boundary */}
        </g>
      </svg>

      {/* Pins Layer */}
      {wagyuList.map((wagyu) => {
        const isCollected = collectedStamps.includes(wagyu.id);
        return (
          <button
            key={wagyu.id}
            onClick={() => onSelectWagyu(wagyu.id)}
            style={{
              left: `${wagyu.coordinates.x}%`,
              top: `${wagyu.coordinates.y}%`,
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-125 focus:outline-none z-10"
          >
            <div className="relative">
              {/* Pin Shadow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/10 blur-[1px] rounded-full" />
              
              {/* Pin Body */}
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 transition-transform
                ${isCollected 
                  ? 'bg-red-600 border-yellow-400 scale-110 ring-4 ring-red-200' 
                  : 'bg-white border-slate-400 group-hover:border-red-400'}
              `}>
                {isCollected ? (
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <div className="w-2.5 h-2.5 bg-slate-300 rounded-full group-hover:bg-red-300" />
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20">
                  <div className="bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    {wagyu.name}
                  </div>
                  <div className="w-2 h-2 bg-slate-900 transform rotate-45 mx-auto -mt-1 shadow-xl"></div>
                </div>
              </div>
            </div>
          </button>
        );
      })}
      
      {/* Legend & Stats Overlay */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl pointer-events-none">
        <h3 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-2">Progress</h3>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-black text-slate-800 leading-none">{collectedStamps.length}</span>
          <span className="text-xs text-slate-400 font-bold mb-0.5">/ {wagyuList.length}</span>
        </div>
        <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-red-600 transition-all duration-700" 
            style={{ width: `${(collectedStamps.length / wagyuList.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200 text-[10px] shadow-lg flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 border border-yellow-400" />
          <span className="font-bold text-slate-600 uppercase tracking-tighter">制覇済み</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white border border-slate-400" />
          <span className="font-bold text-slate-600 uppercase tracking-tighter">未訪問</span>
        </div>
      </div>
    </div>
  );
};

export default JapanMap;
