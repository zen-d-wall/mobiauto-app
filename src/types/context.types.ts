import { Car } from "./database.types";

export interface UserPreferencesContext {
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    model: string;
    setModel: React.Dispatch<React.SetStateAction<string>>;
    year: string;
    setYear: React.Dispatch<React.SetStateAction<string>>;
    car: Car;
    setCar: React.Dispatch<React.SetStateAction<Car>>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}