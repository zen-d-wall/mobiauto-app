import SelectSmall from "@/components/dropdown";

async function getData() {
  'use server';
  const res = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')

  if (!res.ok) {
    console.log('Error')
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  console.log(data)

  return (
    <div className="h-full flex flex-col justify-center items-center bg-purple-50">
      <div className="w-full font-black text-gray-700 text-4xl text-center m-1">Tabela Fipe</div>
      <div className="w-full font-bold text-gray-700 text-2xl text-center mb-4 mt-1">Consulte o valor de um veículo de forma gratuita</div>
      <SelectSmall data={[data]} category="Marca" />
    </div>

  )
}
