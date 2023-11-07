import React from 'react';
import { useParams } from 'react-router-dom';
import FormDep from '../../Components/FormDep';

const Edit = () => {
  const {id} = useParams();
  return (
    <FormDep id={id} title='Editar Proceso'></FormDep>
  )
}

export default Edit