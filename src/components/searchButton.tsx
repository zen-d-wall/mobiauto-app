import { UserPreferenceContext } from '@/context/userPreferences';
import { buttonTheme } from '@/utils/mui-styling';
import { getVehicleData } from '@/api/service';
import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function SearchButton(props: { label: string }) {
    const { brand, model, year, setCar } = useContext(UserPreferenceContext);

    async function requestData(queryParams: string) {
        const response = await getVehicleData(queryParams);
        setCar(response);
    }

    function handleOnClick() {
        const queryParams = `marcas/${brand}/modelos/${model}/anos/${year}`

        requestData(queryParams);
    }

    return (
        <ThemeProvider theme={buttonTheme}>
            <Button variant="contained" onClick={() => handleOnClick()} color="violet" disabled={year ? false : true}>
                <Link href="/result">
                    <div className=''>
                        {props.label}
                    </div>
                </Link>
            </Button>
        </ThemeProvider>


    );
}
