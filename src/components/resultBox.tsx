'use client';

import { UserPreferenceContext } from "@/context/userPreferences";
import { useContext } from "react";

export default function ResultBox() {

    const { car } = useContext(UserPreferenceContext);

    console.log('car')
    console.log(car)

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className='flex flex-col h-2/5 w-11/12 bg-resultbg justify-center items-center border-r-2 border-l-2 border-b-4'>
                <div className="w-full font-black text-gray-700 text-2xl text-center m-1">Tabela Fipe: Preço {`${car.Marca} ${car.Modelo} ${car.AnoModelo}`}</div>
                <div className="bg-pricepill rounded-full py-3 px-6 text-white text-1xl font-black m-2">{car.Valor}</div>
                <div className="m-1 text-xs text-gray-500">Este é o preço de compra do veículo</div>
            </div>

        </div>
    )
}