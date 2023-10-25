import React from 'react';
import { Title, Description } from '../styledComponent/styles.styled';
import useInputField from './Hooks/useInputField';

const FullName = ({ form, changeForm }) => {
    const { nombre, segNombre, apePat, apeMat } = form;

    return (
        
    <div className="chat-bot-container">
        <div className="chat-bot">
        
                <div className="chat-header">
                        <Title>¿Cuál es tu nombre?</Title>
                </div>
                <div className="chat-messages">

                    {useInputField('Nombre', 'nombre', changeForm, form.nombre)}
                    {useInputField('Segundo nombre', 'segNombre', changeForm, form.segNombre)}
                    {useInputField('Apellido paterno', 'apePat', changeForm, form.apePat)}
                    {useInputField('Apellido materno', 'apeMat', changeForm, form.apeMat)}
                </div>
           <br />
           {nombre !== '' && (
           <div className="contact-details" >
               <Description> {`${nombre} ${segNombre} ${apePat} ${apeMat}`}</Description>
           </div>
)}
       </div>
    </div>
    )
}
export default FullName;