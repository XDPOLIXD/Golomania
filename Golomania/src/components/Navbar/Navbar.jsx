import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx= {{ display: "flex", justifyContent: "space-around" }}>
            <Typography sx= {{ color: "white"}}>
                Golomania
            </Typography>
            <button sx= {{ color: 'white' }}>
                Home
            </button>
            <button sx= {{ color: 'white' }}>
                Categorias
            </button>
            <button sx= {{ color: 'white' }}>
                Productos
            </button>
        <CartWidget />

        </Toolbar>
    </AppBar>)
}

export default Navbar;
