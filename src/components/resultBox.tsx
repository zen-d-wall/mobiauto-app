'use client';

import { UserPreferenceContext } from "@/context/userPreferences";
import { useContext } from "react";
import NavigateButton from "./navigateButton";
import Link from "next/link";

export default function ResultBox() {

    const { car, loading } = useContext(UserPreferenceContext);

    return (
        <>
            {loading ? (
                <div className="h-full flex flex-col justify-center">
                    <div className="w-full font-black text-gray-700 text-2xl text-center m-1">Carregando...</div>
                </div>
            ) : (
                <>

                    {car.AnoModelo ? (

                        <div className="h-full flex flex-col justify-center items-center">
                            <div className="absolute m-10 top-0 left-0">
                                <NavigateButton label="Voltar" route="/" disabled={false} />
                            </div>
                            <div className='relative flex flex-col h-2/5 w-11/12 bg-resultbg justify-center items-center'>
                                <div className="w-full font-black text-gray-700 text-2xl text-center m-1">Tabela Fipe: Preço {`${car.Marca} ${car.Modelo} ${car.AnoModelo}`}</div>
                                <div className="bg-pricepill rounded-full py-3 px-6 text-white text-1xl font-black m-2">{car.Valor}</div>
                                <div className="m-1 text-xs text-gray-500">Este é o preço de compra do veículo</div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-center items-center">
                            <div className='relative flex flex-col h-2/5 w-11/12 bg-resultbg justify-center items-center'>
                                <div className="w-full font-black text-gray-700 text-2xl text-center m-1">Por favor selecione um Veículo</div>
                                <NavigateButton label="Selecionar Veículo" route="/" disabled={false} />
                            </div>
                        </div>

                    )}
                </>
            )}
        </>
    )
}