import React, { useState } from 'react';
import DataName from './components/FullName';
import DataBirth from './components/BirthDate';
import DataContact from './components/ContactData';
import Button from './components/Button';
import { DivContainer, Data, Result } from './styledComponent/styles.styled';
import axios from 'axios';
import '../src/App.css'
const URL = 'http://localhost:5000/api/add-data'
function App() {
  const [showData, setshowData] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    segNombre: '',
    apePat: '',
    apeMat: '',
    dia: '',
    mes: '',
    anio: '',
    email: '',
    numberPhone: ''
  });

  const changeForm = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const sessions = () => {
    const { nombre, segNombre, apePat, apeMat, dia, mes, anio, email, numberPhone } = form
    sessionStorage.setItem('Name', nombre)
    sessionStorage.setItem('secondName', segNombre)
    sessionStorage.setItem('lastName', apePat)
    sessionStorage.setItem('mothers_last_Name', apeMat)
    sessionStorage.setItem('day', dia)
    sessionStorage.setItem('month', mes)
    sessionStorage.setItem('year', anio)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('phoneNumber', numberPhone);
  }

  const saveData = async () => {
    const { nombre, segNombre, apePat, apeMat, dia, mes, anio, email, numberPhone } = form
    sessions()
    let fechaNacimiento = `${anio}-${mes}-${dia}`;
    const response = await axios.post(URL, {
      nombre: nombre || '',
      segundoNombre: segNombre || '',
      apellidoPaterno: apePat || '',
      apellidoMaterno: apeMat || '',
      FechaNacimiento: fechaNacimiento,
      email: email || '',
      telefono: numberPhone || ''
    });
    const { data } = response;
    if (data.response !== null && data.response !== '') {
      setshowData(true);
    }
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DivContainer>
        <DataName form={form} changeForm={changeForm} />
        <br />
        <DataBirth form={form} changeForm={changeForm} />
        <br />
        <DataContact form={form} changeForm={changeForm} />
        <br />
        <Button createSession={saveData} />
        <br />
        {showData && (
          <Result className="contact-details" >
            <Data><b>DATOS INSERTADOS:</b></Data>
            <Data><b>Fecha de nacimiento:</b> {form.dia} {form.mes} {form.anio}</Data>
            <Data><b>Correo electrónico:</b> {form.email}</Data>
            <Data><b>Teléfono celular:</b> {form.numberPhone}</Data>
            <Data><b>Nombre:</b> {form.nombre} {form.segNombre} {form.apePat} {form.apeMat}</Data>
          </Result>
        )}

      </DivContainer>
    </div>
  );
}

export default App;
