import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';

export const Layout = (props: { children: any}) => {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ marginTop: '15px', marginBottom: '30px' }}>
                {props.children}
            </Container>
        </>
    )
}