'use client';

import SelectSmall from "@/components/dropdown";

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-purple-50">
      <div className="w-full font-black text-gray-700 text-4xl text-center m-1">Tabela Fipe</div>
      <div className="w-full font-bold text-gray-700 text-2xl text-center mb-4 mt-1">Consulte o valor de um veículo de forma gratuita</div>
      <div className='flex flex-col h-2/5 w-3/6 bg-white justify-center items-center border-r-2 border-l-2 border-b-4'>
        <SelectSmall category="marcas" />
        {/* <SelectSmall category="modelos" /> */}
      </div>
    </div>

  )
}
