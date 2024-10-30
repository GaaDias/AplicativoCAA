// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'; // Importando ícones
import { BiSolidCustomize } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <AiFillHome size={30} /> {/* Ícone Home */}
          </Link>
        </li>
        <li>
          <Link to="/customize-card">
            <BiSolidCustomize size={30} /> {/* Ícone de Edição */}
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <IoMdSettings size={30} /> {/* Ícone de Configurações */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
