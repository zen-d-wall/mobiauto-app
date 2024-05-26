'use client';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Brand, Car, Categories } from '@/types/database.types';
import { useEffect, useState } from 'react';
import { getBrandData } from '@/utils/requests';
import { getRightQuery, useRecordContext } from '@/utils/handlers';

export default function Dropdown(props: { category: Categories }) {
  const [data, setData] = useState<string>('')
  const [key, setKey] = useState<number>(0)
  const [brandData, setBrandData] = useState<Brand[]>([])

  const recordContext = useRecordContext();
  const queryParams = getRightQuery(props.category)

  async function getRequestData() {

    if (props.category === 'modelos') {
      const response = await getBrandData(queryParams);
      setBrandData(response.modelos ? response.modelos : [])
    }
    else {
      setBrandData(await getBrandData(queryParams))
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
      <FormControl sx={{ m: 1, minWidth: 120, width: 400 }} size="small" disabled={!brandData.length && true}>
        <InputLabel id="dropdown-label">{props.category}</InputLabel>
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
          {brandData.map((brand: Brand) => {
            return <MenuItem value={brand.codigo}>{brand.nome}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}
