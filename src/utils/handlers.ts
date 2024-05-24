import { useUserPreferences } from "@/context/userPreferences";
import { Categories } from "@/types/database.types";

const { setBrand, setModel, setYear, brand, model } = useUserPreferences()

export function recordContext(category: Categories, value: string) {
    if(category === 'marcas'){
        setBrand(value)
    }
    else if(category === 'modelos') {
        setModel(value)
    }
    else if(category === 'anos'){
        setYear(value)
    }
}

export function getRightQuery(category: Categories){
    if(category !== 'marcas' && brand === ""){
        return ""
    }
    if(category !== 'modelos' && brand === "" && model === ""){
        return ""
    }
    const params = {
        marcas: 'marcas',
        modelos: `marcas/${brand}/modelos`,
        anos: `marcas/${brand}/modelos/${model}/anos`}

    return params[category];
}