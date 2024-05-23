'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Brand, Categories } from '@/types/database.types';

export default function SelectSmall(props: { data: Brand[] | [], category: Categories }) {
  const [data, setData] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };

  return (
    <div className='flex h-2/5 w-2/6 bg-white justify-center items-center border-r-2 border-l-2 border-b-4'>
      <FormControl sx={{ m: 1, minWidth: 120, width: 400 }} size="small" disabled={!props.data.length && true}>
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
          {props.data.map((brand: Brand) => {
            return <MenuItem value={brand.codigo}>{brand.nome}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}
