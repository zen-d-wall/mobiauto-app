import { UserPreferenceContext } from "@/context/userPreferences";
import { Categories } from "@/types/database.types";
import { useContext } from "react";


export function useRecordContext() {
    const { setBrand, setModel, setYear } = useContext(UserPreferenceContext);
  
    const recordContext = (category: Categories, value: string) => {
      if (category === 'marcas') {
        setBrand(value);
      } else if (category === 'modelos') {
        setModel(value);
      } else if (category === 'anos') {
        setYear(value);
      }
    };
  
    return recordContext;
  }

export function getRightQuery(category: Categories){
    const { brand, model } = useContext(UserPreferenceContext)

    const params = {
        marcas: 'marcas',
        modelos: `marcas/${brand}/modelos`,
        anos: `marcas/${brand}/modelos/${model}/anos`}

    if(category === 'marcas'){
        return params[category];
    }
    else if(brand === ""){
        return ""
    }
    else if(category !== 'modelos' && brand !== "" && model === ""){
        return ""
    }

    return params[category];
}