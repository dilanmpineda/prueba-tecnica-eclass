import { Button, Grid } from '@mui/material';
import { Home, FavoriteOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 2, md: 2 }}
            direction="row"
            justifyContent="center"
            paddingBottom={2}
        >
            <Grid item>
                <NavLink to='/'>
                    <Button
                        startIcon={<Home />}
                        variant='outlined'
                    >
                        Home
                    </Button>
                </NavLink>
            </Grid>
            <Grid item>
                <NavLink to='/favorites'>
                    <Button
                        startIcon={<FavoriteOutlined />}
                        variant='outlined'
                        color='error'
                    >
                        Favorites
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
    );
}

export default Header;