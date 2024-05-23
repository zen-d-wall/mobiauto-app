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
    <div className="h-full flex justify-center items-center bg-slate-600">
      <SelectSmall brands={data} category="Marca"/>
    </div>
  )
}
