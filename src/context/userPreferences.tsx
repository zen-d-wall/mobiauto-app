import { UserPreferencesContext } from "@/types/context.types";
import { Brand } from "@/types/database.types";
import { createContext, useContext, useState } from "react";

export const UserPreferenceContext = createContext({} as UserPreferencesContext);

export default function UserPreferencesProvider({ children }: any) {
    const [brand, setBrand] = useState<string>("")
    const [model, setModel] = useState<string>("")
    const [year, setYear] = useState<string>("")

    return (
        <UserPreferenceContext.Provider
            value={{
                brand,
                setBrand,
                model,
                setModel,
                year,
                setYear
            }}
        >
            {children}
        </UserPreferenceContext.Provider>
    );
}

// export function useUserPreferences() {
//     const { brand, setBrand, model, setModel, year, setYear } = useContext(UserPreferenceContext);
//     return { brand, setBrand, model, setModel, year, setYear };
// }