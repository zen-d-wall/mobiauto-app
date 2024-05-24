import { Categories } from "@/types/database.types"

export async function getBrandData(queryParams: any) {


    const res = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/${queryParams}`)
  
    if (!res.ok) {
      console.log('Error')
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }