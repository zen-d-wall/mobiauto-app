
export async function getVehicleData(queryParams: string) {

    if (queryParams === "") {
        return []
    }

    const res = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/${queryParams}`, { mode: 'no-cors' })

    if (!res.ok) {
        console.log('Error')
        throw new Error('Failed to fetch data')
    }

    return res.json()
}