import { UserPreferenceContext } from "@/context/userPreferences";
import { Categories } from "@/types/database.types";
import { useContext } from "react";


export function useRecordContext() {
    const { setBrand, setModel, setYear } = useContext(UserPreferenceContext);

    const recordContext = (category: Categories, value: string) => {
        if (category === 'Marca') {
            setBrand(value);
        } else if (category === 'Modelo') {
            setModel(value);
        } else if (category === 'Ano') {
            setYear(value);
        }
    };

    return recordContext;
}

export function getRightQuery(category: Categories) {
    const { brand, model } = useContext(UserPreferenceContext)

    const params = {
        Marca: 'marcas',
        Modelo: `marcas/${brand}/modelos`,
        Ano: `marcas/${brand}/modelos/${model}/anos`
    }

    if (category === 'Marca') {
        return params[category];
    }
    else if (brand === "") {
        return ""
    }
    else if (category !== 'Modelo' && brand !== "" && model === "") {
        return ""
    }

    return params[category];
}