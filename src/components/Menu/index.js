import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Aluraflix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;