'use client';

import SelectSmall from "@/components/dropdown";
import { getBrandData } from "@/utils/requests";
import { useEffect, useState } from "react";


export default function Page() {

  const [data, setData] = useState([])

  async function getRequestData(){
    setData(await getBrandData('marcas'))
  }

  useEffect(() => {
    getRequestData();
  }, [])

  console.log(data)

  return (
    <div className="h-full flex flex-col justify-center items-center bg-purple-50">
      <div className="w-full font-black text-gray-700 text-4xl text-center m-1">Tabela Fipe</div>
      <div className="w-full font-bold text-gray-700 text-2xl text-center mb-4 mt-1">Consulte o valor de um veículo de forma gratuita</div>
      <SelectSmall data={data} category="marcas" />
    </div>

  )
}
