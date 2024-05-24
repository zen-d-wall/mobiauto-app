'use client';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Brand, Categories } from '@/types/database.types';
import { useUserPreferences } from '@/context/userPreferences';
import { useEffect, useState } from 'react';
import { getBrandData } from '@/utils/requests';
import { getRightQuery, recordContext } from '@/utils/handlers';

export default function SelectSmall(props: { category: Categories }) {
  const [brandData, setBrandData] = useState([])
  const [data, setData] = useState('')

  const queryParams = getRightQuery(props.category)

  async function getRequestData() {
    setBrandData(await getBrandData(queryParams))
  }

  useEffect(() => {
    getRequestData();
  }, [])

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
    recordContext(props.category, data)
  };


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, width: 400 }} size="small" disabled={!brandData.length && true}>
        <InputLabel id="dropdown-label">{props.category}</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
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
