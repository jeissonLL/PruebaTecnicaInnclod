import React, {useEffect, useState, useRef} from 'react';
import {sendRequest} from '../functions';
import DivInput from './DivInput';
import { Link } from 'react-router-dom';

const FormDep = (params) => {
    const [name, setName] = useState('');
    const [prefix, setPrefix] = useState('');
    const NameInput = useRef();
    const prefixInput = useRef();
    //let method = 'POST';
    let url = '/api/document';
    let redirect = '';
    useEffect(() => {
        NameInput.current.focus();
        getDocuments();
    }, []);
    const getDocuments = async () => {
        if(params.id !== null) {
            const res = await sendRequest('GET', '', (url+'/'+params.id));
            setName(res.tip_doc_name),
            setPrefix(res.tip_doc_prefix);
        }
    }
    const save = async (e) => {
        e.preventDefault();
        let method = 'POST';
        if(params.id !== null){
            method = 'PUT';
            url = '/api/document/'+params.id;
            redirect = '/documents';
        }
        const res = await sendRequest(method, {tip_doc_prefix: prefix, tip_doc_name: name}, url, redirect);
        if(method == 'POST' && res.status == true){
            setName(''),
            setPrefix('');
        }
    };
  return (
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-md-4 offset-md-4'>
                <div className='card border border-info'>
                    <div className='card-header bg-info border border-info'>
                        {params.title}
                    </div>
                    <div className='card-body'>
                        <form onSubmit={save}> 
                            <DivInput type='text' icon='fa-solid fa-briefcase' value={name} className='form-control' placeholder='Nombre'
                            required='required' ref={NameInput} handleChange={(e) => setName(e.target.value)}/>
                            <DivInput type='text' icon='fa-solid fa-address-card' value={prefix} className='form-control' placeholder='Prefiljo'
                            required='required' ref={prefixInput} handleChange={(e) => setPrefix(e.target.value)}/>
                            <div className='d-grid col-10 mx-auto'>
                                <button className='btn btn-dark'>
                                    <i className='fa-solid fa-save'></i> Salvar</button>
                            </div>
                        </form>
                        <Link to='/documents'>
                            <i class="fa-solid fa-backward"></i> Regresar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormDep