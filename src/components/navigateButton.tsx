import { UserPreferenceContext } from '@/context/userPreferences';
import { buttonTheme } from '@/utils/mui-styling';
import { getVehicleData } from '@/api/service';
import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function NavigateButton(props: { label: string, route: string, disabled: boolean, handleOnClick?: () => void}) {

    return (
        <ThemeProvider theme={buttonTheme}>
            <Button variant="contained" onClick={() => props.handleOnClick && props.handleOnClick()} color="violet" disabled={props.disabled}>
                <Link href={props.route}>
                    <div className=''>
                        {props.label}
                    </div>
                </Link>
            </Button>
        </ThemeProvider>


    );
}
