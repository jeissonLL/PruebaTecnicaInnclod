import React, {useEffect, useState, useRef} from 'react';
import DivAdd from '../../Components/DivAdd';
import DivTable from '../../Components/DivTable';
import DivSelect from '../../Components/DivSelect';
import DivInput from '../../Components/DivInput';
import Modal from '../../Components/Model';
import {confimation, sendRequest} from '../../functions';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const ProcessDocuments = () => {
    const [processDocuments, setProceseDocuments] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [content, setContent] = useState('');
    const [idProcesse, setIdProcesse] = useState('');
    const [idDocument, setidDocument] = useState('');
    const [processes, setProcesses] = useState([]);
    const [document, setDocument] = useState([]);
    const [operation, setOperation] = useState('');
    const [classLoad, setclassLoad] = useState('');
    const [title, setTitle] = useState('');
    const [classTable, setClassTable] = useState('');
    const [rows, setRows] = useState('0');
    const [page, setPage] = useState('1');
    const [pageSize, setPageSize] = useState('0');
    const NameInput = useRef();
    const close = useRef();
    let method = '';
    let url = '';
    useEffect(() => {
      getProcessDocuments(1);
      getProcesses();
      getDocuments();
    }, []);
    const getProcessDocuments = async(page) => {
      const res = await sendRequest('GET','', '/api/process_document?page='+page, '');
      setProceseDocuments(res.data);
      setRows(res.total);
      setPageSize(res.per_page);
      setClassTable('');
      setclassLoad('d-none');
    }
    const getProcesses = async () => {
      const res = await sendRequest('GET', '', '/api/process', '',);
      setProcesses(res);
    }
    const getDocuments = async () => {
      const res = await sendRequest('GET', '', '/api/document', '',);
      setDocument(res);
    }
    const deleteProcessDocument = (id, name) => {
      confimation(name, '/api/process_document/'+setId(id), 'ProcessDocuments');
    }
    const clear = () =>{
      setName('');
      setCode('');
      setContent('');
      setIdProcesse(1);
      setidDocument(1);
    }
    const openModal = (op, n, cd, ct, pro, doc, dp) =>{
      clear();
      //setTimeout(() => NameInput.current.focus(), 600);
      setOperation(op);
      setId(dp);
      if(op == 1){
        setTitle('Create document process');
        setIdProcesse(1);
        setidDocument(1);
      }
      else{ 
        setTitle('Update document process');
        setName(n);
        setCode(cd);
        setContent(ct);
        setIdProcesse(pro);
        setidDocument(doc);
      }
    }
    const save = async (e) => { 
      e.preventDefault();
      if(operation == 1){
        method = 'POST';
        url = '/api/process_document';
      }else{
        method = 'PUT';
        url = '/api/process_document/'+id;
      }
      
      const form = {doc_name: name, doc_code: code, doc_content: content, id_process: idProcesse, id_document: idDocument};
      const  res = await sendRequest(method, form, url, '');
      if(method == 'PUT' && res.status == true){
        close.current.click();
      }
      if(res.status == true){
        clear();
        getProcessDocuments(page);
        setTimeout(() => NameInput.current.focus(), 3000);
      }
    }

    const goPage = (p) => {
      setPage(p);
      getProcessDocuments(p);
    }
  return (
    <div className='container-fluid'>
      <DivAdd>
        <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProcessDocuments'
        onClick={()=>openModal(1)}><i className='fa-solid fa-circle-plus'></i> Agregar Documentos de procesos
        </button>
      </DivAdd>
      <DivTable col='10' off='1' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Codigo</th>
              <th>Descripcion</th>
              <th>Proceso</th>
              <th>Documento</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {processDocuments.map((row, i) =>(
              <tr key={row.id}>
                <td>{(i+1)}</td>
                <td>{row.doc_name}</td>
                <td>{row.doc_prefix} {' - '} {row.pro_prefix} {' - '} {row.doc_code}</td>
                <td>{row.doc_content}</td>
                <td>{row.pro_prefix}</td>
                <td>{row.doc_prefix}</td>
                <td>
                <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProcessDocuments'
                onClick={()=>openModal(2, row.doc_name, row.doc_code, row.doc_content, row.pro_prefix, row.doc_prefix, row.id)}>
                <i className='fa-solid fa-edit'></i> 
                </button>
                </td>
                <td>
                  <button className='btn btn-danger'
                    onClick={() => deleteProcessDocument(row.id, row.name)}>
                      <i className='fa-solid fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationControl changePage={page => goPage(page)}
        next={true} limit={pageSize} page={page} total={rows}/>
      </DivTable>
      <Modal title={title} modal='modalProcessDocuments'>
        <div className='modal-body'>
            <form onSubmit={save}>
              <DivInput type='text' icon='fa-user' value={name}
              className='form-control' placeholder='Name' required='required'
              handleChange={ (e)=> setName(e.target.value)}/>
              <DivInput type='number' icon='fa-user' value={code}
              className='form-control' placeholder='code' required='required'
              handleChange={ (e)=> setCode(e.target.value)}/>
              <DivInput type='text' icon='fa-user' value={content}
              className='form-control' placeholder='content' required='required'
              handleChange={ (e)=> setContent(e.target.value)}/>
              {/* <DivSelect icon='fa-user' required='required' value={idDocument} 
              className='form-select' options={document}
              handleChange={ (e)=> setidDocument(e.target.value)}/> */}
              {/* <DivSelect icon='fa-user' required='required' value={idProcesse} 
              className='form-select' options={processes}
              handleChange={ (e)=> setIdProcesse(e.target.value)}/> */}

              <div className='input-group mb-3'>
                  <select className='form-select' required='required' value={idDocument} onChange={(e) => setidDocument(e.target.value)}>
                    { document.map( (op) => (
                            <option value={op.id} key={op.id}>{op.doc_prefix}</option>
                      ))}
                  </select>
              </div>
              <div className='input-group mb-3'>
                  <select className='form-select' required='required' value={idProcesse} onChange={(e) => setIdProcesse(e.target.value)}>
                    { processes.map( (op) => (
                            <option value={op.id} key={op.id}>{op.pro_prefix}</option>
                      ))}
                  </select>
              </div>

              <div className='d-grid col-10 mx-auto'>
                <button className='btn btn-dark'>
                  <i className='fa-solid fa-door-open'></i>  Registrar
                </button>
              </div>
          </form>
        </div>
        <div className='modal-footer'>
          <button className='btn btn-dark' data-bs-dismiss='modal' ref={close}>  Cerrar</button>
        </div>
      </Modal>
    </div>
  )
}

export default ProcessDocuments