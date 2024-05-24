import { useContext, useEffect, useState } from "react";
import SelectSmall from "./dropdown";
import { getRightQuery, useRecordContext } from "@/utils/handlers";
import { getBrandData } from "@/utils/requests";
import { Brand } from "@/types/database.types";
import { UserPreferenceContext } from "@/context/userPreferences";

export default function SearchBox() {
    const [brandKey, setBrandKey] = useState<number>(0)
    const [modelKey, setModelKey] = useState<number>(0)
    const [yearKey, setYearKey] = useState<number>(0)

    const { brand, model, year } = useContext(UserPreferenceContext)

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
                    <SelectSmall category="marcas" />
                </div>
                <div key={brandKey}>
                    <SelectSmall category="modelos" />
                </div>
                <div key={model}>
                    <SelectSmall category="anos" />
                </div>
            </div>
        </div>
    )
}