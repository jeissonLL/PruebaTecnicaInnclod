import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storage from '../Storage/storage';
import axios from 'axios';

const Nav = () => {
  const go = useNavigate();
  const logout = async () => {
    storage.remove('authToken');
    storage.remove('authUser');
    // storage.clear();
    await axios.get('/api/auth/logout', storage.get('authToken'));
    go('/login');
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-white bg-info'>
      <div className='container-fluid'>
        <a className='navbar-brand'>InnCloud</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav' aria-controls='navbarSupportedContent'>
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>
      {storage.get('authUser') ? (
        <div className='collapse navbar-collapse' id='nav'>
          <ul className='navbar-nav mx-auto mb-2'>
            <li className='nav-item px-lg-5 h4'>
              {storage.get('authUser').name}
            </li>
            <li className='nav-item px-lg-5'>
              <Link to="/process_document" className='nav-link'>Procesos documentados</Link>
            </li>
            <li className='nav-item px-lg-5'>
              <Link to="/documents" className='nav-link'>Tipo de documentos</Link>
            </li>
            <li className='nav-item px-lg-5'>
              <Link to="/process" className='nav-link'>Procesos</Link>
            </li>
          </ul>
          <ul className='navbar-nav mx-auto mb-2'>
            <li className='nav-item px-lg-5'>
              <button className='btn btn-info' onClick={logout}>Cerrar sesion</button>
            </li>
          </ul>
        </div>
      ) : ''}
    </nav>
  )
}

export default Nav;
