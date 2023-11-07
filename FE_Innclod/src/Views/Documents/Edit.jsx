import React from 'react';
import { useParams } from 'react-router-dom';
import FormDocto from '../../Components/FormDocto';

const Edit = () => {
  const {id} = useParams();
  return (
    <FormDocto id={id} title='Editar tipo de documento'></FormDocto>
  )
}

export default Edit