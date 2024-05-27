'use client';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Brand, Car, Categories } from '@/types/database.types';
import { useEffect, useState } from 'react';
import { getVehicleData } from '@/api/service';
import { getRightQuery, useRecordContext } from '@/utils/handlers';

export default function Dropdown(props: { category: Categories }) {
    const [data, setData] = useState<string>('')
    const [key, setKey] = useState<number>(0)
    const [vehicleData, setVehicleData] = useState<Brand[]>([])

    const recordContext = useRecordContext();
    const queryParams = getRightQuery(props.category)

    async function getRequestData() {

        if (props.category === 'Modelo') {
            const response = await getVehicleData(queryParams);
            setVehicleData(response.modelos ? response.modelos : [])
        }
        else {
            setVehicleData(await getVehicleData(queryParams))
        }
    }

    const handleChange = (event: SelectChangeEvent) => {
        setData(event.target.value);
        setKey(key + 1)
    };

    useEffect(() => {
        getRequestData()
        recordContext(props.category, data)
    }, [data])

    return (
        <div key={key}>
            <FormControl sx={{ m: 1, minWidth: 120, width: 320 }} size="small" disabled={!vehicleData.length && true}>
                <InputLabel id="dropdown-label">{`Selecionar ${props.category}`}</InputLabel>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    data-testid="dropdown-select"
                    value={data}
                    label={props.category}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {vehicleData.map((brand: Brand) => {
                        return <MenuItem value={brand.codigo}>{brand.nome}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
