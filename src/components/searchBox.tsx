'use client'

import { useContext, useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { UserPreferenceContext } from "@/context/userPreferences";
import NavigateButton from "./navigateButton";
import { getVehicleData } from "@/api/service";

export default function SearchBox() {
    const [brandKey, setBrandKey] = useState<number>(0)
    const [modelKey, setModelKey] = useState<number>(0)
    const [yearKey, setYearKey] = useState<number>(0)

    const { brand, model, year, setCar, setLoading } = useContext(UserPreferenceContext)

    async function requestData(queryParams: string) {
        setLoading(true)
        const response = await getVehicleData(queryParams);
        setCar(response);
        setLoading(false)
    }

    function handleButtonClick() {
        const queryParams = `marcas/${brand}/modelos/${model}/anos/${year}`

        requestData(queryParams);
    }

    useEffect(() => {
        setBrandKey(brandKey + 1)
    }, [brand])
    useEffect(() => {
        setModelKey(modelKey + 1)
    }, [model])
    useEffect(() => {
        setYearKey(yearKey + 1)
    }, [year])

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="w-full font-black text-gray-700 text-4xl text-center m-1">Tabela Fipe</div>
            <div className="w-full font-bold text-gray-700 text-2xl text-center mb-4 mt-1">Consulte o valor de um veículo de forma gratuita</div>
            <div className='flex flex-col h-2/5 w-11/12 bg-white justify-center items-center border-r-2 border-l-2 border-b-4'>
                <div>
                    <Dropdown category="Marca" />
                </div>
                <div key={brandKey}>
                    <Dropdown category="Modelo" />
                </div>
                {model && (
                    <div key={model}>
                        <Dropdown category="Ano" />
                    </div>
                )}
                <NavigateButton label="Consultar preço" route="/result" disabled={year ? false : true} handleOnClick={handleButtonClick}/>
            </div>
        </div>
    )
}