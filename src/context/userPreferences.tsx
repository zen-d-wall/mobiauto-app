import { UserPreferencesContext } from "@/types/context.types";
import { Car } from "@/types/database.types";
import { createContext, useState } from "react";

export const UserPreferenceContext = createContext({} as UserPreferencesContext);

export default function UserPreferencesProvider({ children }: any) {
    const [brand, setBrand] = useState<string>("")
    const [model, setModel] = useState<string>("")
    const [year, setYear] = useState<string>("")
    const [car, setCar] = useState<Car>({} as Car)
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <UserPreferenceContext.Provider
            value={{
                brand,
                setBrand,
                model,
                setModel,
                year,
                setYear,
                car,
                setCar,
                loading,
                setLoading
            }}
        >
            {children}
        </UserPreferenceContext.Provider>
    );
}
