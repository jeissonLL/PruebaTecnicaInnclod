import React, {useEffect, useState} from 'react';
import DivAdd from '../../Components/DivAdd';
import DivTable from '../../Components/DivTable';
import { Link } from 'react-router-dom';
import { confimation, sendRequest } from '../../functions'; 

const processes = () => {
  const [processes, setProcesses] = useState([]);
  const [classLoad, setClassLoad] = useState('');
  const [classTable, setClassTable] = useState('');
  useEffect(() => {
    getProcesses();
  }, []);
  const getProcesses = async () => {
    const res = await sendRequest('GET', '', '/api/process', '');
    setProcesses(res);
    setClassTable('');
    setClassLoad('d-none');
  }
  const deleteProcese = (id, pro_name, pro_prefix) => {
    confimation(pro_name, pro_prefix,('/api/process/' + id, '/'));
  }
  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to='/createProc' className='btn btn-dark'>
          <i className='fa-solid fa-circle-plus'></i> Agregar proceso
        </Link>
      </DivAdd>
      <DivTable col='6' off='3' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>
          <thead><tr><th>#</th><th>Proceso</th><th>Preflijo</th><th>Acciones</th></tr></thead>
          <tbody className='table-group-divider'>
            {processes.map((row, i) =>(
              <tr key={row.id}>
                <td>{(i+1)}</td>
                <td>{row.pro_name}</td>
                <td>{row.pro_prefix}</td>
                <td>
                  <Link to={'/editProc/'+row.id} className='btn btn-warning'>
                    <i className='fa-solid fa-edit'></i>
                  </Link>
                </td>
                <td>
                  <button className='btn btn-danger'
                    onClick={() => deleteProcese(row.id, row.pro_name, row.pro_prefix)}>
                      <i className='fa-solid fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DivTable>
    </div>
  )
}

export default processes