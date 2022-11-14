import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: 'rgb(45,45,45)'}}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, m: 1, textAlign:'center' }}>
                    Movies APP
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;