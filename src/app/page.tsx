interface Brand {
  codigo: string;
  nome: string;
}

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
    <div>
      {data.map((brand: Brand, index: number) => (
        <div key={index}>
          Código: {brand.codigo}, Nome: {brand.nome}
      </div>
      ))}
    </div>
  )
}
